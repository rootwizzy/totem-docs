# Enginize
[Ember Engines](https://github.com/ember-engines/ember-engines) introduces a new architecture to Ember applications. Engines are in essence isolated packages that can be mounted to the main application, or within other engines and templates. One of the primary benefits besides modularization of functionality is that handles namespacing in a more flat structure. 

## Engine Types
There are two types of engines that are important to know when creating an engine package. These are [Routable Engines](#routable-engines) and [Route-less Engines](#route-less-engines).

### Routable Engines
Routable engines are mounted onto routes which exsist on the main application, or any other engine that contains routes. This enables the ability to nest engines within each other, and also infers that the main application is its own special type of engine.

Routable engines key difference to enable this functionality is that it also contains its own internal route map. This is important to understand because it creates a parent/child structure requiring some level of dependency management.

#### Routable Structure

```
  |- project
    |- my-package-name
      |- addon
        |- components
          |- main.coffee
        |- initializers
          |- totem.coffee
        |- helpers         #=> [optional]
        |- locales         #=> [optional]
        |- services        #=> [optional]
        |- managers        #=> [optional]
        |- mixins          #=> [optional]
        |- templates
          |- components
            |- main.emblem
          |- application.emblem
        |- _config.coffee     #=> package dependent values
        |- engine.coffee      #=> static for all engines
        |- routes.coffee      #=> only if a 'routeable' engines
      |- config
        |- environment.js
      |- index.js
      |- package.json
``` 

### Route-less Engines
Route-less engines are mounted into templates using the `mount` helper, these can not be mounted onto a route and do not have their own internal router.

#### Route-less  Structure
```
  |- project
    |- my-package-name
      |- addon
        |- components
          |- main.coffee
        |- initializers
          |- totem.coffee
        |- helpers         #=> [optional]
        |- locales         #=> [optional]
        |- services        #=> [optional]
        |- managers        #=> [optional]
        |- mixins          #=> [optional]
        |- templates
          |- components
            |- main.emblem
          |- application.emblem
        |- _config.coffee     #=> package dependent values
        |- engine.coffee      #=> static for all engines
      |- config
        |- environment.js
      |- index.js
      |- package.json
``` 

## Configuration
package name in 3 places:
1. index.js
2. package.json
3. config/environment.js

- review `addon/_config.coffee`
- remember *casespace* service is now **thinkspace** e.g. ember.computed.reads 'thinkspace.current_phase'

## Update/Install new Engines
run `~/Desktop/ember20/repos/ethinkspace-api/migrate/scripts/ember-ulk` to update and link ember packages into your `package.json`

## Add Dock Routeless Engine
- `add_engine  'engine-name': {dock: {routes: ['someroute.show'], right_pocket: true}}`

- in `[platform]-common/app/templates/components/dock_engine_mount.emblem` add `mount` of engine under an `if`

- make sure `addon/templates/application.emblem` exists and has `component 'main'` in the template

**main** component includes:

```ruby
  import ember  from 'ember'
  import base   from 'thinkspace-base/components/base'
  import m_dock from 'thinkspace-dock/mixins/main'

  export default base.extend m_dock,
```

- define (or likely rename) a computed property called `can_access_addon`
- define `addon_config` hash
- delete open and close actions if exist
- modify components and templates as needed
