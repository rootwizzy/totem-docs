# Totem Doc Views
The only views required by Totem Docs are the layouts that will wrap the totem-lodestar views. These views are generated via the install process and come in 2 different types. The only custom element of these views that are shared between is the settings tag. This is how we pass in the `settings.yaml` options to the javascript modules of totem-lodestar.

## Application View
The application view is what is responsible for the guides and any standard totem-lodestar view. This layout will load the standard application css and js with turbo-links.

## API View
The API view is used only for displaying the Groc documents and loads in the specific style sheets needed for Groc as it was causing conflicts on certain elements.