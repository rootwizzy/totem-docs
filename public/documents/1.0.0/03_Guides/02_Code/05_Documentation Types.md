# Source Documentation Guidelines


## General
### Source Header
#### Coffeescript

```ruby
  ###
  # # file.ext
  - Type: **$FILE_TYPE**
  - Package: **$PACKAGE_NAME**
  ###
```

#### Ruby

```ruby
  # # file.ext
  # - Type: **Controller**
  # - Engine: **thinkspace-casespace**
```

## Client Side
### Components
1. Imports
2. Header
3. Properties
  a. View Properties
  b. Service Injections
  c. Component/Partial Paths
  d. Internal Properties
  e. Computed Properties
4. Events/Hooks
5. Helpers
6. Actions

### Routes
1. Imports
2. Header
3. Events/Hooks

### Objects
1. Imports
2. Header
3. Properties
  a. Service Injections
  b. Component/Partial Paths
  c. Internal Properties
  d. Computed Properties
5. Helpers

### Services
1. Imports
2. Header
3. Properties
  a. Service Injections
  b. Component/Partial Paths
  c. Internal Properties
  d. Computed Properties

### Mixins
1. Imports
2. Header
3. Properties
  a. Service Injections
  b. Component/Partial Paths
  c. Internal Properties
  d. Computed Properties
4. Helpers

### Models
1. Imports
2. Header
3. Serialized Properties
3. Model Properties
  a. Service Injections
  b. Component/Partial Paths
  c. Internal Properties
  d. Computed Properties
4. Methods
5. Helpers

## Server Side
### Controllers
1. Namespace
2. Header
3. Class Definition
4. Controller Setup
  a. Authorization
  b. Hooks
  c. Includes
5. Public Methods
6. Private Methods

### Models
1. Namespace
2. Header
3. Class Definition
4. Model Setup
  a. Totem Association
  b. Includes
  c. Hooks
  d. Validations
  e. States
5. Public Methods
6. Private Methods

### Concerns
1. Namespace
2. Header
3. Public Methods
4. Private Methods

### Mailers
1. Namespace
2. Header
3. Class Definition
4. Mailer Setup
  a. includes
  b. layout
  c. defaults
5. Methods

### Tasks
1. Requires
2. Namespace
3. Header.
4. Tasks

### Tests
1. Requires
2. Namespace
3. Header
4. Test Setup
  a. includes
5. Tests