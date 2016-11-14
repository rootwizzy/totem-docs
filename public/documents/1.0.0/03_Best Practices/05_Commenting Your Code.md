# Comment Markup for Source code
> This is currently still under development

At this time we are looking at (Yard)(http://yardoc.org/) as the basis for our documentation for our Ruby source (and hopefully all languages).

## Tags
For more documentation and examples see (Yard Tags)(http://www.rubydoc.info/gems/yard/file/docs/Tags.md#Tag_List).

> in the parameter list for tags the '->' means it appears on a new line and indented 2 spaces under the tag.

### Meta-Tags
- `@abstract description `
- `@api description` (transitive)
- `@author description`
- `@deprecated description`
- `@example [title] -> Code block`
- `@note description`
- `@option name [Types] option_key (default_value) description`
- `@overload method_signature(parameters) -> docstring`
- `@param name [Types] description`
- `@private` (transitive)
- `@raise [Types] description`
- `@return [Types] description`
- `@see name description`
- `@since description` (transitive)
- `@todo description`
- `@version description`
- `@yield [parameters] description`
- `@yieldparam name [Types] description`
- `@yieldreturn [Types] description`

### Directive-Tags
- `@!attribute [r | w | rw] attribute_name -> attribute docstring `
- `@!group description`
- `@!endgroup`
- `@!macro [attach | new] optional_name -> [macro expansion data] `
- `@!method method_signature(parameters) -> method docstring`
- `@!parse [language] code`
- `@!scope class | instance`
- `@!visibility public | protected | private`