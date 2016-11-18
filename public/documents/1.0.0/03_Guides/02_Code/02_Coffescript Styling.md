# CoffeeScript Style Guide
This guide was created heavily based off [this](https://github.com/polarmobile/coffeescript-style-guide) coffescript style guide from [Polarmobile](https://github.com/polarmobile).

## Code layout
### Encoding
UTF-8 is the preferred source file encoding.

### Tabs or Spaces?
Use **spaces only**, with **2 spaces** per indentation level. Never mix tabs and spaces.

### Maximum Line Length
Limit all lines to a maximum of 79 characters.

### Blank Lines
Separate top-level function and class definitions with a single blank line.

Separate method definitions inside of a class with a single blank line.

Use a single blank line within the bodies of methods or functions in cases where this improves readability (e.g., for the purpose of delineating logical sections).

### Trailing Whitespace
Do not include trailing whitespace on any lines.

### Optional Commas
Avoid the use of commas before newlines when properties or elements of an Object or Array are listed on separate lines.

**Correct**

```ruby
foo = [
  'some'
  'string'
  'values'
]

bar:
  label: 'test'
  value: 87
```
_Incorrect_

```ruby
foo = [
  'some',
  'string',
  'values'
]

bar:
  label: 'test',
  value: 87
```

## Module Imports
If using a module system (CommonJS), `require` statements should be placed on separate lines.

These statements should be grouped in the following order:

1. Standard library imports _(if a standard library exists)_
2. Third party library imports
3. Local imports _(imports specific to this application or library)_

```ruby
require 'lib/setup'
Backbone  = require 'backbone'
my_module = require 'myModule'
```

## Whitespace in Expressions and Statements
Avoid extraneous whitespace immediately inside parentheses, brackets, braces and before commas.

**Correct**

```ruby
  this.get('foo', 'bar')
  ['1', '2', '3']
  console.log x, y
```

_Incorrect_

```ruby
  this.get( 'foo', 'bar' )
  [ '1', '2', '3' ]
  console.log x , y
```

## Naming Conventions
Use `snake_case` to name all variables, methods, and object properties.

_(The **official** CoffeeScript convention is `camelCase`, because this simplifies interoperability with JavaScript but at the expense of readability. For more on this decision, see [here][https://github.com/jashkenas/coffeescript/issues/425].)_

For `CONSTANTS` use all uppercase with underscores:

```ruby
CONSTANT_FOO_BAR
```

Methods and variables that are intended to be "private" should begin with a leading underscore:

```ruby
_privateMethod: ->
```

## Functions
_(These guidelines also apply to the methods of a class.)_

When declaring a function that takes arguments, always use a single space after the closing parenthesis of the arguments list:

```ruby
foo = (arg1, arg2) -> # Correct
foo = (arg1, arg2)->  # Incorrect
```

Do not use parentheses when declaring functions that take no arguments:

```ruby
bar = ->    # Correct
bar = () -> # Incorrect
```

In cases where method calls are being chained and the code does not fit on a single line, each call should be placed on a separate line and indented by one level (i.e., two spaces), with a leading `.`.

```ruby
[1..3]
  .map((x) -> x * x)
  .concat([10..12])
  .filter((x) -> x < 11)
  .reduce((x, y) -> x + y)
```

When calling functions, choose to omit or include parentheses in such a way that optimizes for readability. Keeping in mind that "readability" can be subjective, the following examples demonstrate cases where parentheses have been omitted or included in a manner that the community deems to be optimal:

```ruby
baz 12

brush.ellipse x: 10, y: 20 # Braces can also be omitted or included for readability

foo(4).bar(8)

obj.value(10, 20) / obj.value(20, 10)

print inspect value

new Tag(new Value(a, b), new Arg(c))
```

Avoid `return` where not required, unless the explicit return increases clarity.

Use splats (`...`) when working with functions that accept variable numbers of arguments:

```ruby
console.log args...

(a, b, c, rest...) ->
```

## Strings
Prefer single quoted strings `''` instead of double quoted `""` strings, unless features like string interpolation are required.

Use string interpolation instead of string concatenation:

```ruby
"this is an #{adjective} string"      # Correct
"this is an " + adjective + " string" # Incorrect
```

## Conditionals
For singular condition requiring a negative use `unless` over `if`

For multiple conditions `if...else` do not use `unless...else`

## Looping and Comprehensions
Take advantage of comprehensions whenever possible:

```ruby
  # Correct
  result = (item.name for item in array)

  # Incorrect
  results = []
  for item in array
    results.push item.name
```

To filter:

```ruby
result = (item for item in array when item.name is "test")
```

To iterate over the keys and values of objects:

```ruby
object = one: 1, two: 2
alert("#{key} = #{value}") for key, value of object
```

## Object Notation

Prefer shorthand notation (`::`) for accessing an object's prototype:

```ruby
Array::slice # Yes
Array.prototype.slice # No
```

Prefer `@property` over `this.property`.

```ruby
return @property     # Correct
return this.property # Incorrect
```

However, avoid the use of **standalone** `@`:

```ruby
return this # Correct
return @    # Incorrect
```

### Extending Native Objects
Do not modify native objects.

For example, do not modify `Array.prototype` to introduce `Array#forEach`.


## Symbol Comprehension
`and` over `&&`.
`or` over `||`.
`is` over `==`.
`isnt` over `!=`.
`not`  over `!`.
`or=` should be used when possible:

```ruby
temp or= {}       # Correct
temp = temp || {} # Incorrect
```



