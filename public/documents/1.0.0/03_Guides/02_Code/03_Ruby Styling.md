# Ruby Style Guide
This guide was created heavily based off [this](https://github.com/bbatsov/ruby-style-guide) ruby style guide from [bbatsov](https://github.com/bbatsov).

> Nearly everybody is convinced that every style but their own is ugly and unreadable. Leave out the "but their own" and they're probably right... -- Jerry Coffin (on indentation)

## Format
- Use `UTF-8` as the source file encoding.
- Limit lines to 80 characters.
- Avoid trailing whitespace.
- End each file with a newline.

### Semicolons
Don't use `;` to separate statements and expressions. As a corollary use only one expression per line.

```Ruby
  # bad
  puts 'foobar'; # superfluous semicolon

  puts 'foo'; puts 'bar' # two expressions on the same line

  # good
  puts 'foobar'

  puts 'foo'
  puts 'bar'

  puts 'foo', 'bar' # this applies to puts in particular
```

## Whitespace

- Use two **spaces** per indentation level (aka soft tabs). No hard tabs.

```Ruby
  # bad - four spaces
  def some_method
      do_something
  end

  # good
  def some_method
    do_something
  end
```

## Operators
Use spaces around operators, after commas, colons and semicolons. Whitespace might be (mostly) irrelevant to the Ruby interpreter, but its proper use is the key to writing easily readable code.

```Ruby
  sum = 1 + 2
  a, b = 1, 2
  class FooError < StandardError; end
```

The only exception, regarding operators, is the exponent operator:

```Ruby
  # bad
  e = M * c ** 2

  # good
  e = M * c**2
```

Use spaces around the `=` operator when assigning default values to method parameters:

```Ruby
  # bad
  def some_method(arg1=:default, arg2=nil, arg3=[])
    # do something...
  end

  # good
  def some_method(arg1 = :default, arg2 = nil, arg3 = [])
    # do something...
  end
```

**No space** after `!`.

```Ruby
  # bad
  ! something

  # good
  !something
```



No space inside range literals.

```Ruby
  # bad
  1 .. 3
  'a' ... 'z'

  # good
  1..3
  'a'...'z'
```

### Braces and Brackets
**No spaces** after `(`, `[` or before `]`, `)`.
**Use spaces** around `{` and before `}`.

```Ruby
  # bad
  some( arg ).other
  [ 1, 2, 3 ].each{|e| puts e}

  # good
  some(arg).other
  [1, 2, 3].each { |e| puts e }
```

`{` and `}` deserve a bit of clarification, since they are used
for block and hash literals, as well as string interpolation.

For hash literals two styles are considered acceptable. The first variant is slightly more readable (and arguably more popular in the Ruby community in general). 

The second variant has the advantage of adding visual difference between block and hash literals.

```Ruby
  # good - space after { and before }
  { one: 1, two: 2 }

  # good - no space after { and before }
  {one: 1, two: 2}
```

With interpolated expressions, there should be no padded-spacing inside the braces.

```Ruby
  # bad
  "From: #{ user.first_name }, #{ user.last_name }"

  # good
  "From: #{user.first_name}, #{user.last_name}"
```

Omit the outer braces around an implicit options hash.

```Ruby
  # bad
  user.set({ name: 'John', age: 45, permissions: { read: true } })

  # good
  user.set(name: 'John', age: 45, permissions: { read: true })
```

## Class And Modules
Use a consistent structure in your class definitions.
1. Extends & Includes
3. Inner Classes
4. Constants
5. Attribute Macros
6. Other Macros
7. Public Class Methods
8. Initialization
9. Public Instance Methods
10. Private & Protected Methods

```Ruby
  class Person
    # extend and include go first
    extend SomeModule
    include AnotherModule

    # inner classes
    CustomErrorKlass = Class.new(StandardError)

    # constants are next
    SOME_CONSTANT = 20

    # afterwards we have attribute macros
    attr_reader :name

    # followed by other macros (if any)
    validates :name

    # public class methods are next in line
    def self.some_method
    end

    # initialization goes between class methods and other instance methods
    def initialize
    end

    # followed by other public instance methods
    def some_method
    end

    # protected and private methods are grouped near the end
    protected

    def some_protected_method
    end

    private

    def some_private_method
    end
  end
```


### Class & Module Definitions
Prefer a single-line format for class definitions with no body.

```Ruby
  # bad
  class FooError < StandardError
  end

  # okish
  class FooError < StandardError; end

  # good
  FooError = Class.new(StandardError)
```

 Don't nest multi-line classes within classes. Try to have such nested classes each in their own file in a folder named like the containing class.

```Ruby
  # bad

  # foo.rb
  class Foo
    class Bar
      # 30 methods inside
    end

    class Car
      # 20 methods inside
    end

    # 30 methods inside
  end

  # good

  # foo.rb
  class Foo
    # 30 methods inside
  end

  # foo/bar.rb
  class Foo
    class Bar
      # 30 methods inside
    end
  end

  # foo/car.rb
  class Foo
    class Car
      # 20 methods inside
    end
  end
```

Prefer modules to classes with only class methods. Classes should be used only when it makes sense to create instances out of them.

```Ruby
  # bad
  class SomeClass
    def self.some_method
      # body omitted
    end

    def self.some_other_method
      # body omitted
    end
  end

  # good
  module SomeModule
    module_function

    def some_method
      # body omitted
    end

    def some_other_method
      # body omitted
    end
  end
```

Favor the use of `module_function` over `extend self` when you want to turn a module's instance methods into class methods.

```Ruby
  # bad
  module Utilities
    extend self

    def parse_something(string)
      # do stuff here
    end

    def other_utility_method(number, string)
      # do some more stuff
    end
  end

  # good
  module Utilities
    module_function

    def parse_something(string)
      # do stuff here
    end

    def other_utility_method(number, string)
      # do some more stuff
    end
  end
```

Always supply a proper `to_s` method for classes that represent domain objects.

```Ruby
  class Person
    attr_reader :first_name, :last_name

    def initialize(first_name, last_name)
      @first_name = first_name
      @last_name = last_name
    end

    def to_s
      "#{@first_name} #{@last_name}"
    end
  end
```

### Lines between methods
Use empty lines between method definitions and also to break up methods into logical paragraphs internally.

```Ruby
  def some_method
    data = initialize(options)

    data.manipulate!

    data.result
  end

  def some_method
    result
  end
```

### Self
Avoid `self` where not required. (It is only required when calling a self write accessor.)

```Ruby
  # bad
  def ready?
    if self.last_reviewed_at > self.last_updated_at
      self.worker.update(self.content, self.options)
      self.status = :in_progress
    end
    self.status == :verified
  end

  # good
  def ready?
    if last_reviewed_at > last_updated_at
      worker.update(content, options)
      self.status = :in_progress
    end
    status == :verified
  end
```

## Methods
### Method Definitions
Avoid single-line methods. Although they are somewhat popular in the wild, there are a few peculiarities about their definition syntax that make their use undesirable. There should be no more than one expression in a single-line method.


```Ruby
  # bad
  def too_much; something; something_else; end

  # okish - notice that the first ; is required
  def no_braces_method; body end

  # okish - notice that the second ; is optional
  def no_braces_method; body; end

  # okish - valid syntax, but no ; makes it kind of hard to read
  def some_method() body end

  # good
  def some_method
    body
  end
```

### Optional Argument
Define optional arguments at the end of the list of arguments. Ruby has some unexpected results when calling methods that have optional arguments at the front of the list.

```Ruby
  # bad
  def some_method(a = 1, b = 2, c, d)
    puts "#{a}, #{b}, #{c}, #{d}"
  end

  some_method('w', 'x') # => '1, 2, w, x'
  some_method('w', 'x', 'y') # => 'w, 2, x, y'
  some_method('w', 'x', 'y', 'z') # => 'w, x, y, z'

  # good
  def some_method(c, d, a = 1, b = 2)
    puts "#{a}, #{b}, #{c}, #{d}"
  end

  some_method('w', 'x') # => '1, 2, w, x'
  some_method('w', 'x', 'y') # => 'y, 2, w, x'
  some_method('w', 'x', 'y', 'z') # => 'y, z, w, x'
```

### Trailing Commas
Avoid comma after the last parameter in a method call, especially when the parameters are not on separate lines.

```Ruby
  # bad - easier to move/add/remove parameters, but still not preferred
  some_method(
    size,
    count,
    color,
  )

  # bad
  some_method(size, count, color, )

  # good
  some_method(size, count, color)
```

### No Double Indent
Align the parameters of a method call if they span more than one line. When aligning parameters is not appropriate due to line-length constraints, single indent for the lines after the first is also acceptable.

```Ruby
  # starting point (line is too long)
  def send_mail(source)
    Mailer.deliver(to: 'bob@example.com', from: 'us@example.com', subject: 'Important message', body: source.text)
  end

  # bad (double indent)
  def send_mail(source)
    Mailer.deliver(
        to: 'bob@example.com',
        from: 'us@example.com',
        subject: 'Important message',
        body: source.text)
  end

  # good
  def send_mail(source)
    Mailer.deliver(to: 'bob@example.com',
                   from: 'us@example.com',
                   subject: 'Important message',
                   body: source.text)
  end

  # good (normal indent)
  def send_mail(source)
    Mailer.deliver(
      to: 'bob@example.com',
      from: 'us@example.com',
      subject: 'Important message',
      body: source.text
    )
  end
```

### Method Parentheses
- Use `def` with parentheses when there are parameters. 
- Omit the parentheses when the method doesn't accept any parameters.

```Ruby
  # bad
  def some_method()
   # body omitted
  end

  # good
  def some_method
   # body omitted
  end

  # bad
  def some_method_with_parameters param1, param2
   # body omitted
  end

  # good
  def some_method_with_parameters(param1, param2)
   # body omitted
  end
```

Use parentheses around the arguments of method invocations, especially if the first argument begins with an open parenthesis `(`, as in `f((3 + 2) + 1)`.

```Ruby
  # bad
  x = Math.sin y
  # good
  x = Math.sin(y)

  # bad
  array.delete e
  # good
  array.delete(e)

  # bad
  temperance = Person.new 'Temperance', 30
  # good
  temperance = Person.new('Temperance', 30)
```

Do not put a space between a method name and the opening parenthesis.

```Ruby
  # bad
  f (3 + 2) + 1

  # good
  f(3 + 2) + 1
```

Only omit parentheses for:
- Method calls with no arguments

```Ruby
  # bad
  Kernel.exit!()
  2.even?()
  fork()
  'test'.upcase()

  # good
  Kernel.exit!
  2.even?
  fork
  'test'.upcase
```

- Methods that have "keyword" status in Ruby:

```Ruby
  class Person
    # bad
    attr_reader(:name, :age)
    # good
    attr_reader :name, :age
  end

  # bad
  puts(temperance.age)
  # good
  puts temperance.age
```

### Method Returns
Avoid `return` where not required for flow of control.

```Ruby
  # bad
  def some_method(some_arr)
    return some_arr.size
  end

  # good
  def some_method(some_arr)
    some_arr.size
  end
```

### Chaining Methods
When continuing a chained method invocation on another line keep the `.` on the second line.

```Ruby
  # Example 1
  one.two.three
         .four

   # Example 2
   my_array.select { |str| str.size > 5 }
           .map    { |str| str.downcase }
```

### Procs, Blocks and Lambdas
Prefer `proc.call()` over `proc[]` or `proc.()` for both lambdas and procs.

```Ruby
  # bad - looks similar to Enumeration access
  l = ->(v) { puts v }
  l[1]

  # also bad - uncommon syntax
  l = ->(v) { puts v }
  l.(1)

  # good
  l = ->(v) { puts v }
  l.call(1)
```

Use the proc invocation shorthand when the invoked method is the only operation of a block.

```Ruby
  # bad
  names.map { |name| name.upcase }

  # good
  names.map(&:upcase)
```

Prefer `{...}` over `do...end` for single-line blocks.  Avoid using `{...}` for multi-line blocks. Always use `do...end` for "control flow" and "method definitions" (e.g. in Rakefiles and certain DSLs). Avoid `do...end` when chaining.

```Ruby
  names = %w(Bozhidar Steve Sarah)

  # bad
  names.each do |name|
    puts name
  end

  # good
  names.each { |name| puts name }

  # bad
  names.select do |name|
    name.start_with?('S')
  end.map { |name| name.upcase }

  # good
  names.select { |name| name.start_with?('S') }.map(&:upcase)
```

Consider using explicit block argument to avoid writing block literal that just passes its arguments to another block. Beware of the performance impact as the block gets converted to a Proc.

```Ruby
  require 'tempfile'

  # bad
  def with_tmp_dir
    Dir.mktmpdir do |tmp_dir|
      Dir.chdir(tmp_dir) { |dir| yield dir }  # block just passes arguments
    end
  end

  # good
  def with_tmp_dir(&block)
    Dir.mktmpdir do |tmp_dir|
      Dir.chdir(tmp_dir, &block)
    end
  end

  with_tmp_dir do |dir|
    puts "dir is accessible as a parameter and pwd is set: #{dir}"
  end
```

Do not use nested method definitions, use lambda instead. Nested method definitions actually produce methods in the same scope (e.g. class) as the outer method. Furthermore, the "nested method" will be redefined every time the method containing its definition is invoked.

```Ruby
  # bad
  def foo(x)
    def bar(y)
      # body omitted
    end

    bar(x)
  end

  # good - the same as the previous, but no bar redefinition on every foo call
  def bar(y)
    # body omitted
  end

  def foo(x)
    bar(x)
  end

  # also good
  def foo(x)
    bar = ->(y) { ... }
    bar.call(x)
  end
```

Use the new lambda literal syntax for single line body blocks. Use the `lambda` method for multi-line blocks.

```Ruby
  # bad
  l = lambda { |a, b| a + b }
  l.call(1, 2)

  # correct, but looks extremely awkward
  l = ->(a, b) do
    tmp = a * 7
    tmp * b / 50
  end

  # good
  l = ->(a, b) { a + b }
  l.call(1, 2)

  l = lambda do |a, b|
    tmp = a * 7
    tmp * b / 50
  end
```

Don't omit the parameter parentheses when defining a stabby lambda with parameters.

```Ruby
  # bad
  l = ->x, y { something(x, y) }

  # good
  l = ->(x, y) { something(x, y) }
```

### Double Colons
Use `::` only to reference constants(this includes classes and modules) and constructors (like `Array()` or `Nokogiri::HTML()`). Do not use `::` for regular method invocation.

```Ruby
  # bad
  SomeClass::some_method
  some_object::some_method

  # good
  SomeClass.some_method
  some_object.some_method
  SomeModule::SomeClass::SOME_CONST
  SomeModule::SomeClass()
```

### DSL
Omit both the outer braces and parentheses for methods that are part of an internal DSL.

```Ruby
  class Person < ActiveRecord::Base
    # bad
    validates(:name, { presence: true, length: { within: 1..10 } })

    # good
    validates :name, presence: true, length: { within: 1..10 }
  end
```

## Conditionals
### Conditional Verbs
The `and` and `or` keywords are banned. It's just not worth it. Always use `&&` and `||` instead.

```Ruby
  # bad
  # boolean expression
  if some_condition and some_other_condition
    do_something
  end

  # control flow
  document.saved? or document.save!

  # good
  # boolean expression
  if some_condition && some_other_condition
    do_something
  end

  # control flow
  document.saved? || document.save!
```

Use `!` instead of `not`.

```Ruby
  # bad - parentheses are required because of op precedence
  x = (not something)

  # good
  x = !something
```

Avoid the use of `!!`.

`!!` converts a value to boolean, but you don't need this explicit conversion in the condition of a control expression; using it only obscures your intention. If you want to do a `nil` check, use `nil?` instead.

```Ruby
  # bad
  x = 'test'
  # obscure nil check
  if !!x
    # body omitted
  end

  # good
  x = 'test'
  unless x.nil?
    # body omitted
  end
```

Favor `unless` over `if` for negative conditions (or control flow `||`). Do not use `unless` with `else`!

```Ruby
  # bad
  do_something if !some_condition

  # bad
  do_something if not some_condition

  # good
  do_something unless some_condition

  # another good option
  some_condition || do_something
```

### Single Line Conditionals
Favor modifier `if`/`unless` usage when you have a single-line body. Another good alternative is the usage of control flow `&&`/`||`.

```Ruby
  # bad
  if some_condition
    do_something
  end

  # good
  do_something if some_condition

  # another good option
  some_condition && do_something
```

### Multi-line conditionals
Always put the condition on the same line as the `if`/`unless` in a multi-line conditional.

```Ruby
  # bad
  if
    some_condition
    do_something
    do_something_else
  end

  # good
  if some_condition
    do_something
    do_something_else
  end
```

Do not use `then` for multi-line `if`/`unless`.

```Ruby
  # bad
  if some_condition then
    # body omitted
  end

  # good
  if some_condition
    # body omitted
  end
```

Avoid modifier `if`/`unless` usage at the end of a non-trivial multi-line block.

```Ruby
  # bad
  10.times do
    # multi-line body omitted
  end if some_condition

  # good
  if some_condition
    10.times do
      # multi-line body omitted
    end
  end
```

Avoid nested modifier `if`/`unless`/`while`/`until` usage. Favor `&&`/`||` if appropriate.

```Ruby
  # bad
  do_something if other_condition if some_condition

  # good
  do_something if some_condition && other_condition
```

When assigning the result of a conditional expression to a variable, preserve the usual alignment of its branches.

```Ruby
  # bad - pretty convoluted
  kind = case year
  when 1850..1889 then 'Blues'
  when 1890..1909 then 'Ragtime'
  when 1910..1929 then 'New Orleans Jazz'
  when 1930..1939 then 'Swing'
  when 1940..1950 then 'Bebop'
  else 'Jazz'
  end

  result = if some_cond
    calc_something
  else
    calc_something_else
  end

  # good - it's apparent what's going on
  kind = case year
         when 1850..1889 then 'Blues'
         when 1890..1909 then 'Ragtime'
         when 1910..1929 then 'New Orleans Jazz'
         when 1930..1939 then 'Swing'
         when 1940..1950 then 'Bebop'
         else 'Jazz'
         end

  result = if some_cond
             calc_something
           else
             calc_something_else
           end

  # good (and a bit more width efficient)
  kind =
    case year
    when 1850..1889 then 'Blues'
    when 1890..1909 then 'Ragtime'
    when 1910..1929 then 'New Orleans Jazz'
    when 1930..1939 then 'Swing'
    when 1940..1950 then 'Bebop'
    else 'Jazz'
    end

  result =
    if some_cond
      calc_something
    else
      calc_something_else
    end
```

Avoid use of nested conditionals for flow of control.

Prefer a guard clause when you can assert invalid data. A guard clause is a conditional statement at the top of a function that bails out as soon as it can.

```Ruby
  # bad
  def compute_thing(thing)
    if thing[:foo]
      update_with_bar(thing[:foo])
      if thing[:foo][:bar]
        partial_compute(thing)
      else
        re_compute(thing)
      end
    end
  end

  # good
  def compute_thing(thing)
    return unless thing[:foo]
    update_with_bar(thing[:foo])
    return re_compute(thing) unless thing[:foo][:bar]
    partial_compute(thing)
  end
```

Prefer `next` in loops instead of conditional blocks.

```Ruby
  # bad
  [0, 1, 2, 3].each do |item|
    if item > 1
      puts item
    end
  end

  # good
  [0, 1, 2, 3].each do |item|
    next unless item > 1
    puts item
  end
```
Don't do explicit **non**`nil` checks unless you're dealing with boolean values.

```ruby
  # bad
  do_something if !something.nil?
  do_something if something != nil

  # good
  do_something if something

  # good - dealing with a boolean
  def value_set?
    !@some_boolean.nil?
  end
```

### Cases
Indent `when` as deep as `case`.

```Ruby
  # bad
  case
    when song.name == 'Misty'
      puts 'Not again!'
    when song.duration > 120
      puts 'Too long!'
    when Time.now.hour > 21
      puts "It's too late"
    else
      song.play
  end

  # good
  case
  when song.name == 'Misty'
    puts 'Not again!'
  when song.duration > 120
    puts 'Too long!'
  when Time.now.hour > 21
    puts "It's too late"
  else
    song.play
  end
```

Use `when x then ...` for one-line cases. The alternative syntax `when x: ...` has been removed as of Ruby 1.9.

### Conditional Parentheses 
  Don't use parentheses around the condition of a control expression.

```Ruby
  # bad
  if (x > 10)
    # body omitted
  end

  # good
  if x > 10
    # body omitted
  end
```

### Conditional Returns
Leverage the fact that `if` and `case` are expressions which return a result.

```Ruby
  # bad
  if condition
    result = x
  else
    result = y
  end

  # good
  result =
    if condition
      x
    else
      y
    end
```

Don't use the return value of `=`  in conditional expressions unless the assignment is wrapped in parentheses. 

```Ruby
  # bad (+ a warning)
  if v = array.grep(/foo/)
    do_something(v)
    # some code
  end

  # good (MRI would still complain, but RuboCop won't)
  if (v = array.grep(/foo/))
    do_something(v)
    # some code
  end

  # good
  v = array.grep(/foo/)
  if v
    do_something(v)
    # some code
  end
```

### Ternary Operator
Favor the ternary operator(`?:`) over `if/then/else/end` constructs. It's more common and obviously more concise.

```Ruby
  # bad
  result = if some_condition then something else something_else end

  # good
  result = some_condition ? something : something_else
```

Use one expression per branch in a ternary operator. This also means that ternary operators must not be nested. Prefer `if/else` constructs in these cases.

```Ruby
  # bad
  some_condition ? (nested_condition ? nested_something : nested_something_else) : something_else

  # good
  if some_condition
    nested_condition ? nested_something : nested_something_else
  else
    something_else
  end
```

## Variables
Avoid using Perl-style special variables (like `$:`, `$;`, etc. ). They are quite cryptic and their use in anything but one-liner scripts is discouraged. Use the human-friendly aliases provided by the `English` library.

```Ruby
  # bad
  $:.unshift File.dirname(__FILE__)

  # good
  require 'English'
  $LOAD_PATH.unshift File.dirname(__FILE__)
```

### Assignment
Use shorthand self assignment operators whenever applicable.

```Ruby
  # bad
  x = x + y
  x = x * y
  x = x**y
  x = x / y
  x = x || y
  x = x && y

  # good
  x += y
  x *= y
  x **= y
  x /= y
  x ||= y
  x &&= y
```

Use `||=` to initialize variables only if they're not already initialized. Don't use `||=` to initialize boolean variables.

```Ruby
  # bad
  name = name ? name : 'Bozhidar'

  # bad
  name = 'Bozhidar' unless name

  # bad (use 'enabled = true if enabled.nil?')
  enabled ||= true

  # good - set name to 'Bozhidar', only if it's nil or false
  name ||= 'Bozhidar'
```

**Avoid** the use of parallel assignment for defining variables. Parallel assignment is allowed when it is the return of a method call, used with the splat operator, or when used to swap variable assignment.

```Ruby
  # bad
  a, b, c, d = 'foo', 'bar', 'baz', 'foobar'

  # good
  a = 'foo'
  b = 'bar'
  c = 'baz'
  d = 'foobar'

  # good - swapping variable assignment
  # Swapping variable assignment is a special case because it will allow you to
  # swap the values that are assigned to each variable.
  a = 'foo'
  b = 'bar'

  a, b = b, a
  puts a # => 'bar'
  puts b # => 'foo'

  # good - method return
  def multi_return
    [1, 2]
  end

  first, second = multi_return

  # good - use with splat
  first, *list = [1, 2, 3, 4] # first => 1, list => [2, 3, 4]

  hello_array = *'Hello' # => ["Hello"]

  a = *(1..3) # => [1, 2, 3]
```

Use `&&=` to preprocess variables that may or may not exist. Using `&&=` will change the value only if it exists, removing the need to check its existence with `if`.

```Ruby
  # bad
  if something
    something = something.downcase
  end

  # bad
  something = something ? something.downcase : nil

  # ok
  something = something.downcase if something

  # good
  something = something && something.downcase

  # better
  something &&= something.downcase
```

Do not use `eql?` when using `==` will do. The stricter comparison semantics provided by `eql?` are rarely needed in practice.

```Ruby
  # bad - eql? is the same as == for strings
  'ruby'.eql? some_str

  # good
  'ruby' == some_str
  1.0.eql? x          # eql? makes sense here if want to differentiate between Integer and Float 1
```

Avoid explicit use of the case equality operator `===`. As its name implies it is meant to be used implicitly by `case` expressions and outside of them it yields some pretty confusing code.

```Ruby
  # bad
  Array === something
  (1..100) === 7
  /something/ === some_string

  # good
  something.is_a?(Array)
  (1..100).include?(7)
  some_string =~ /something/
```

### Trailing underscore variables
Avoid the use of unnecessary trailing underscore variables during parallel assignment. Named underscore variables are to be preferred over underscore variables because of the context that they provide. Trailing underscore variables are necessary when there is a splat variable defined on the left side of the assignment, and the splat variable is not an underscore.

```Ruby
  # bad
  foo = 'one,two,three,four,five'
  # Unnecessary assignment that does not provide useful information
  first, second, _ = foo.split(',')
  first, _, _ = foo.split(',')
  first, *_ = foo.split(',')


  # good
  foo = 'one,two,three,four,five'
  # The underscores are needed to show that you want all elements
  # except for the last number of underscore elements
  *beginning, _ = foo.split(',')
  *beginning, something, _ = foo.split(',')

  a, = foo.split(',')
  a, b, = foo.split(',')
  # Unnecessary assignment to an unused variable, but the assignment
  # provides us with useful information.
  first, _second = foo.split(',')
  first, _second, = foo.split(',')
  first, *_ending = foo.split(',')
```

### Variable Shadowing
Avoid shadowing methods with local variables unless they are both equivalent.

```Ruby
  class Foo
    attr_accessor :options

    # ok
    def initialize(options)
      self.options = options
      # both options and self.options are equivalent here
    end

    # bad
    def do_something(options = {})
      unless options[:when] == :later
        output(self.options[:message])
      end
    end

    # good
    def do_something(params = {})
      unless params[:when] == :later
        output(options[:message])
      end
    end
  end
```

## Collections
Prefer literal array and hash creation notation 

```Ruby
  # bad
  arr = Array.new
  hash = Hash.new

  # good
  arr = []
  hash = {}
```

Prefer symbols instead of strings as hash keys.

```Ruby
  # bad
  hash = { 'one' => 1, 'two' => 2, 'three' => 3 }

  # good
  hash = { one: 1, two: 2, three: 3 }
```

Prefer `%w` to the literal array syntax when you need an array of words or symbols.

```Ruby
  # bad
  STATES = ['draft', 'open', 'closed']
  OTHER_STATES = [:pending, :cancelled, :rejected]

  # good
  STATES = %w(draft open closed)
  OTHER_STATES = %i(:pending, :cancelled, :rejected)

```

Avoid comma after the last item of an `Array` or `Hash` literal, especially when the items are not on separate lines.

```Ruby
  # bad - easier to move/add/remove items, but still not preferred
  VALUES = [
             1001,
             2020,
             3333,
           ]

  # bad
  VALUES = [1001, 2020, 3333, ]

  # good
  VALUES = [1001, 2020, 3333]
```



Align the elements of array literals spanning multiple lines.

```Ruby
  # bad - single indent
  menu_item = ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam',
    'Baked beans', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam']

  # good
  menu_item = [
    'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam',
    'Baked beans', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam'
  ]

  # good
  menu_item =
    ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam',
     'Baked beans', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam']
```

-Use `Set` instead of `Array` when dealing with unique elements. `Set` implements a collection of unordered values with no duplicates. This is a hybrid of `Array`'s intuitive inter-operation facilities and `Hash`'s fast lookup.

### Accessors
When accessing the first or last element from an array, prefer `first` or `last` over `[0]` or `[-1]`.

Favor the use of `Array#join` over the fairly cryptic `Array#*` with a string argument.

```Ruby
  # bad
  %w(one two three) * ', '
  # => 'one, two, three'

  # good
  %w(one two three).join(', ')
  # => 'one, two, three'
```

Use `Array()` instead of explicit `Array` check or `[*var]`, when dealing with a variable you want to treat as an Array, but you're not certain it's an array.

```Ruby
  # bad
  paths = [paths] unless paths.is_a? Array
  paths.each { |path| do_something(path) }

  # bad (always creates a new Array instance)
  [*paths].each { |path| do_something(path) }

  # good (and a bit more readable)
  Array(paths).each { |path| do_something(path) }
```

Use ranges or `Comparable#between?` instead of complex comparison logic when possible.

```Ruby
  # bad
  do_something if x >= 1000 && x <= 2000

  # good
  do_something if (1000..2000).include?(x)

  # good
  do_something if x.between?(1000, 2000)
```

- Don't use `count` as a substitute for `size`. For `Enumerable` objects other than `Array` it will iterate the entire collection in order to determine its size.
- Prefer `map` over `collect`, `find` over `detect`, `select` over `find_all`, `reduce` over `inject` and `size` over `length`. This is not a hard requirement if the use of the alias enhances readability.
- Use `flat_map` instead of `map` + `flatten`.  This does not apply for arrays with a depth greater than 2, `flat_map` flattens the array by 1, whereas `flatten` flattens it all the way.
- Use `Hash#key?` instead of `Hash#has_key?` and `Hash#value?` instead of `Hash#has_value?`
- Use `Hash#each_key` instead of `Hash#keys.each` and `Hash#each_value` instead of `Hash#values.each`.
- Use `Hash#fetch` when dealing with hash keys that should be present.
- Use `Hash#values_at` when you need to retrieve several values consecutively from a hash.

```Ruby
  # bad
  email = data['email']
  username = data['nickname']

  # good
  email, username = data.values_at('email', 'nickname')
```

- Introduce default values for hash keys via `Hash#fetch` as opposed to using custom logic.

```Ruby
  batman = { name: 'Bruce Wayne', is_evil: false }

  # bad - if we just use || operator with falsy value we won't get the expected result
  batman[:is_evil] || true # => true

  # good - fetch work correctly with falsy values
  batman.fetch(:is_evil, true) # => false
```
- Prefer the use of the block instead of the default value in `Hash#fetch` if the code that has to be evaluated may have side effects or be expensive.

```Ruby
  batman = { name: 'Bruce Wayne' }

  # bad - if we use the default value, we eager evaluate it
  # so it can slow the program down if done multiple times
  batman.fetch(:powers, obtain_batman_powers) # obtain_batman_powers is an expensive call

  # good - blocks are lazy evaluated, so only triggered in case of KeyError exception
  batman.fetch(:powers) { obtain_batman_powers }
```

## Iteration

### Each and For
Do not use `for`, unless you know exactly why. Most of the time iterators (`each`) should be used instead. `for` doesn't introduce a new scope and variables defined in its block will be visible outside it.

```Ruby
  arr = [1, 2, 3]

  # bad
  for elem in arr do
    puts elem
  end

  # note that elem is accessible outside of the for loop
  elem # => 3

  # good
  arr.each { |elem| puts elem }

  # elem is not accessible outside each's block
  elem # => NameError: undefined local variable or method `elem'
```

Prefer `reverse_each` to `reverse.each` because some classes that `include Enumerable` will provide an efficient implementation.

```Ruby
  # bad
  array.reverse.each { ... }

  # good
  array.reverse_each { ... }
```

### While and Until
Favor modifier `while/until` usage when you have a single-line body.

```Ruby
  # bad
  while some_condition
    do_something
  end

  # good
  do_something while some_condition
```

Favor `until` over `while` for negative conditions.

```Ruby
  # bad
  do_something while !some_condition

  # good
  do_something until some_condition
```

Do not use `while/until condition do` for multi-line `while/until`.

```Ruby
  # bad
  while x > 5 do
    # body omitted
  end

  until x > 5 do
    # body omitted
  end

  # good
  while x > 5
    # body omitted
  end

  until x > 5
    # body omitted
  end
```

### Kernel Loop
Use `Kernel#loop` instead of `while/until` when you need an infinite loop.

```ruby
  # bad
  while true
    do_something
  end

  until false
    do_something
  end

  # good
  loop do
    do_something
  end
```

Use `Kernel#loop` with `break` rather than `begin/end/until` or `begin/end/while` for post-loop tests.

```Ruby
  # bad
  begin
    puts val
    val += 1
  end while val < 0

  # good
  loop do
    puts val
    val += 1
    break unless val < 0
  end
```

## Naming Conventions
> The only real difficulties in programming are cache invalidation and naming things. -- Phil Karlton

- Name identifiers in English.
- Use `snake_case` for symbols, methods, variables, files and directories. (all capitals for `FOO_BAR_CONSTANTS`)
- Use `CamelCase` for classes and modules.  (Keep acronyms like HTTP, RFC, XML uppercase.)
- Aim to have just a single class/module per source file. Name the file name as the class/module, but replacing CamelCase with snake_case.
- Use `def self.method` to define class methods. This makes the code easier to refactor since the class name is not repeated.
- The names of predicate methods (methods that return a boolean value) should end in a question mark.  (i.e. `Array#empty?`).
- Avoid prefixing predicate methods with the auxiliary verbs such as `is`, `does`, or `can`.  These words are redundant and inconsistent with the Ruby core library.
- Assign proper visibility levels to methods (`private`, `protected`) in accordance with their intended usage.
  - Indent the `public`, `protected`, and `private` methods as much as the method definitions they apply to. Leave one blank line above and below.
- The names of potentially *dangerous* methods (modify `self` or the arguments) should end with an exclamation mark **if** there exists a safe version of that method.
- Use `attr_reader` and `attr_accessor` functions to define trivial accessors or mutators.
- Prefer [duck-typing](https://en.wikipedia.org/wiki/Duck_typing) over inheritance.
- Avoid the usage of class (`@@`) variables due to their "nasty" behavior in inheritance.

## Exception Handling
Favor the use of exceptions from the standard library over introducing new exception classes.


Prefer `raise` over `fail` for exceptions.

```Ruby
  # bad
  fail SomeException, 'message'

  # good
  raise SomeException, 'message'
````

Don't specify `RuntimeError` explicitly in the two argument version of `raise`.

```Ruby
  # bad
  raise RuntimeError, 'message'

  # good - signals a RuntimeError by default
  raise 'message'
```

Prefer supplying an exception class and a message as two separate arguments to `raise`, instead of an exception instance.

```Ruby
  # bad
  raise SomeException.new('message')
  # Note that there is no way to do `raise SomeException.new('message'), backtrace`.

  # good
  raise SomeException, 'message'
  # Consistent with `raise SomeException, 'message', backtrace`.
```

Do not return from an `ensure` block. If you explicitly return from a method inside an `ensure` block, the return will take precedence over any exception being raised, and the method will return as if no exception had been raised at all. 

```Ruby
  # bad
  def foo
    raise
  ensure
    return 'very bad idea'
  end
```

Use *implicit begin blocks* where possible.

```Ruby
  # bad
  def foo
    begin
      # main logic goes here
    rescue
      # failure handling goes here
    end
  end

  # good
  def foo
    # main logic goes here
  rescue
    # failure handling goes here
  end
```

Mitigate the proliferation of `begin` blocks by using *contingency methods*.

```Ruby
  # bad
  begin
    something_that_might_fail
  rescue IOError
    # handle IOError
  end

  begin
    something_else_that_might_fail
  rescue IOError
    # handle IOError
  end

  # good
  def with_io_error_handling
     yield
  rescue IOError
    # handle IOError
  end

  with_io_error_handling { something_that_might_fail }

  with_io_error_handling { something_else_that_might_fail }
```

Don't suppress exceptions.

```Ruby
  # bad
  begin
    # an exception occurs here
  rescue SomeError
    # the rescue clause does absolutely nothing
  end

  # bad
  do_something rescue nil
```

Avoid using `rescue` in its modifier form.

```Ruby
  # bad - this catches exceptions of StandardError class and its descendant classes
  read_file rescue handle_error($!)

  # good - this catches only the exceptions of Errno::ENOENT class and its descendant classes
  def foo
    read_file
  rescue Errno::ENOENT => ex
    handle_error(ex)
  end
```


-Put more specific exceptions higher up the rescue chain, otherwise they'll never be rescued from.

```Ruby
  # bad
  begin
    # some code
  rescue StandardError => e
    # some handling
  rescue IOError => e
    # some handling that will never be executed
  end

  # good
  begin
    # some code
  rescue IOError => e
    # some handling
  rescue StandardError => e
    # some handling
  end
```

## Strings
Prefer string interpolation and string formatting instead of string concatenation:

```Ruby
  # bad
  email_with_name = user.name + ' <' + user.email + '>'

  # good
  email_with_name = "#{user.name} <#{user.email}>"

  # good
  email_with_name = format('%s <%s>', user.name, user.email)
```


Prefer single-quoted strings when you don't need string interpolation or special symbols.

```Ruby
  # bad
  name = "Bozhidar"

  # good
  name = 'Bozhidar'
```

Don't leave out `{}` around instance and global variables being interpolated
into a string.

```Ruby
  $global = 0
  # bad
  puts "$global = #$global"

  # good
  puts "$global = #{$global}"
```

- Don't use `Object#to_s` on interpolated objects. It's invoked on them automatically.

```Ruby
  # bad
  message = "This is the #{result.to_s}."

  # good
  message = "This is the #{result}."
```

## Regular Expressions
> Some people, when confronted with a problem, think "I know, I'll use regular expressions." Now they have two problems. -- Jamie Zawinski

Don't use regular expressions if you just need plain text search in string: `string['text']`

For simple constructions you can use regexp directly through string index.

```Ruby
  match = string[/regexp/]             # get content of matched regexp
  first_group = string[/text(grp)/, 1] # get content of captured group
  string[/text (grp)/, 1] = 'replace'  # string => 'text replace'
```

Use non-capturing groups when you don't use the captured result.

```Ruby
  # bad
  /(first|second)/

  # good
  /(?:first|second)/
```

Don't use the cryptic Perl-legacy variables denoting last regexp group matches (`$1`, `$2`, etc). Use `Regexp.last_match(n)` instead.

```Ruby
  /(regexp)/ =~ string
  ...

  # bad
  process $1

  # good
  process Regexp.last_match(1)
```

Avoid using numbered groups as it can be hard to track what they contain. Named groups can be used instead.

```Ruby
  # bad
  /(regexp)/ =~ string
  # some code
  process Regexp.last_match(1)

  # good
  /(?<meaningful_var>regexp)/ =~ string
  # some code
  process meaningful_var
```

Character classes have only a few special characters you should care about: `^`, `-`, `\`, `]`, so don't escape `.` or brackets in `[]`.

Be careful with `^` and `$` as they match start/end of line, not string endings.  If you want to match the whole string use: `\A` and `\z` (not to be confused with `\Z` which is the equivalent of `/\n?\z/`).

```Ruby
  string = "some injection\nusername"
  string[/^username$/]   # matches
  string[/\Ausername\z/] # doesn't match
```

Use `x` modifier for complex regexps. This makes them more readable and you can add some useful comments. Just be careful as spaces are ignored.

```Ruby
  regexp = /
    start         # some text
    \s            # white space char
    (group)       # first group
    (?:alt1|alt2) # some alternation
    end
  /x
```

For complex replacements `sub`/`gsub` can be used with a block or a hash.

```Ruby
  words = 'foo bar'
  words.sub(/f/, 'f' => 'F') # => 'Foo bar'
  words.gsub(/\w+/) { |word| word.capitalize } # => 'Foo Bar'
```

## Metaprogramming
**Avoid** needless metaprogramming.

Do not mess around in core classes when writing libraries.  (Do not monkey-patch them.)

The block form of `class_eval` is preferable to the string-interpolated form.

- when you use the string-interpolated form, always supply `__FILE__`
and `__LINE__`, so that your backtraces make sense:

```ruby
  class_eval 'def use_relative_model_naming?; true; end', __FILE__, __LINE__
```

- `define_method` is preferable to `class_eval{ def ... }`

When using `class_eval` (or other `eval`) with string interpolation, add a comment block showing its appearance if interpolated (a practice used in Rails code):

```ruby
  # from activesupport/lib/active_support/core_ext/string/output_safety.rb
  UNSAFE_STRING_METHODS.each do |unsafe_method|
    if 'String'.respond_to?(unsafe_method)
      class_eval <<-EOT, __FILE__, __LINE__ + 1
        def #{unsafe_method}(*params, &block)       # def capitalize(*params, &block)
          to_str.#{unsafe_method}(*params, &block)  #   to_str.capitalize(*params, &block)
        end                                       # end

        def #{unsafe_method}!(*params)              # def capitalize!(*params)
          @dirty = true                           #   @dirty = true
          super                                   #   super
        end                                       # end
      EOT
    end
  end
```

Avoid using `method_missing` for metaprogramming because backtraces become messy, the behavior is not listed in `#methods`, and misspelled method calls might silently work, e.g. `nukes.launch_state = false`. Consider using delegation, proxy, or `define_method` instead. If you must use `method_missing`:

- Be sure to [also define `respond_to_missing?`](http://blog.marc-andre.ca/2010/11/methodmissing-politely.html)
- Only catch methods with a well-defined prefix, such as `find_by_*` -- make your code as assertive as possible.
- Call `super` at the end of your statement
- Delegate to assertive, non-magical methods:

```ruby
  # bad
  def method_missing?(meth, *params, &block)
    if /^find_by_(?<prop>.*)/ =~ meth
      # ... lots of code to do a find_by
    else
      super
    end
  end

  # good
  def method_missing?(meth, *params, &block)
    if /^find_by_(?<prop>.*)/ =~ meth
      find_by(prop, *params, &block)
    else
      super
    end
  end

  # best of all, though, would to define_method as each findable attribute is declared
```

Prefer `public_send` over `send` so as not to circumvent `private`/`protected` visibility.

```ruby
  # We have  an ActiveModel Organization that includes concern Activatable
  module Activatable
    extend ActiveSupport::Concern

    included do
      before_create :create_token
    end

    private

    def reset_token
      # some code
    end

    def create_token
      # some code
    end

    def activate!
      # some code
    end
  end

  class Organization < ActiveRecord::Base
    include Activatable
  end

  linux_organization = Organization.find(...)
  # BAD - violates privacy
  linux_organization.send(:reset_token)
  # GOOD - should throw an exception
  linux_organization.public_send(:reset_token)
```

Prefer `__send__` over `send`, as `send` may overlap with existing methods.

```ruby
  require 'socket'

  u1 = UDPSocket.new
  u1.bind('127.0.0.1', 4913)
  u2 = UDPSocket.new
  u2.connect('127.0.0.1', 4913)
  # Won't send a message to the receiver obj.
  # Instead it will send a message via UDP socket.
  u2.send :sleep, 0
  # Will actually send a message to the receiver obj.
  u2.__send__ ...
```

## Misc
- Write `ruby -w` safe code.
- Avoid hashes as optional parameters. Does the method do too much? (Object
  initializers are exceptions)
- Avoid methods longer than 10 lines. Ideally, most methods will be shorter than 5 LOC. Empty lines do not contribute to the relevant LOC.
- Avoid parameter lists longer than three or four parameters.
- If you really need "global" methods, add them to Kernel and make them private.
- Use module instance variables instead of global variables.

  ```Ruby
  # bad
  $foo_bar = 1

  # good
  module Foo
    class << self
      attr_accessor :bar
    end
  end

  Foo.bar = 1
  ```

- Use `OptionParser` for parsing complex command line options and `ruby -s` for trivial command line options.
- Code in a functional way, avoiding mutation when that makes sense.
- Do not mutate parameters unless that is the purpose of the method.
- Avoid more than three levels of block nesting.
- Be consistent. In an ideal world, be consistent with these guidelines.
- Use common sense.


