Instructions and compability are based off of Debian 9 (codename Stretch) systems such as Ubuntu 16.04 or Mint 18. Earlier or later versions may not work with certain packages or commands.

[Fresh Install](#fresh-install) is where you start if you just formatted your system and have not setup your development environment yet.

[Application Setup](#application-setup) is where you want to start if you are upgrading from an existing development environment.

[Troubleshoot](#troubleshooting) if you are encountering any issues with the process.

# Versions
  - **ruby:**       v2.3.1    (current stable release)
  - **rails:**      v5.0.0.1  (Rails 5 requires ruby v2.2.2+)
  - **node:**       v6.9.1    (stable v6 LTS release - Boron)
  - **ember-cli:**  v2.9.1    
  - **ember:**      #lts-2.8  (lts = 'long term support')
  - **ember-data:** v2.8.1
  - **postgreSQL:** v9.5.5

---

# Fresh Install
## Upgrade base packages
Make sure all of your OS packages are up to date
- `sudo apt-get upgrade` (may take awhile)
- `sudo apt-get update`

## Install Git
- `sudo apt-get install git`
- setup ssh-key for cloning (optional)
  - `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
  - add ssh key from `~/.ssh/id_rsa.pub` to github via account settings. [Here](https://help.github.com/articles/generating-an-ssh-key/) for help.

## Install PostgreSQL
Setup PostgreSQL for development databases
- `sudo apt-get install postgresql postgresql-contrib`
- `sudo apt-get install libpq-dev`

Create Database Roles and Tables
- `psql -U postgres -h localhost -W` when prompted password should be: `password`
  - `create user oauth_user with password 'password';`
  - `create user ts_user with password 'password';`
  - `\q`

## Login Shell
Make sure your terminal is using a login shell.

- Open a terminal window
  - Go to `Edit > Profile Preferences`
  - Switch to the `Command` tab and enable `Run command as a login shell`
- Close and reopen terminal windows to apply this.

---

# Application Setup
Here we will being the process of installing or updating all the requirements. Make sure you have everything from [Fresh Install](#fresh-install) before starting.

## Install RVM
The version of RVM used currently is `v1.27.0`

- If you already have RVM
  - `rvm get stable`
  - `rvm -v`              #=> rvm 1.27.0 (latest) by Wayne E. Seguin <wayneeseguin@gmail.com>, Michal Papis <mpapis@gmail.com> [https://rvm.io/]

- If you need to install RVM
  - run `\curl -sSL https://get.rvm.io | bash -s stable --ruby`
  - If you run into an error about a missing gpg2 key
    - run `gpg2 --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`
  - After RVM is installed run `source /home/$USER/.rvm/scripts/rvm`

## Install Ruby
The version of Ruby used currently is `v2.3.1`

- `rvm install 2.3.1`
- `rvm list`            #=> ruby-2.3.1 should be listed
- `rvm --default use 2.3.1`

## Install NVM
The version of NVM used currently is `v0.32.1`

- `curl https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash`
- **close and open new terminal**
- `nvm --version`      #=> 0.32.1

## Install Node
The version of Node used currently is `v6.9.1 (LTS: Boron)`

- `nvm ls-remote`       #=> v6.9.1 (Latest LTS: Boron) should be listed
- `nvm install 6.9.1`
- `nvm alias default 6.9.1`
- `nvm ls `             #=> should see v6.9.1 installed locally and set as the default
- `nvm use default`     #=> Now using node v6.9.1 (npm v2.15.9)

## Gemset Setup
Create isolated gemsets for Rails 5 development

- `rvm use default`
- `rvm gemset create rails5`
- `rvm use ruby-2.3.1@rails5 --default`
- `rvm gemset list`     #=> list all gemsets for ruby; should include *=> rails5*

### Updated Scripts
Update your *aliases* or scripts to Match the New Values *(if needed)*

Example:

```
  #=> home/.bash_aliases
  alias rvm23='rvm use ruby-2.3.1'
  alias rvmc='rvm gemset use rails5'
```

## Install Rails 5
This portion is assuming you are using the `rails5` gemset (see [Gemset Setup](#gemset-setup))

- `gem update --system`
- `gem install rails -N`
- `rails --version`     #=> Rails 5.0.0.1

## Install ember-cli & Bower
> A newer version of ember-cli (e.g. 2.10.x) may work fine. If not uninstall (npm uninstall -g ember-cli) and install v2.9.1 (npm install -g ember-cli@2.9.1).

- `npm install -g ember-cli`
- `ember --version`     #=> ember-cli 2.9.1
  - folder: *home/.nvm/versions/node/v6.9.1/lib/node_modules* #=> and should see *ember-cli* installed
- `npm install -g bower`
- `bower --version`     #=> 1.7.9

## Install Redis 
*_(skip this section if you already have redis installed)_*

* `sudo apt-get install redis-server`
* restart ubuntu
  * if get 'network disconnected' after installing redis and restarting ubuntu, can remove the auto startup and start manually
    * `sudo update-rc.d -f redis-server remove`
    * restart unbuntu
    * in termial enter `redis-server`

- Some redis-cli debug commands
  * in terminal enter *redis-cli*
    * client list #=> connected clients e.g. socket.io server
    * pubsub channels *
    * monitor  #=> shows connections, published messages, etc. as they happen
    * exit     #=> exit redis-cli; to exit monitor: ctrl-C

## Directory Structure
Before Install: (required)

```
  ~/Desktop
    |- ember20
      |- apps-ember
      |- apps-node
      |- apps-rails
      |- repos
      |- repos-sio
```

After Install:

```
  ~/Desktop
    |- ember20
      |- apps-ember
         |- orchid  #=> [generated (totem-ember-cli)] Ember 2.8LTS application with engines
      |- apps-node
         |- orchid  #=> need to manually create
            |- nodel_modules [generated (manual copy & npm install)] via npm install
               |- thinkspace-socketio-server #=> [generated] via npm install
               |- totem-socketio-server      #=> [generated] via npm install
               |- #=> many additional node modules
                  #=> npm v3 flattens the dependencies
                  #=> e.g. will not nest/duplicate in 'mod-name/node_modules' unless version conflicts
            |- app.js         #=> [copy] manually copied from totem-socketio-server/node_files
            |- node_env       #=> [copy] manually copied from totem-socketio-server/node_files
            |- package.json   #=> [copy] manually copied from totem-socketio-server/node_files
      |- apps-rails
         |- orchid       #=> [generated (totem-ember-cli)] Rails 5 application
         |- totem-oauth  #=> [clone] Rails 4 application
      |- repos
         |- thinkspace-api     #=> [clone] Ember engines version
         |- thinkspace-client  #=> [clone] Ember engines version
         |- totem-api          #=> [clone] Ember engines version; includes Active Model Serializers v10
         |- totem-client       #=> [clone] Ember engines version
      |- repos-sio
         |- thinkspace-socketio-server #=> [clone]
         |- totem-socketio-server      #=> [clone]
```

## Clone Repos
> Ensure all repos have the *development* branch checked out if applicable.

- In the ~/Desktop/ember20/repos folder, run:
  - `git clone git@github.com:sixthedge/etotem-client.git`
  - `git clone git@github.com:sixthedge/etotem-api.git`
  - `git clone git@github.com:sixthedge/ethinkspace-client.git`
  - `git clone git@github.com:sixthedge/ethinkspace-api.git`
 
- In the ~/Desktop/ember20/apps-rails folder, run:
  - `git clone git@github.com:sixthedge/totem-oauth.git`

- In the ~/Desktop/ember20/repos-sio folder, run:
  - `git clone git@github.com:sixthedge/totem-socketio-server.git`
  - `git clone git@github.com:sixthedge/thinkspace-socketio-server.git`

## Build Scripts
> The scripts are only for convience. They can be run manually if wanted (e.g. not via a script).

### New Rails App
- Make sure the **rails5** gemset (installed above) is current in order to run the scripts.
- Ensure the *scripts/env_variables* match your environment.


```
  cd ~/Desktop
  ./ember20/repos/ethinkspace-api/migrate/scripts/new-rails-app.sh

  ...

  cd ~/Desktop/ember20/apps-rails/orchid
  bundle install
```

### New Ember App
- Ensure the *scripts/env_variables* match your environment.

```
  cd ~/Desktop
  ./ember20/repos/ethinkspace-api/migrate/scripts/new-ember-app.sh
```

### Bundle Totem Oauth
- **open new terminal**
- switch to your ruby and gemset for **totem-oauth**

```
  cd ~/Desktop/ember20/apps-rails/totem-oauth
  rvm use ruby-2.2.1
  rvm use gemset totem-oauth
  bundle install
```

## Seed Database

### Rails App
> Note: Rails 5 now uses **rails** not *rake*

- Ensure your *config/secrets.yml* totem_database name, username and password match your environment.
- You may have to run `rails db:environment:set RAILS_ENV=development` before migrating your database

```
  cd ~/Desktop/ember20/apps-rails/orchid
  rails db:drop db:create totem:db:reset[staging] CONFIG=all AI=true
```

### Oauth App
  * **open new terminal**
  * switch to your ruby and gemset for **totem-oauth**

```
  #=> assumes using Rails 4.x and rake
  cd ~/Desktop/ember20/apps-rails/totem-oauth
  rvm use ruby-2.2.1
  rvm gemset use rails4
  rake db:drop db:create db:reset
```

## Socketio Server

### Install
1. create socketio node application directory (`~/Desktop/ember20/apps-node/orchid`)
2. copy repo file in *totem-socketio-server/node_files* to this directory
  - `app.js`
  - `node_env`
  - `package.json`


3. install totem and thinkspace socketio servers via `npm install`

```
  cd ember20/apps-node/orchid
  npm install ../../repos-sio/totem-socketio-server
  npm install ../../repos-sio/thinkspace-socketio-server
```

### Setup Environment
- manually modify the **node** application copy of *app.js* to require thinkspace (e.g. uncomment the example line)
- review (and update if needed) the **node** application copy of *node_env* to match your development environment
- ensure the **ember** application environment matches the **node** application environment

```
  #=> ember20/apps-node/app.js

  var server = require('totem-socketio-server').create_server();
  require('thinkspace-socketio-server').create(server)

  process.on('SIGINT', () => {
    console.log('');
    console.log('--exiting totem-socketio-server--');
    process.exit(0);
  });
```

```
  #=> ember20/apps-ember/orchid/config/environment.js

  "pub_sub": {
      "namespace": "thinkspace"
  },

  if (environment === 'development') {
    ENV.totem.pub_sub.socketio_url        = 'http://localhost:4444'; #=> must match node SIO_APP_HOST & SIO_APP_PORT
    ENV.totem.pub_sub.socketio_client_cdn = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js';
```

### Running the server
To start the server 

```
cd ember20/apps-node/orchid
source node_env  #=> set the environment values in the current shell
node app.js
```

To stop the socketio server enter **ctrl-C**

---

# Enginize

## Base Directory Structure

```
  my-package-name
    |- addon
       |- components
          |- main.coffee
       |- initializers
          |- totem.coffee
       |- locales         #=> [optional]
       |- services        #=> [optional]
       |- managers        #=> [optional]
       |- mixins          #=> [optional]
       |- templates
          |- components
             |- main.emblem
          |- application.emblem
    |- config
       |- environment.js
    |- _config.coffee     #=> package dependent values
    |- engine.coffee      #=> static for all engines
    |- routes.coffee      #=> only if a 'routeable' engines

    #=> no 'app' directory
``` 

## Configuration
* package name in 3 places:
  1. index.js
  1. package.json
  1. config/environment.js

* review addon/_config.coffee
* remember *casespace* service is now **thinkspace** e.g. ember.computed.reads 'thinkspace.current_phase'

## Add Dock Routeless Engine
- each mounting engine
  - `add_engine  'engine-name': {dock: {routes: ['someroute.show'], right_pocket: true}}`

* `[platform]-common/app/templates/components/dock_engine_mount.emblem`
  * add *mount* of engine (under an if)

* make sure `addon/templates/application.emblem` exists
  * includes *component 'main'* (or main component to be called e.g. dock)

* *main* component includes:

```
  import ember  from 'ember'
  import base   from 'thinkspace-base/components/base'
  import m_dock from 'thinkspace-dock/mixins/main'

  export default base.extend m_dock,
```

* define (or likely rename) a computed property called **can_access_addon**
* define **addon_config** hash
* delete open and close actions if exist
* modify components and templates as needed


## Changesets

* define validators using *totem_changeset* helpers
  * each model attribute can be set to an array of validators
  * *totem_changeset* helpers (see https://github.com/DockYard/ember-changeset-validations for options):
    * vpresence
    * vlength
    * vnumber
    * vexclusion
    * vinclusion
    * vconfirmation
    * vformat
    * vdecimals (custom totem validator for number of decimals)

* create changeset with *totem_changeset.create(model, validator-hash)*


Example Component:

```ruby
  import totem_changeset from 'totem/changeset'

  export default ...
    model    = @get('model')
    presence = totem_changeset.vpresence(presence: true)
    @set 'changeset', totem_changeset.create model,
      title: [presence, totem_changeset.vlength(min: 4)]
      url:   [presence, totem_changeset.vurl()]

    ## Other typical changeset functions:
    changeset.validate().then =>
      unless changeset.get('is_valid')
        <code here>
    
    changeset.show_errors_on() #=> e.g. do after a submit or save

    changeset.first_error_on() #=> only show first error when multiple errors are possible
```

Example Engine Template:


```
  = input value=changeset.title
  / single attribute 'title' error(s)
  component '__changeset/errors' changeset=changeset attribute=title
  ...
  / all attribute errors (e.g. at bottom of page)
  component '__changeset/errors' changeset=changeset
```

---

# Potential Errors

**NoMethodError: undefined method `assets' for #\<Rails::Application::Configuration...\>**
_source:_ 'ckeditor' require in html engine.rb when require is in file [platform]-html/lib/[platform]/html/engine.rb
_fix:_ comment the require statement

_comments:_ need to determine if this is a version problem and can be fixed

**flash= error**
_source:_ protect_from_forgery call
_work-around:_ comment line 'config.api_only = true' in apps-rails/orchid/config/application.rb
_fix:_ changed the totem-authentication-session api authentication_controller (see comments in controller)

_TODO:_ determine if this is a security risk (or need to implement x-site tokens) or is ok
_comments:_ a *get* to the controller action is ok

**ActiveRecord::StatementInvalid: PG::UndefinedTable: ERROR:  relation "[platform]_common_users" does not exist**
_source:_ seeding database after switch from thinkspace to open-tbl (or vice-versa) in same database
_fix:_ comment the apps-rails/orchid/config/environments/development.rb code below; can uncomment after seeding.

```
  # # ### Trigger the totem associations to create the model associations and serializers
  # # ### to speed up the initial login (do not do when running rails c or a rake task).
  # unless (defined?(::Rails::Console) || File.split($0).last == 'rake')
  #    Thinkspace::Common::User.first
  # end
  # # ### If using the Rails console, do not define serializers
  # if defined?(::Rails::Console)
  #   ENV['TOTEM_STARTUP_NO_SERIALIZERS'] = 'true'
  # end
```

**[ERROR] Totem::Core::Support::SeedLoader: Resource path "...thinkspace-api/thinkspace-casespace/db/test_data/files/file.pdf" is not a file.**
_source:_ missing **file.pdf** seed file (not in github)
_fix:_ add a sample file.pdf in [platform]-api/[platform]-casespace/db/test_data/files



**[ERROR] Totem::Core::Support::SeedLoader: Resource path ".../thinkspace-api/thinkspace-casespace/db/test_data/files/file.pdf" is not a file.**

_source:_ missing `file.pdf` seed file (not in github)
_fix:_ add a sample file.pdf in `[platform]-api/[platform]-casespace/db/test_data/files`

**ActiveRecord::StatementInvalid: PG::UndefinedColumn: ERROR:  column "authable_type" of relation "[platform]_markup_comments" does not exist**

_source:_ database seed (unknown root cause)
_fix:_ re-run database seed