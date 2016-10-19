## Create the Ember Application
To create a new ember application use totem-ember-cli

`./repos/totem-api/totem-cli/bin/totem-ember-cli thinkspace -o PATH_TO_PACKAGE_FILE --new -f -n`


## Create new Ember (node) package:
- Copy an existing package and rename the base folder to the new package name (dasherize).
- Remove all files not needed from the internal (leaving app is recommended).
- Modify `index.json` and `package.json` according to the new package name. 

## How to manually add new Ember (node) packages to existing applications
- Create a new node package.
- Within the new package’s folder: `npm link`
- Within the existing project’s folder: `npm link PACKAGE-NAME`
- Add PACKAGE-NAME to the package.json in the existing project.
