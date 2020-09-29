import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Form from './Form'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
firebase.initializeApp({
  apiKey: "AIzaSyC7DTPRmx9O_Hy1KyBsYEPrfSMOY5aFB0k",
  authDomain: "fir-oauth-f7382.firebaseapp.com"
})
class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        <div>Brand Logo</div>
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="dp"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <div>
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography component="h1" variant="h5">
          Create your account
        </Typography>
        <Typography component="p" variant="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
        <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <Form />
          </Container>
          </div>
        )}
      </div>
    )
  }
}

export default App