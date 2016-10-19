# Totem Docs
At the most simplistic level, Totem is the combination of a client side and server side code.  It’s the combination of two existing, open source frameworks: Rails (server side) and EmberJS (client side).  These two frameworks were chosen for a variety of reasonings, including: ease of development, feature set, maintainability issues, future proofing, scalability, developer pool, and more.

Behind the scenes, Totem provides developers with certain prepackaged functionalities to make their life easier -- similar to how Rails and EmberJS both aid the developer by providing base line functionalities as to not ‘recreate the wheel’ so to speak.

The goal of Totem is simple:  to provide a stable and sustainable home for educational applications.  Totem accomplishes this by allowing developers to ‘bring in’ functionalities from other Totem-based applications with ease.  Totem is designed to be the glue that binds many pieces of functionality into one larger application.

## At a glance
Here are the technologies we employ

**[Server Side](#server-side)**
 - Rails 4.0 with ActiveModel::Serializers
 - PostgreSQL
 - Memcached
 - Apache with Phusion Passenger

**[Client Side](#client-side)**
 - EmberJS
 - Ember Data
 - CommonJS
 - CoffeeScript
 - SCSS
 - Emblem

**[Testing](#testing)**
Travis     CI for continuous integration
QUnit     (client side)
PhantomJS (to run client side tests)
RSpec     (server side)
    
## Server Side
Totem's server side is built on top of Rails 4.0 powered API with ActiveModel::Serializers (AMS) providing JSON serialization from our PostgreSQL persistence layer. The server side uses fragmentation of Totem projects into separate Rails' engines to support maintainability and extensibility.

Totem projects are grouped under a common Ruby module (namespace) with each main component added as a sub-module. Utilizing an enhanced version of ActiveModel::Serializers, this modularization of the code base persists through our serialization process to support clear and definite definitions of all models within each application. This level of modularization allows for Totem applications to bring in the functionality of other Totem applications in an isolated manner without fear of namespace collisions.

## Client Side
The client side JavaScript (JS) of Totem is stored within each of the Rails' engine to pair related client side code with server side code. Utilizing the power of the Rails' asset pipeline and manifest files, Rails can transpile and precompile our client side code into any number of JS files as needed. These files can be distributed amongst as many Rails' engines as needed for any given application.

As with the server side, Totem's client side draws benefit from code that is separated appropriately into namespaces. Totem automatically configures Ember and Ember Data to map any given JSON root key into an Ember model. As an example, if the JSON payload was:

    {'totem/authentication/user': 'user_id': '5', 'email': 'john.doe@fake.com'}

Due to Totem's configuration process, Ember will automatically know that the JSON is a representation of the `Totem.Authentication.User` Ember model and instantiate or update the appropriate object in the DOM.

## Testing
Totem provides support for both client side and server side testing. Server side testing is conducted with RSpec and the client side testing is done with QUnit powered by PhantomJS. The client side can benefit from both integration and unit tests. The entire testing package is designed to support continuous integration practices and is Travis CI friendly (https://travis-ci.org/).

## Additional Features
Totem's technology stack inherently provides a vast array of options for the developer when evaluating user experience, scalability, and ease of development.

As an example, Rails 4.0 provides the ability to stream server-side events to a client. This can provide a seamless 'auto updating' user experience to an application if it is required by design. Rails can stream JSON payloads to the client which can be automatically interpreted by Ember and extracted into the appropriate model creations and/or updates. Keeping the client side view in sync with these changes is trivial due to Ember's core feature of data binding between models/controllers and the Handlebars infused HTML templates rendered on the client's screen.

When initially evaluating scalability concerns, developers have many options to choose for the web server. Depending on whether an application's code is thread safe, developers have the option to choose multi-process and/or multi-threaded web servers. By default, Totem will use a multi-processed web server as to not make assumptions on thread safety.

Additionally, developers can intelligently cache JSON payloads and respond to requests directly from in-memory caches and avoid any database communication and serialization efforts all together and improve performance drastically to support scaling efforts.

