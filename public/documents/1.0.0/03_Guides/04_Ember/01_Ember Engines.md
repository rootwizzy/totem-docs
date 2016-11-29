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
        |- _config.coffee     #=> package dependent values
        |- engine.coffee      #=> static for all engines
        |- routes.coffee      #=> only if a 'routeable' engines
    |- config
       |- environment.js


    #=> no 'app' directory
``` 

## Configuration
package name in 3 places:
1. index.js
2. package.json
3. config/environment.js

- review `addon/_config.coffee`
- remember *casespace* service is now **thinkspace** e.g. ember.computed.reads 'thinkspace.current_phase'

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
