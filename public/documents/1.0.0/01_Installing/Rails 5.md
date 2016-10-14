# Installation
> Hey!! This process should be done on a fresh installation of Rails 5.0+, some files will be force replaced and data may be lost to default values!

Add this line to your application's Gemfile:

```ruby
gem 'totem-lodestar', :git => 'https://github.com/rootwizzy/totem-lodestar'
```

Install the gem with

```bash
$ bundle install
```

Generate and inject engine requirements with

```bash
$ rails g totem:lodestar:install
```

After the install, configure your database settings in `app/config/database.yml` these will be defaulted to values that may not be valid in your environment.

> The engine requires postgres to be the database of the application at this time.

Migrate the database

```bash
rails [db:drop] db:create db:migrate
```

> Before this last step you must have the documents directory added currently it must be `app/public/documents/` within the `documents/` directory there must be at least one version denoted. (ex: 1.0.0)

Generate the documents

```bash
rails totem:lodestar:generate
```


## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
