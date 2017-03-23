Instructions and compability are based off of Debian 9 (codename Stretch) systems such as Ubuntu 16.04 or Mint 18. Earlier or later versions may not work with certain packages or commands.

[Fresh Install](#fresh-install) is where you start if you just formatted your system and have not setup your development environment yet.

[Application Setup](#application-setup) is where you want to start if you are upgrading from an existing development environment.

[Troubleshoot](#troubleshooting) if you are encountering any issues with the process.

# Versions
  - **ruby:**       `v2.3.1`    (current stable release)
  - **rails:**      `v5.0.0.1`  (Rails 5 requires ruby v2.2.2+)
  - **node:**       `v6.9.1`    (stable v6 LTS release - Boron)
  - **ember-cli:**  `v2.9.1`   
  - **ember:**      `v2.8#lts`  (lts = 'long term support')
  - **ember-data:** `v2.8.1`
  - **postgreSQL:** `v9.5.5`
  - **git:**        `v2.7.4`
  - **nvm:**        `v0.32.1`
  - **rvm:**        `v1.27.0`
  - **redis:**      `v3.0.6`

---

# Fresh Install
## Upgrade base packages

```
  sudo apt-get upgrade
  sudo apt-get update
```

## Install Git

```
  sudo apt-get install git
```

**(recommended):** Setup ssh-key for git

```
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
This will generate a key in `~/.ssh/id_rsa.pub`. Add this key to your Github account settings. See [Generating an ssh key](https://help.github.com/articles/generating-an-ssh-key/) for additional help.

## Install PostgreSQL
- Setup PostgreSQL for development databases

```
  sudo apt-get install postgresql postgresql-contrib
  sudo apt-get install libpq-dev
```

- Create Database Roles and Tables

Run `psql -U postgres -h localhost -W` then create the following roles

```
  create user oauth_user with password 'password';
  create user ts_user with password 'password';
```

To quit the Postgres terminal use `\q` or `\help` for more info

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

### Gemset Setup
Create isolated gemsets for Rails 5 development

```
  rvm use default
  rvm gemset create rails5
  rvm use ruby-2.3.1@rails5 --default
  rvm gemset list #=> should include *=> rails5*
```

When opening new terminals or running any Rails scripts ensure you are using this new gemset via the `rvm gemset use rails5` command.

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
Create a wrapper folder for the applications and code repositories, this will be the basis of the build scripts and beyond the root folder the structure of the directory is mandatory. 

_We recommend using `~/Projects` (/home/$USER/Projects/)._

- Create two folders, `apps-rails` and `apps-ember` inside the root folder. 
- Clone [Cellar](https://github.com/sixthedge/cellar) repo into the root folder. 
- You will also have to clone your Oauth server into the `apps-rails` directory as well, everything else will be generated.

Before Install:

```
  ~/Projects
    |- apps-ember
    |- apps-rails
    |- cellar
```

After Install:

```
  ~/Projects
    |- apps-ember
       |- orchid  #=> [generated (totem-ember-cli)] Ember 2.8LTS application with engines
    |- apps-rails
       |- orchid       #=> [generated (totem-app)] Rails 5 application
       |- totem-oauth  #=> [cloned]
    |- cellar #=> [cloned]
```

### Build Rails App
> Make sure the **rails5** gemset is in [active](http://totem-docs.herokuapp.com/1.0.1/setup/environment#gemset-setup).

Building the rails application is done via the [totem-app](https://github.com/sixthedge/cellar/blob/master/src/totem/api/totem-cli/lib/totem/cli/totem_app.rb) command. It will generate an `orchid` folder inside of your `apps-rails`, this is the instance of your Rails application.

- Start by changing into the base of the `cellar` repo, there should be a `src` folder in this directory. From here you will un the `totem-app` command to start the build process.
  - The `totem-app` binary exists in the `totem/api/totem-cli/bin` directory
  - The required parameter is the destination & name of the application, this will be `../apps-rails/orchid`
  - Additional build scripts option `-o` points to a build YAML at `./thinkspace/packages/otbl/api/run.yml`
  - Add the options `--new -f` after the build YAML

Full `totem-app` command

```
  ./src/totem/api/totem-cli/bin/totem-app ../apps-rails/orchid -o ./src/thinkspace/packages/otbl/api/run.yml --new -f
```

- Once the Rails application is built we complete it by bundling the gems and migrating the database
  - Change into `~/Projects/apps-rails/orchid/` and run `bundle install`
  - Ensure your *config/secrets.yml* totem_database name, username and password match your [environment](http://totem-docs.herokuapp.com/1.0.1/setup/environment#install-postgres-sql), iou may have to run `rails db:environment:set RAILS_ENV=development` before migrating your database.
  - Migrate the database with `db:drop db:create totem:db:reset[ra] CONFIG=all AI=true`

### Build Ember App
Building the ember application is done via [totem-ember-cli](https://github.com/sixthedge/cellar/blob/master/src/totem/api/totem-cli/lib/totem/cli/totem_ember.rb) command. It will generate an `orchid` folder inside of your `apps-ember`, this is the instance of your Ember application.

- Start by changing into the base of the `cellar` repo, there should be a `src` folder in this directory. From here you will un the `totem-ember-cli` command to start the build process.
  - The `totem-ember-cli` binary exists in the `totem/api/totem-cli/bin` directory
  - The required parameter is the destination & name of the application, this will be `../apps-ember/orchid`
  - Additional build scripts option `-o` points to a build YAML at `./thinkspace/packages/otbl/client/run.yml`
  - Add the options `--new -f -n` after the build YAML

Full `totem-ember-cli` command

```
  ./src/totem/api/totem-cli/bin/totem-ember ../apps-ember/orchid -o ./src/thinkspace/packages/otbl/client/run.yml --new -f -n
```

### Build Totem Oauth
Using [Totem Oauth](https://github.com/sixthedge/totem-oauth) clone into the `apps-rails` directory and switch to the `rails5` branch.

```
  cd ~/Projects/apps-rails/totem-oauth
  rvm use gemset rails5
  bundle install

  ...

  rake db:drop db:create db:migrate db:seed
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

```javascript
  #=> ember20/apps-node/app.js

  var server = require('totem-socketio-server').create_server();
  require('thinkspace-socketio-server').create(server)

  process.on('SIGINT', () => {
    console.log('');
    console.log('--exiting totem-socketio-server--');
    process.exit(0);
  });
```

```javascript
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