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