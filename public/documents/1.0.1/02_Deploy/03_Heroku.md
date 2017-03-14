## Create Production DB Mirror for Development
Get the production database dump from Herkou through either manually downloading the `heroku pg:backups public-url` link, or run a command like `curl -o latest.dump `heroku pg:backups public-url``

After you have the dump, you will run a `pg_restore` that looks like: 
    `pg_restore --verbose --clean --no-acl --no-owner -h localhost -U PG_ROLE_HERE -d DATABASE_NAME_HERE latest.dump`

## Create database with totem copy and deploy to staging
Generate an updated config.yml - may need to run a schema diff `./repos/totem-api/totem-db-migrate/bin/totem-schema-diff -c repos,thinkspace-api,migrate,to_components --migrate` to see if any changes are made.

Get current production database from Heroku (see: How to create a development database that mirrors a production database from Heroku).  Restore it under a unique name to be used in the database.yml.  Add an entry to the database.yml that looks something like (change names to whatever you restored to for the `database:` portion:

```yaml
development_old_db:
  <<: *default
  database: old_ts_development
```

Add totem-db-migrate to the Gemfile and bundle install:
`gem 'totem-db-migrate', '0.5.0', path: 'your-path/repos/totem-api/totem-db-migrate'`

Run the following copy commands (may need to adjust depending on situation, but this is the default set):

```bash
rake db:drop db:create db:schema:load  #=> assumes no new migrations (or can do rake totem:db:reset[none])
rake totem:db:copy:old_to_new[thinkspace,migrate,to_components] #=> 07/10/2015 elapsed time: 00:05:40
rake totem:db:copy:make[thinkspace,migrate,to_components] S=phase_components
rake totem:db:domain:create[thinkspace*]
```

If deploying to Heroku, dump the new development database with: run `pg_dump -Fc --no-acl --no-owner -U myUserName databbase-name > myAppName_local.dump`

If Holly’s VM cases are needed (meaning, this is the first time this has been done) - you will need to run `rake thinkspace:migrate:assignments[../ts1-cases/assignments/assignments] IMAGE_PREFIX=https://s3.amazonaws.com/thinkspace_cases/vm_images USER_ID=# SPACE_ID=#`  -- fill in USER_ID and SPACE_ID as needed.  Note: This should not be ran outside of once ever.  It may be needed for future assignments, but not the VM cases.

## Restore a Heroku DB from a development version:
Dump the database as described above, upload to S3, then run:
`heroku pg:backups restore “S3_URL_HERE” DATABASE_URL`

## How to dump a local database into a Heroku friendly format:
If deploying to Heroku, dump the new development database with: 
run `pg_dump -Fc -h localhost --no-acl --no-owner -U myUserName database-name > myAppName_local.dump`