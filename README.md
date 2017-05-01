# Totem Docs
[Totem Docs](http://totem-docs.herokuapp.com/) is the rails app responsible for handling markdown guides and parsed source code documentation. Totem Docs is a basic Rails 5 application that uses [Totem Lodestar](https://github.com/sixthedge/totem-lodestar) gem to perform the majority its functionality. Totem Docs is also deployed via [Travis CI](https://travis-ci.org/sixthedge/totem-docs) to [Heroku](https://www.heroku.com/)

## Prerequisites
- `ruby` 2.3.1+
- `rvm` 1.27.0+
- `rails` 5+
- `postgres` 9.5+
- `totem-lodestar` 0.5.7+
- `rootwizzy/groc`

### Database
Totem Docs (by proxy of Totem Lodestar) uses [Postgresql](https://www.postgresql.org/) as its database. For installing and setting up a Postgresql see [this](http://totem-docs.herokuapp.com/1.0.1/setup/environment#install-postgresql) section. The default role used for accessing the database is `postgres` but you can edit this via the `database.yml` to match your environment.

## Quick Install
- [Install RVM](http://totem-docs.herokuapp.com/1.0.1/setup/environment#install-rvm) and [Install Ruby](http://totem-docs.herokuapp.com/1.0.1/setup/environment#install-ruby)
- **(Optional)** Create or use a gemset specific to Rails 5
- Install Rails 5 `gem install rails`
- Clone [Totem Docs](https://github.com/sixthedge/totem-docs) into a local directory. (e.g `~/Projects/apps-rails/`)
- run `bundle install`
- run `rails db:drop db:create db:migrate`
- Run Install Generators with `rails generate totem:lodestar:install totem-docs`, check the files that are created and verify/modify them to your environment if needed.
- Generate guides with `rails totem:lodestar:generate`
- Generate API with `rails totem:lodestar:api`
- Use `rails s` and check `localhost:3000` in a browser to test

### Local Development
If you would like to develop on Totem Docs and Totem Lodestar in your local environment clone [Totem Lodestar](https://github.com/sixthedge/totem-lodestar) into a directory and run `bundle config.local.totem-lodestar /path/to/local/git/repo`. Without this it will pull the current master branch of lodestar and use that, so any updates to Totem Lodestar will have to be updated with `bundle install`

## Usage
Most commands used in Totem Docs will be inherited from Totem Lodestar. There are two primary areas of functionality, Guides and API. For deployment most of the process is automated when you push to the `master` branch of Totem Docs, the only exception being that the API has to be built prior to deployment.


### Guides
You will only need to run this command if you wish to test or view a document before pushing it up as it is part of the `.travis.yml` deploy process

- `rails totem:lodestar:generate` to compile the markdown files in the `totem-docs/public/documents` directory.

### API
API requires that you build the source documentation before deploying. For more documentation about the command see [here](http://totem-docs.herokuapp.com/api/totem-lodestar/lib/tasks/totem/lodestar/generate.html).

- For production building use `rails totem:lodestar:api[build]`
- For local testing use `rails totem:lodestar:api[build,local]`

### Settings
The settings file in `config` directory is used to pass custom config settings to lodestar. There should be default options that are currently used in Totem Docs but do make sure to edit the `repositories` section with the correct inputs. 

_Note: The `options` block is used to pass Groc arguments to the process_