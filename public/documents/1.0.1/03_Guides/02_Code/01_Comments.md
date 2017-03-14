# Comment Markup for Source code
We use a modified fork of the natural language parser [Groc](https://github.com/rootwizzy/groc). The major concept of this form of documentation is to keep the source and documentation as one cohesive piece. It takes the source comments are parses it out into markdown to be displayed along with the source.

It also has the ability to parse more traditional Document tags for structured API if the file in question requires such.

## Comment Format
For both `ruby` and `coffescript` the comments share a common designator which is the `#`.

### Single line comments

#### Coffeescript and Ruby
To start a comment to be parsed simply start the line with `#` anything following will be parsed into markdown and can use markdown syntax.

```ruby
  # ## Header 2 comment
  # This is a standard line
  foo.bar()

  # - List **Item**
  # - List Item
  # - __List__ Item
  #    - List Item
```

#### SCSS
Single line comments in SCSS are invoked with `//`

```css
  // Foo Bar Comment
  .class__element {
    color: white;
  }
```

### Multi line comments
#### Coffeescript
Comment blocks are wrapped in `###` such as

```ruby
  ###
  Foo Bar Comment Block
  ###
```

Inside a comment block a preceding `#` is not required for each line but will be parsed out if it is the chosen style. Inside the comment block each line is parsed like a normal markdown line.

#### Ruby
In ruby multi-line comments are generated with multiple single line comments `#`. This is because the `=begin` and `=end` designators do not parse within groc.

```ruby
  #
  # Foo Bar Comment Block
  #
```

#### SCSS
Start a comment block with `/*` and close the block with `*/`. These block can span multiple lines and any line within the block can be preceded with a `*` but is not required.


```css
  /*
  Foo Bar Comment block
  */
```

### Ignoring Comments
If you do not wish to have your comment converted into the markdown column, append the `}` after the comment indicator for single lines or whole blocks. This should work in Ruby, Coffeescript and SCSS

#### Ruby

### Markdown style
Currently we are using [Github Flavored Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) rendered through [Marked](https://github.com/chjj/marked). The code is highlighted via [highlight.js](http://highlightjs.org/).


### Tags
Tags can be used to denote a more structured documentation a la Jsdoc or yard. These tags will still be rendered into markdown with some cases having some text or structure added around the tags.

```ruby
  # Removes the filter by key from the pending query
  #
  # @public
  # @method remove_filter
  # @param {String} key property to filter against for each member
  #
  # @return {Hash} The full set of current filters
  remove_filter: (key) ->
    return if not key
    filters = @get('filters') || {}
    delete filters[key]
    @set 'filters', filters
    return filters

```

#### Tag Types

- Section: `Description`
  - @description

- Section: `Access`
  - @internal
  - @private
  - @protected
  - @public
  - @static

- Section: `Special`
  - @constructor
  - @deconstructor

- Section: `Type`
  - @constant
  - @method
  - @module
  - @package
  - @property

- Section: `Flags`
  - @accessor
  - @async
  - @asychronous
  - @getter
  - @recursive
  - @refactor
  - @setter
  - @defaultNoValue

- Section: `Metadata`
  - @alias
  - @publishes
  - @requests
  - @subscribes
  - @stype
  - @defaultHasValue

- Section: `Todo`
  - @todo

- Section: `Example`
  - @example
  - @examples
  - @usage

- Section: `Howto`
  - @howto

- Section: `Params`
  - @param

- Section: `Param`
  - @params
  - @param
  - @parameters

- Section: `Returns`
  - @return
  - @returns
  - @throw
  - @throws