## Create the Ember Application
To create a new ember application use totem-app

`./repos/totem-api/totem-cli/bin/totem-app thinkspace-orchid -o PATH_TO_PACKAGE_FILE --new -f`

After it has completed, change into the application directory and run

`bundle install`

`rake db:drop db:create totem:db:reset` with optional `CONFIG=your-db-config-names`

> If you are getting `ts_user` error with role not found, update the `thinkspace-orchid/config/secrets.yml` `totem_database:username` portion according to the role established on your computer.