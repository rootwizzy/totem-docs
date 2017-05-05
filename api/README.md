# API Assets
This directory is primarily generated via the `rails totem:lodestar:api[build]` command. Each directory (except assets) is the output of GROC cli that has the generated html files for the API documentation.

The need for the shared `behavior.js` which is a aggregate of the subsequent repository directories is so on an initial load in from Rails it has the required structure, once you start navigating the API it will then revert to the internal `behavior.js` files

For more information about the aggregation process see [here](https://github.com/sixthedge/totem-lodestar/blob/master/lib/tasks/totem/lodestar/helpers/api_generator.rb)