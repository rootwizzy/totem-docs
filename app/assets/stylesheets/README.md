# Totem Doc Styles
Totem Docs uses exclusively totem-lodestar views, so in order to provide styling to these views totem-lodestar has exposed them via the `variables/_modules.scss` file. These variables will be then pulled from Totem Docs and applied to the corresponding classes.

You can also define platform (Totem Docs) specific variables in `variables/_platform.scss` to then be used inside of the `_modules` style sheets.

If you want to see the specific styles they are being applied to or want to change totem-lodestar styles see [here](https://github.com/sixthedge/totem-lodestar/tree/master/app/assets/stylesheets/totem/lodestar).