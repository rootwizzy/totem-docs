# Changesets

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