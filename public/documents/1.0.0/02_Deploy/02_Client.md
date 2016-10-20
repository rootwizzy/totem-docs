# How to deploy the Ember client:
- Properly set up environment/deploy.js
  - AWS IAM keys for given deployment environment.
  - AWS bucket name.
  - Redis host/password to store the built index.html
- An existing Ember application.  If this does not already exist, you can create one through `totem-ember-cli`.
- Set up Brocfile.js
  - Add `APP_OPTIONS.fingerprint = { “prepend”: “URL_HERE” }` to the environment
- Set up the environment.js production block with relevant keys as needed.

After the above is established, all that is needed is to run:
`./repos/totem-api/totem-cli/bin/totem-deploy -o PATH_TO_PACKAGE_FILE --client`
`ember deploy:list --prod`
`ember deploy:activate --revision ID-HERE --prod`

> Css font-faces must not be used through a mixin (meaning, interpolated).  If they are interpolated string paths, ember-cli’s build will not catch them to add fingerprints, etc.
