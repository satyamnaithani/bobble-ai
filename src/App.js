import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Form from './Form'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar,Paper } from "@material-ui/core"
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
        <AppBar color={"inherit"} position="static">
        <Toolbar alignCenter>
            <Typography variant="h6" alignCenter>Bobble AI</Typography>
          </Toolbar>
        </AppBar>
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
            <br/><br/>
          <Container component="main" maxWidth="xs">
            <Paper elevation={2} style={{width: '150%'}}>
              <br/>
          <CssBaseline />
          <Typography component="p" variant="p">
          SIGN UP
        </Typography>
        <br/><br/>
          <Typography component="h1" variant="h4">
          Create your account
        </Typography>
        <Typography component="p" variant="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
        <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <div class="separator">or</div>
          <Form />
          </Paper>
          </Container>
          </div>
        )}
      </div>
    )
  }
}

export default App