# Javascript Style Guide
These are the Javascript guidelines that have been published by Google and can be found [here](https://google.github.io/styleguide/jsguide.html#introduction)


## Introduction
In this document, unless otherwise clarified:

- The term comment always refers to implementation comments. We do not use the phrase "documentation comments", instead using the common term “JSDoc” for both human-readable text and machine-readable annotations within /** … */.
- This Style Guide uses [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) terminology when using the phrases **must**, **must not**, **should**, **should not**, and **may**. The terms __prefer__ and __avoid__ correspond to **should** and **should not**, respectively.

## Source file basics
### File name
File names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation. Follow the convention that your project uses. Filenames’ extension must be .js.

### File encoding
Source files are encoded in UTF-8.

### Special characters
Aside from the line terminator sequence, the ASCII horizontal space character (0x20) is the only whitespace character that appears anywhere in a source file. This implies that

- Tab characters are not used for indentation.
- All other whitespace characters in string literals are escaped
  - For any character that has a special escape sequence (\', \", \b, \f, \n etc.), that sequence is used rather than the corresponding numeric escape (e.g \x0a, \u000a, or \u{a}). 

## Source File Structure

A source file consists of, in order:

- License or copyright information, if present
- @fileoverview JSDoc, if present
- module statement
- require statements
- The file’s implementation

Exactly one blank line separates each section that is present, except the file's implementation, which may be preceded by 1 or 2 blank lines.

## Formatting
> Note: block-like construct refers to the body of a class, function, method, or brace-delimited block of code. Any array or object literal may optionally be treated as if it were a block-like construct.

### Braces
Braces are required for all control structures (i.e. if, else, for, do, while, as well as any others), even if the body contains only a single statement. The first statement of a non-empty block must begin on its own line.

Illegal:

```javascript
  if (someVeryLongCondition())
    doSomething();

  for (let i = 0; i < foo.length; i++) bar(foo[i]);
```

**Exception:** _A simple if statement that can fit entirely on a single line with no wrapping (and that doesn’t have an else) may be kept on a single line with no braces when it improves readability._

```javascript
  if (shortCondition()) return;
```

Braces follow the Kernighan and Ritchie style ("Egyptian brackets") for nonempty blocks and block-like constructs:

- No line break before the opening brace.
- Line break after the opening brace.
- Line break before the closing brace.
- Line break after the closing brace if that brace terminates a statement or the body of a function or class statement, or a class method. Specifically, there is no line break after the brace if it is followed by else, catch, while, or a comma, semicolon, or right-parenthesis.

Example:

```javascript
  class InnerClass {
    constructor() {}

    /** @param {number} foo */
    method(foo) {
      if (condition(foo)) {
        try {
          // Note: this might fail.
          something();
        } catch (err) {
          recover();
        }
      }
    }
  }
```


An empty block or block-like construct may be closed immediately after it is opened, with no characters, space, or line break in between (i.e. `{}`).

### Block indentation
Each time a new block or block-like construct is opened, the indent increases by two spaces. When the block ends, the indent returns to the previous indent level.

#### Array & Object literals
Any array literal may optionally be formatted as if it were a “block-like construct.” For example, the following are all valid (not an exhaustive list):

```javascript
  const a = [
    0, 1, 2,
  ];

  const b =
      [0, 1, 2];

  const c = [0, 1, 2];

  someMethod(foo, [
    0,
    1,
    2,
  ], bar);

  const a = {
    a: 0, b: 1
  };

  const b =
      {a: 0, b: 1};

  const c = {a: 0, b: 1};

  someMethod(foo, {
    a: 0,
    b: 1,
  }, bar);

```

Other combinations are allowed, particularly when emphasizing semantic groupings between elements, but should not be used only to reduce the vertical size of larger arrays.

#### Class literals
Class literals (whether declarations or expressions) are indented as blocks. Do not add commas after methods, or a semicolon after the closing brace of a class declaration (statements—such as assignments—that contain class expressions are still terminated with a semicolon).

Example:

```javascript
  class Foo {
    constructor() {
      /** @type {number} */
      this.x = 42;
    }

    /** @return {number} */
    method() {
      return this.x;
    }
  }
  Foo.Empty = class {};

  foo.Bar = class extends Foo {
    /** @override */
    method() {
      return super.method() / 2;
    }
  };

  /** @interface */
  class Frobnicator {
    /** @param {string} message */
    frobnicate(message) {}
  }
```


#### Function expressions
When declaring an anonymous function in the list of arguments for a function call, the body of the function is indented two spaces more than the preceding indentation depth.

Example:

```javascript
prefix.something.reallyLongFunctionName('whatever', (a1, a2) => {
  // Indent the function body +2 relative to indentation depth
  // of the 'prefix' statement one line above.
  if (a1.equals(a2)) {
    someOtherLongFunctionName(a1);
  } else {
    andNowForSomethingCompletelyDifferent(a2.parrot);
  }
});

some.reallyLongFunctionCall(arg1, arg2, arg3)
    .thatsWrapped()
    .then((result) => {
      // Indent the function body +2 relative to the indentation depth
      // of the '.then()' call.
      if (result) {
        result.use();
      }
    });
```

#### Switch statements
As with any other block, the contents of a switch block are indented +2.

After a switch label, a newline appears, and the indentation level is increased +2, exactly as if a block were being opened. An explicit block may be used if required by lexical scoping. The following switch label returns to the previous indentation level, as if a block had been closed.

A blank line is optional between a break and the following case.

Example:

```javascript
  switch (animal) {
    case Animal.BANDERSNATCH:
      handleBandersnatch();
      break;

    case Animal.JABBERWOCK:
      handleJabberwock();
      break;

    default:
      throw new Error('Unknown animal');
  }
```

## Statements
- Each statement is followed by a line-break.
- Every statement must be terminated with a semicolon. Relying on automatic semicolon insertion is forbidden.
- Column limit: **80**
  - JavaScript code has a column limit of 80 characters. Except as noted below, any line that would exceed this limit must be line-wrapped, as explained in  [Line-wrapping](#line-wrapping).

### Line-wrapping

> Terminology Note: Line-wrapping is defined as breaking a single expression into multiple lines.

There is no comprehensive, deterministic formula showing exactly how to line-wrap in every situation. Very often there are several valid ways to line-wrap the same piece of code.

**Note:** While the typical reason for line-wrapping is to avoid overflowing the column limit, even code that would in fact fit within the column limit may be line-wrapped at the author's discretion.

__Tip:_ Extracting a method or local variable may solve the problem without the need to line-wrap.

### Where to break

The prime directive of line-wrapping is: __prefer to break at a higher syntactic level._ Also:
- When a line is broken at an operator the break comes after the symbol. 
  -This does not apply to the "dot" (.), which is not actually an operator.
- A method or constructor name stays attached to the open parenthesis (() that follows it.
- A comma (,) stays attached to the token that precedes it.

Preferred:

```javascript
  this.foo =
      foo(
          firstArg,
          1 + someLongFunctionName());
```

Discouraged:

```javascript
  this.foo = foo(firstArg, 1 +
      someLongFunctionName());
```

In the preceding example, the syntactic levels from highest to lowest are as follows: assignment, outer function call, parameters, plus, inner function call.

**Note:** The primary goal for line wrapping is to have clear code, not necessarily code that fits in the smallest number of lines.


### Indent continuation lines at least +4 spaces

When line-wrapping, each line after the first (each continuation line) is indented at least +4 from the original line, unless it falls under the rules of block indentation.

When there are multiple continuation lines, indentation may be varied beyond +4 as appropriate. In general, continuation lines at a deeper syntactic level are indented by larger multiples of 4, and two lines use the same indentation level if and only if they begin with syntactically parallel elements.

It is discouraged practice of using a variable number of spaces to align certain tokens with previous lines.


## Whitespace
### Vertical whitespace
A single blank line appears:
  - Between consecutive methods in a class or object literal
      - __Exception:__ A blank line between two consecutive properties definitions in an object literal (with no other code between them) is optional. Such blank lines are used as needed to create logical groupings of fields.
  - Within method bodies, sparingly to create logical groupings of statements. Blank lines at the start or end of a function body are not allowed.

### Horizontal whitespace
Use of horizontal whitespace depends on location, and falls into three broad categories: 
- leading (i.e., indentation) is addressed elsewhere.
- internal
- trailing (at the end of a line) is forbidden.

Beyond where required by the language or other style rules, and apart from literals, comments, and JSDoc, a single internal ASCII space also appears in the following places only.
- Separating any reserved word (such as `if`, `for`, or `catch`) from an open parenthesis (() that follows it on that line.
- Separating any reserved word (such as `else` or `catch`) from a closing curly brace (}) that precedes it on that line.
- Before any open curly brace ({), with two exceptions:
  - Before an object literal that is the first argument of a function or the first element in an array literal (e.g. foo({a: [{c: d}]})).
  - In a template expansion, as it is forbidden by the language (e.g. abc${1 + 2}def).
- On both sides of any binary or ternary operator.
- After a comma (,) or semicolon (;). Note that spaces are never allowed before these characters.
- After the colon (:) in an object literal.
- On both sides of the double slash (//) that begins an end-of-line comment. Here, multiple spaces are allowed, but not required.
- After an open-JSDoc comment character and on both sides of close characters (e.g. for short-form type declarations or casts: this.foo = /** @type {number} */ (bar); or function(/** string */ foo) {).


### Horizontal alignment
> Horizontal alignment is the practice of adding a variable number of additional spaces in your code with the goal of making certain tokens appear directly below certain other tokens on previous lines.

This practice is permitted, but it is generally discouraged by Google Style. It is not even required to maintain horizontal alignment in places where it was already used.

Here is an example without alignment, followed by one with alignment. Both are allowed, but the latter is discouraged:

```javascript
  {
    tiny: 42, // this is great
    longer: 435, // this too
  };

  {
    tiny:   42,  // permitted, but future edits
    longer: 435, // may leave it unaligned
  };
```

Alignment can aid readability, but it creates problems for future maintenance. Consider a future change that needs to touch just one line. This change may leave the formerly-pleasing formatting mangled, and that is allowed. More often it prompts the coder (perhaps you) to adjust whitespace on nearby lines as well, possibly triggering a cascading series of reformatting.

### Function arguments
Prefer to put all function arguments on the same line as the function name. If doing so would exceed the 80-column limit, the arguments must be line-wrapped in a readable way. To save space, you may wrap as close to 80 as possible, or put each argument on its own line to enhance readability. Indentation should be four spaces. Aligning to the parenthesis is allowed, but discouraged. Below are the most common patterns for argument wrapping:

```javascript
  // Arguments start on a new line, indented four spaces. Preferred when the
  // arguments don't fit on the same line with the function name (or the keyword
  // "function") but fit entirely on the second line. Works with very long
  // function names, survives renaming without reindenting, low on space.
  doSomething(
      descriptiveArgumentOne, descriptiveArgumentTwo, descriptiveArgumentThree) {
    // …
  }

  // If the argument list is longer, wrap at 80. Uses less vertical space,
  // but violates the rectangle rule and is thus not recommended.
  doSomething(veryDescriptiveArgumentNumberOne, veryDescriptiveArgumentTwo,
      tableModelEventHandlerProxy, artichokeDescriptorAdapterIterator) {
    // …
  }

  // Four-space, one argument per line.  Works with long function names,
  // survives renaming, and emphasizes each argument.
  doSomething(
      veryDescriptiveArgumentNumberOne,
      veryDescriptiveArgumentTwo,
      tableModelEventHandlerProxy,
      artichokeDescriptorAdapterIterator) {
    // …
  }
```

## Grouping parentheses
Optional grouping parentheses are omitted only when the author and reviewer agree that there is no reasonable chance that the code will be misinterpreted without them, nor would they have made the code easier to read.

Do not use unnecessary parentheses around the entire expression following `delete`, `typeof`, `void`, `return`, `throw`, `case`, `in`, or `of`.

Parentheses are required for type casts: `/** @type {!Foo} */ (foo).`

## Language features
JavaScript includes many dubious (and even dangerous) features. This section delineates which features may or may not be used, and any additional constraints on their use.

### Local variable declarations
- Declare all local variables with either `const` or `let`. Use `const` by default, unless a variable needs to be reassigned. The `var` keyword must not be used.
- Every local variable declaration declares only one variable: declarations such as `let a = 1, b = 2;` are not used.
- Local variables are declared close to the point they are first used (within reason), to minimize their scope.
- JSDoc type annotations may be added either on the line above the declaration, or else inline before the variable name.

Example:

```javascript
  const /** !Array<number> */ data = [];

  /** @type {!Array<number>} */
  const data = [];
```

### Array literals
Include a trailing comma whenever there is a line break between the final element and the closing bracket.

Example:

```javascript
  const values = [
    'first value',
    'second value',
  ];
```

Do not define or use non-numeric properties on an array (other than length). Use a Map (or Object) instead.

Array literals may be used on the left-hand side of an assignment to perform destructuring (such as when unpacking multiple values from a single array or iterable. A final "rest" element may be included (with no space between the ... and the variable name). Elements should be omitted if they are unused.

```javascript
const [a, b, c, ...rest] = generateResults();
let [, b,, d] = someArray;
```

Destructuring may also be used for function parameters (note that a parameter name is required but ignored). Always specify [] as the default value if a destructured array parameter is optional, and provide default values on the left hand side:

```javascript
/** @param {!Array<number>=} param1 */
function optionalDestructuring([a = 4, b = 2] = []) { … };
```

Illegal:

```javascript
function badDestructuring([a, b] = [4, 2]) { … };
```

> For (un)packing multiple values into a function’s parameter or return, prefer object destructuring to array destructuring when possible, as it allows naming the individual elements and specifying a different type for each.*
5.2.5 Spread operator

Array literals may include the spread operator (...) to flatten elements out of one or more other iterables. The spread operator should be used instead of more awkward constructs with Array.prototype. There is no space after the ....

Example:

```javascript
[...foo]   // preferred over Array.prototype.slice.call(foo)
[...foo, ...bar]   // preferred over foo.concat(bar)
```

### Object literals
Include a trailing comma whenever there is a line break between the final property and the closing brace.

Object literals may represent either structs (with unquoted keys and/or symbols) or dicts (with quoted and/or computed keys). Do not mix these key types in a single object literal.

Illegal:

```javascript
  {
    a: 42, // struct-style unquoted key
    'b': 43, // dict-style quoted key
  }
```

### Computed property names
Computed property names (e.g., `{['key' + foo()]: 42}`) are allowed, and are considered dict-style (quoted) keys (i.e., must not be mixed with non-quoted keys) unless the computed property is a symbol (e.g., [Symbol.iterator]). Enum values may also be used for computed keys, but should not be mixed with non-enum keys in the same literal.

### Method shorthand
Methods can be defined on object literals using the method shorthand ({method() {… }}) in place of a colon immediately followed by a function or arrow function literal.

Example:

```javascript
  return {
    stuff: 'candy',
    method() {
      return this.stuff;  // Returns 'candy'
    },
  };
```

Note that this in a method shorthand or function refers to the object literal itself whereas this in an arrow function refers to the scope outside the object literal.

Example:

```javascript
  class {
    getObjectLiteral() {
      this.stuff = 'fruit';
      return {
        stuff: 'candy',
        method: () => this.stuff,  // Returns 'fruit'
      };
    }
  }
```

### Shorthand properties
Shorthand properties are allowed on object literals.

Example:

```javascript
  const foo = 1;
  const bar = 2;
  const obj = {
    foo,
    bar,
    method() { return this.foo + this.bar; },
  };
  assertEquals(3, obj.method());
```

### Destructuring
Object destructuring patterns may be used on the left-hand side of an assignment to perform destructuring and unpack multiple values from a single object.

Destructured objects may also be used as function parameters, but should be kept as simple as possible: a single level of unquoted shorthand properties. Deeper levels of nesting and computed properties may not be used in parameter destructuring. Specify any default values in the left-hand-side of the destructured parameter ({str = 'some default'} = {}, rather than {str} = {str: 'some default'}), and if a destructured object is itself optional, it must default to {}. The JSDoc for the destructured parameter may be given any name (the name is unused but is required by the compiler).

Example:

```javascript
/**
 * @param {string} ordinary
 * @param {{num: (number|undefined), str: (string|undefined)}=} param1
 *     num: The number of times to do something.
 *     str: A string to do stuff to.
 */
function destructured(ordinary, {num, str = 'some default'} = {})
```

Illegal:


```javascript
  /** @param {{x: {num: (number|undefined), str: (string|undefined)}}} param1 */
  function nestedTooDeeply({x: {num, str}}) {};
  /** @param {{num: (number|undefined), str: (string|undefined)}=} param1 */
  function nonShorthandProperty({num: a, str: b} = {}) {};
  /** @param {{a: number, b: number}} param1 */
  function computedKey({a, b, [a + b]: c}) {};
  /** @param {{a: number, b: string}=} param1 */
  function nontrivialDefault({a, b} = {a: 2, b: 4}) {};
```

Destructuring may also be used for goog.require statements, and in this case must not be wrapped: the entire statement occupies one line, regardless of how long it is (see 3.4 goog.require statements).

### Enums
Enumerations are defined by adding the @enum annotation to an object literal. Additional properties may not be added to an enum after it is defined. Enums must be constant, and all enum values must be deeply immutable.

```javascript
  /**
   * Supported temperature scales.
   * @enum {string}
   */
  const TemperatureScale = {
    CELSIUS: 'celsius',
    FAHRENHEIT: 'fahrenheit',
  };

  /**
   * An enum with two options.
   * @enum {number}
   */
  const Option = {
    /** The option used shall have been the first. */
    FIRST_OPTION: 1,
    /** The second among two options. */
    SECOND_OPTION: 2,
  };
```

## Classes
### Constructors
Constructors are optional for concrete classes, and when present must be the first method defined in the class literal. Subclass constructors must call super() before setting any fields or otherwise accessing this. Interfaces must not define a constructor.

### Fields
Set all of a concrete object’s fields (i.e. all properties other than methods) in the constructor. Annotate fields that are never reassigned with @const (these need not be deeply immutable). Private fields must be annotated with @private and their names must end with a trailing underscore. Fields are never set on a concrete class' prototype.

Example:

```javascript
  class Foo {
    constructor() {
      /** @private @const {!Bar} */
      this.bar_ = computeBar();
    }
  }
```

> Properties should never be added to or removed from an instance after the constructor is finished, since it significantly hinders VMs’ ability to optimize. If necessary, fields that are initialized later should be explicitly set to undefined in the constructor to prevent later shape changes. Adding @struct to an object will check that undeclared properties are not added/accessed. Classes have this added by default.

### Computed properties
Computed properties may only be used in classes when the property is a symbol. Dict-style properties (that is, quoted or computed non-symbol keys, as defined in 5.3.3 Do not mix quoted and unquoted keys) are not allowed. A [Symbol.iterator] method should be defined for any classes that are logically iterable. Beyond this, Symbol should be used sparingly.

> be careful of using any other built-in symbols (e.g., Symbol.isConcatSpreadable) as they are not polyfilled by the compiler and will therefore not work in older browsers.
5.4.4 Static methods

Where it does not interfere with readability, prefer module-local functions over private static methods.

Static methods should only be called on the base class itself. Static methods should not be called on variables containing a dynamic instance that may be either the constructor or a subclass constructor (and must be defined with @nocollapse if this is done), and must not be called directly on a subclass that doesn’t define the method itself.

Illegal:

```javascript
  class Base { /** @nocollapse */ static foo() {} }
  class Sub extends Base {}
  function callFoo(cls) { cls.foo(); }  // discouraged: don't call static methods dynamically
  Sub.foo();  // illegal: don't call static methods on subclasses that don't define it themselves
```

### Do not manipulate prototypes directly
The class keyword allows clearer and more readable class definitions than defining prototype properties. Ordinary implementation code has no business manipulating these objects, though they are still useful for defining @record interfaces. Mixins and modifying the prototypes of builtin objects are explicitly forbidden.

Exception: Framework code (such as Polymer, or Angular) may need to use prototypes, and should not resort to even-worse workarounds to avoid doing so.

### Getters and Setters
Do not use JavaScript getter and setter properties. They are potentially surprising and difficult to reason about, and have limited support in the compiler. Provide ordinary methods instead.

Exception: when working with data binding frameworks (such as Angular and Polymer), getters and setters may be used sparingly. Note, however, that compiler support is limited. When they are used, they must be defined either with get foo() and set foo(value) in the class or object literal, or if that is not possible, with Object.defineProperties. Do not use Object.defineProperty, which interferes with property renaming. Getters must not change observable state.

Illegal:

```javascript
  class Foo {
    get next() { return this.nextId++; }
  }
```

### Overriding toString
The toString method may be overridden, but must always succeed and never have visible side effects.

### Interfaces
Interfaces may be declared with @interface or @record. Interfaces declared with @record can be explicitly (i.e. via @implements) or implicitly implemented by a class or object literal. In particular, do not use a @typedef to define a record literal.

All non-static method bodies on an interface must be empty blocks. Fields must be defined after the interface body as stubs on the prototype.

Example:

```javascript
  /**
   * Something that can frobnicate.
   * @record
   */
  class Frobnicator {
    /**
     * Performs the frobnication according to the given strategy.
     * @param {!FrobnicationStrategy} strategy
     */
    frobnicate(strategy) {}
  }

  /** @type {number} The number of attempts before giving up. */
  Frobnicator.prototype.attempts;
```

## Functions
### Top-level functions
Exported functions may be defined directly on the exports object, or else declared locally and exported separately. Non-exported functions are encouraged and should not be declared @private.

Examples:

```javascript
  /** @return {number} */
  function helperFunction() {
    return 42;
  }
  /** @return {number} */
  function exportedFunction() {
    return helperFunction() * 2;
  }
  /**
   * @param {string} arg
   * @return {number}
   */
  function anotherExportedFunction(arg) {
    return helperFunction() / arg.length;
  }
  /** @const */
  exports = {exportedFunction, anotherExportedFunction};

  /** @param {string} arg */
  exports.foo = (arg) => {
    // do some stuff ...
  };
```

### Nested functions and closures
Functions may contain nested function definitions. If it is useful to give the function a name, it should be assigned to a local const.

### Arrow functions
Arrow functions provide a concise syntax and fix a number of difficulties with this. Prefer arrow functions over the function keyword, particularly for nested functions.

Never call `f.bind(this)` (and avoid writing const self = this). All of these can be expressed more clearly and less error-prone with an arrow function. This is particularly useful for callbacks, which sometimes pass unexpected additional arguments.

The right-hand side of the arrow may be a single expression or a block. Parentheses around the arguments are optional if there is only a single non-destructured argument.

> It is a good practice to use parentheses even for single-argument arrows, since the code may still parse reasonably (but incorrectly) if the parentheses are forgotten when an additional argument is added.

### Generators
Generators enable a number of useful abstractions and may be used as needed.

When defining generator functions, attach the * to the function keyword when present, and separate it with a space from the name of the function. When using delegating yields, attach the * to the yield keyword.

Example:

```javascript
  /** @return {!Iterator<number>} */
  function* gen1() {
    yield 42;
  }

  /** @return {!Iterator<number>} */
  const gen2 = function*() {
    yield* gen1();
  }

  class SomeClass {
    /** @return {!Iterator<number>} */
    * gen() {
      yield 42;
    }
  }
```

### Parameters
Function parameters must be typed with JSDoc annotations in the JSDoc preceding the function’s definition, except in the case of same-signature @overrides, where all types are omitted.

For anonymous functions (arrows and unnamed function expressions), parameter types may be specified inline, immediately before the parameter name (as in (/** number */ foo, /** string */ bar) => foo + bar). This is not allowed for other functions, including class methods and those that are assigned to variables or properties, in which case the parameter and/or return type annotations must be specified on the field, variable, or method.

Illegal:

```javascript
const func = (/** number */ foo) => 2 * foo;  // use ordinary @param instead
```

#### Default parameters
Optional parameters are permitted using the equals operator in the parameter list. Optional parameters must include spaces on both sides of the equals operator, be named exactly like required parameters (i.e., not prefixed with opt_), use the = suffix in their JSDoc type, come after required parameters, and not use initializers that produce observable side effects. All optional parameters must have a default value in the function declaration, even if that value is undefined.

Example:

```javascript
/**
 * @param {string} required This parameter is always needed.
 * @param {string=} optional This parameter can be omitted.
 * @param {!Node=} node Another optional parameter.
 */
function maybeDoSomething(required, optional = '', node = undefined) {}
```

Use default parameters sparingly. Prefer destructuring (as in [Destructuring](#destructiring)) to create readable APIs when there are more than a small handful of optional parameters that do not have a natural order.

Use a rest parameter instead of accessing arguments. Rest parameters are typed with a ... prefix in their JSDoc. The rest parameter must be the last parameter in the list. There is no space between the ... and the parameter name. Do not name the rest parameter var_args. Never name a local variable or parameter arguments, which confusingly shadows the built-in name.

Example:

```javascript
  /**
   * @param {!Array<string>} array This is an ordinary parameter.
   * @param {...number} numbers The remainder of arguments are all numbers.
   */
  function variadic(array, ...numbers) {}
```

### Returns
Function return types must be specified in the JSDoc directly above the function definition, except in the case of same-signature @overrides where all types are omitted.

### Generics
Declare generic functions and methods when necessary with @template TYPE in the JSDoc above the class definition.

### Spread operator
Function calls may use the spread operator (...). Prefer the spread operator to Function.prototype.apply when an array or iterable is unpacked into multiple parameters of a variadic function. There is no space after the ....

Example:

```javascript
function myFunction(...elements) {}
myFunction(...array, ...iterable, ...generator());
```

## String literals
Ordinary string literals are delimited with single quotes ('), rather than double quotes (").
Ordinary string literals may not span multiple lines.

### Template strings
Use template strings (delimited with `) over complex string concatenation, particularly if multiple string literals are involved. Template strings may span multiple lines.

If a template string spans multiple lines, it does not need to follow the indentation of the enclosing block, though it may if the added whitespace does not matter.

Example:

```javascript
  function arithmetic(a, b) {
    return `Here is a table of arithmetic operations:
  ${a} + ${b} = ${a + b}
  ${a} - ${b} = ${a - b}
  ${a} * ${b} = ${a * b}
  ${a} / ${b} = ${a / b}`;
  }
```

### No line continuations
Do not use line continuations (that is, ending a line inside a string literal with a backslash) in either ordinary or template string literals. Even though ES5 allows this, it can lead to tricky errors if any trailing whitespace comes after the slash, and is less obvious to readers.

Illegal:

```javascript
  const longString = 'This is a very long string that far exceeds the 80 \
      column limit. It unfortunately contains long stretches of spaces due \
      to how the continued lines are indented.';
```

Instead, write

```javascript
  const longString = 'This is a very long string that far exceeds the 80 ' +
      'column limit. It does not contains long stretches of spaces since ' +
      'the concatenated strings are cleaner.';
```

## Number literals
Numbers may be specified in decimal, hex, octal, or binary. Use exactly 0x, 0o, and 0b prefixes, with lowercase letters, for hex, octal, and binary, respectively. Never include a leading zero unless it is immediately followed by x, o, or b.

## Control structures
### For loops
With ES6, the language now has three different kinds of for loops. All may be used, though `for-of` loops should be preferred when possible.

`for-in `loops may only be used on dict-style objects and should not be used to iterate over an array. Object.prototype.hasOwnProperty should be used in `for-in` loops to exclude unwanted prototype properties. Prefer `for-of` and `Object.keys` over `for-in` when possible.

### Exceptions
Exceptions are an important part of the language and should be used whenever exceptional cases occur. Always throw Errors or subclasses of Error: never throw string literals or other objects. Always use new when constructing an Error.

Custom exceptions provide a great way to convey additional error information from functions. They should be defined and used wherever the native Error type is insufficient.

Prefer throwing exceptions over ad-hoc error-handling approaches (such as passing an error container reference type, or returning an object with an error property).

### Switch statements
Within a switch block, each statement group either terminates abruptly (with a break, return or thrown exception), or is marked with a comment to indicate that execution will or might continue into the next statement group. Any comment that communicates the idea of fall-through is sufficient (typically // fall through). This special comment is not required in the last statement group of the switch block.

Example:

```javascript
  switch (input) {
    case 1:
    case 2:
      prepareOneOrTwo();
      // fall through
    case 3:
      handleOneTwoOrThree();
      break;
    default:
      handleLargeNumber(input);
  }
```

Each switch statement includes a default statement group, even if it contains no code.

## this
Only use this in class constructors and methods, or in arrow functions defined within class constructors and methods. Any other uses of this must have an explicit @this declared in the immediately-enclosing function’s JSDoc.

Never use this to refer to the global object, the context of an eval, the target of an event, or unnecessarily call()ed or apply()ed functions.

## Disallowed features
### with
Do not use the with keyword. It makes your code harder to understand and has been banned in strict mode since ES5.

### Dynamic code evaluation
Do not use eval or the Function(...string) constructor (except for code loaders). These features are potentially dangerous and simply do not work in CSP environments.

### Automatic semicolon insertion
Always terminate statements with semicolons (except function and class declarations, as noted above).

### Non-standard features
Do not use non-standard features. This includes old features that have been removed (e.g., WeakMap.clear), new features that are not yet standardized (e.g., the current TC39 working draft, proposals at any stage, or proposed but not-yet-complete web standards), or proprietary features that are only implemented in some browsers.

### Wrapper objects for primitive types
Never use new on the primitive object wrappers (Boolean, Number, String, Symbol), nor include them in type annotations.

Illegal:

```javascript
const /** Boolean */ x = new Boolean(false);
if (x) alert(typeof x);  // alerts 'object' - WAT?
```

The wrappers may be called as functions for coercing (which is preferred over using + or concatenating the empty string) or creating symbols.

Example:

```javascript
const /** boolean */ x = Boolean(0);
if (!x) alert(typeof x);  // alerts 'boolean', as expected
```

### Modifying builtin objects
Never modify builtin types, either by adding methods to their constructors or to their prototypes. Avoid depending on libraries that do this. Note that the JSCompiler’s runtime library will provide standards-compliant polyfills where possible; nothing else may modify builtin objects.

Do not add symbols to the global object unless absolutely necessary (e.g. required by a third-party API).

## Naming
### Rules common to all identifiers
Identifiers use only ASCII letters and digits, and, in a small number of cases noted below, underscores and very rarely (when required by frameworks like Angular) dollar signs.

Give as descriptive a name as possible, within reason. Do not worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader. Do not use abbreviations that are ambiguous or unfamiliar to readers outside your project, and do not abbreviate by deleting letters within a word.

```javascript
  priceCountReader      // No abbreviation.
  numErrors             // "num" is a widespread convention.
  numDnsConnections     // Most people know what "DNS" stands for.
```

Illegal:

```javascript
  n                     // Meaningless.
  nErr                  // Ambiguous abbreviation.
  nCompConns            // Ambiguous abbreviation.
  wgcConnections        // Only your group knows what this stands for.
  pcReader              // Lots of things can be abbreviated "pc".
  cstmrId               // Deletes internal letters.
  kSecondsPerDay        // Do not use Hungarian notation.
```

## Rules by identifier type
### Package names
Package names are all lowerCamelCase. For example, my.exampleCode.deepSpace, but not my.examplecode.deepspace or my.example_code.deep_space.

#### Hierarchy
Module namespaces may never be named as a direct child of another namespace.

Illegal:

```javascript
  goog.module('foo.bar');   // 'foo.bar.qux' would be fine, though
  goog.module('foo.bar.baz');
```

The directory hierarchy reflects the namespace hierarchy, so that deeper-nested children are subdirectories of higher-level parent directories. Note that this implies that owners of “parent” namespace groups are necessarily aware of all child namespaces, since they exist in the same directory.

```javascript
  goog.module('googleyhats.BowlerHat');  // internal name

  const RoundHat = goog.require('foo.hats.RoundHat');  // external name

  const BowlerHat = class extends RoundHat {
    …
  };
  exports = BowlerHat;

  goog.exportSymbol('foo.hats.BowlerHat', BowlerHat);  // export external name
```

### Class names
Class, interface, record, and typedef names are written in UpperCamelCase. Unexported classes are simply locals: they are not marked @private and therefore are not named with a trailing underscore.

Type names are typically nouns or noun phrases. For example, Request, ImmutableList, or VisibilityMode. Additionally, interface names may sometimes be adjectives or adjective phrases instead (for example, Readable).

### Method names
Method names are written in lowerCamelCase. Private methods’ names must end with a trailing underscore.

Method names are typically verbs or verb phrases. For example, sendMessage or stop_. Getter and setter methods for properties are never required, but if they are used they should be named getFoo (or optionally isFoo or hasFoo for booleans), or setFoo(value) for setters.

Underscores may also appear in JsUnit test method names to separate logical components of the name. One typical pattern is test<MethodUnderTest>_<state>, for example testPop_emptyStack. There is no One Correct Way to name test methods.

### Enum names
Enum names are written in UpperCamelCase, similar to classes, and should generally be singular nouns. Individual items within the enum are named in CONSTANT_CASE.

### Constant names
Constant names use CONSTANT_CASE: all uppercase letters, with words separated by underscores. There is no reason for a constant to be named with a trailing underscore, since private static properties can be replaced by (implicitly private) module locals.

#### Definition of “constant”
Every constant is a @const static property or a module-local const declaration, but not all @const static properties and module-local consts are constants. Before choosing constant case, consider whether the field really feels like a deeply immutable constant. For example, if any of that instance's observable state can change, it is almost certainly not a constant. Merely intending to never mutate the object is generally not enough.

Examples:

```javascript
  // Constants
  const NUMBER = 5;
  /** @const */ exports.NAMES = ImmutableList.of('Ed', 'Ann');
  /** @enum */ exports.SomeEnum = { ENUM_CONSTANT: 'value' };

  // Not constants
  let letVariable = 'non-const';
  class MyClass { constructor() { /** @const */ this.nonStatic = 'non-static'; } };
  /** @type {string} */ MyClass.staticButMutable = 'not @const, can be reassigned';
  const /** Set<String> */ mutableCollection = new Set();
  const /** ImmutableSet<SomeMutableType> */ mutableElements = ImmutableSet.of(mutable);
  const Foo = goog.require('my.Foo');  // mirrors imported name
  const logger = log.getLogger('loggers.are.not.immutable');
```

Constants’ names are typically nouns or noun phrases.

#### Local aliases
Local aliases should be used whenever they improve readability over fully-qualified names. Follow the same rules as goog.requires (3.4 goog.require statements), maintaining the last part of the aliased name. Aliases may also be used within functions. Aliases must be const.

Examples:

```javascript
const staticHelper = importedNamespace.staticHelper;
const CONSTANT_NAME = ImportedClass.CONSTANT_NAME;
const {assert, assertInstanceof} = asserts;
```

### Non-constant field names
Non-constant field names (static or otherwise) are written in lowerCamelCase, with a trailing underscore for private fields.

These names are typically nouns or noun phrases. For example, computedValues or index_.

### Parameter names
Parameter names are written in lowerCamelCase. Note that this applies even if the parameter expects a constructor.

One-character parameter names should not be used in public methods.

Exception: When required by a third-party framework, parameter names may begin with a $. This exception does not apply to any other identifiers (e.g. local variables or properties).

### Local variable names
Local variable names are written in lowerCamelCase, except for module-local (top-level) constants, as described above. Constants in function scopes are still named in lowerCamelCase. Note that lowerCamelCase applies even if the variable holds a constructor.

### Template parameter names
Template parameter names should be concise, single-word or single-letter identifiers, and must be all-caps, such as TYPE or THIS.

### Camel case: defined
Sometimes there is more than one reasonable way to convert an English phrase into camel case, such as when acronyms or unusual constructs like "IPv6" or "iOS" are present. To improve predictability, Google Style specifies the following (nearly) deterministic scheme.

Note that the casing of the original words is almost entirely disregarded.

Examples:

```
  Prose form                Correct            Incorrect
  --------------------------------------------------------------
  "XML HTTP request"        XmlHttpRequest     XMLHTTPRequest
  "new customer ID"         newCustomerId      newCustomerID
  "inner stopwatch"         innerStopwatch     innerStopWatch
  "supports IPv6 on iOS?"   supportsIpv6OnIos  supportsIPv6OnIOS
  "YouTube importer"        YouTubeImporter    YoutubeImporter
```

Note: Some words are ambiguously hyphenated in the English language: for example "nonempty" and "non-empty" are both correct, so the method names checkNonempty and checkNonEmpty are likewise both correct.