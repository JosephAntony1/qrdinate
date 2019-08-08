`ng build --prod` for some reason you have to build the production version of the app for it to deploy right

`firebase serve --only functions,hosting` - to check locally that a built angular thing looks how you expect it to.

`firebase deploy` actually publishes it to the interwebs
