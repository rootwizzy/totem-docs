## Deploying your API Server
Run `./repos/totem-api/totem-cli/bin/totem-deploy -o PATH_TO_PACKAGE_FILE --api`

> The deploy_run_options:framework_run_options:new key may need to be added or set to true if a new Rails application is being generated.  If deploying into an existing application, this should be false.

**Before continuing, make sure .env is in the gitignore file for the project.**

If the environment is new, the .env file will need to be established and the Heroku application created.  Follow these steps to initialize the Git repo for Heroku:
Create a new Git repository

```bash
$ cd my-project/
$ git init
$ heroku git:remote -a HEROKU-APP-NAME
````
Deploy your application by Commiting your code to the repository and deploy it to Heroku using Git.

```bash
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

Add the redis to go addon and update the .env with the new REDIS_URL.  Run a heroku config:push to set up the ENV variables on Heroku needed for the application.

A Procfile may be needed depending on what web server you are running - if using Passenger, the contents will be something like:
`web: bundle exec passenger start -p $PORT`
New entries will be needed if background processing is needed.

> Ensure .env is in .gitignore.
