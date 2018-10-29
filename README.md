## Intro

This application has been built as a recruitemt task. Thanks to @Agnieszka Dombrowska: patient and awesome recruiter for motivating me to complete it despite my personal problems and SEVERE lack of time.

### Application

This app was supposed to be sleek and fast responsible solution to using indexedDB. It runs well, fast and looks good on variety of devices. It uses a single form to acesss create/read/update data with variety of states and variables. It stii lacks some features (like error handling) that will be added later.


### TODO
 - [x] Create a fully functionning solution,
 - [ ] Fix naming conventions,
 - [ ] Handle errors,
 - [ ] Refactor database integration so it is more compact and DRY,
 - [ ] Introduce form-field validation,
 - [ ] Ensure database functionality with multiple users acesssing the base in different time.
 - [ ] Relatively low complexity of state management does not warrant usage of Redux, yet I might give it a go to show capabillity in doing so.
 - [ ] Favicon. Come on, really  that's low priority task will you persecute me becuase of IT?


### SPECIAL THANKS

As usual: Create-React-App: an awesome library that provides webpack-babel functionality for you: go develop freestyle React instead of ploughing through npm:-)
Thanks guys.

### Deployment and Running
To run development version:
-install node.js
-copy/clone this repo 
-npm install (to install dependencies)
-npm start (to run local server)

To deploy build version LOCALY use:

 npm install-g pushstate-server
 (as with any create-react-app)
 pushstate-server build
 open http://localhost:9000
OR
npm install -g serve
serve -s build
OR
any static file server should work
