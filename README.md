This project can be accessed live through : https://bobble-ai-frontend.herokuapp.com/
## Procedures followed to complete the project were as follows: 

## 1. 
Set up npx creat-react-app boiler plate 
## 2.
Install npm modules - material-ui, firebase, react-firebaseui
## 3.
Made a github repository.
Set up envirnment to deploy it on heroku.
Installed npm module named "serve" for deploying application on cloud.
Linked the github repository to the heroku cloud.
## 4.
Made a new app on firebase console.
configured facebook and google OAuth.
Validated OAuth Redirect URIs of firebase on https://developers.facebook.com/ for facebook. 
## 5.
Now edited the App.js file of the react app.
Linked the firebase Oauth to the react app by entering the apikey and auth domain of firebase app.
## 6.
Created a dynamic form using functional component and useState logic.
Connected the https://reqres.in/api/register POST api to the form validation.
## 7.
Displayed the content of recieved by the api and displayed it on the Dialog.
## 8.
Displayed the data retrived after the successfull OAuth of Facebook/Google on the page. 
It will display the Profile picture and UserName of the Google/Facebook verified page.
Also teher is is button to logout the session.
## 9.
Pushed the work on the github repository which automatically deploys the entire applicatiopn on heroku linked cloud.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
