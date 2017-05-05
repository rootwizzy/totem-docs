Rails.application.routes.draw do
  # totem-lodestar will have to be mounted at the base level of the application, this may work by appending it to some other route but has not been tested. When navigating to the base route determined by the `versions` module in the `settings.yml` will determine the landing view.
  mount Totem::Lodestar::Engine, at: '/'
end
