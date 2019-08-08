Publishing:

1) `ng build --prod` for some reason you have to build the production version of the app for it to deploy right

2) `firebase serve --only functions,hosting` - to check locally that a built angular thing looks how you expect it to.

3) `firebase deploy` actually publishes it to the interwebs

Or run the deploy.bat scripts


To see your angular changes live, you have to go into the qrclient folder and run `ng serve`
