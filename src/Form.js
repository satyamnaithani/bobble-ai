import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { CircularProgress, Dialog } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setlName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loggedData, setLoggedData] = useState("");
  const [loggedInSuccess, setLoggedInSuccess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: email,
            password: password
        })
    };
    fetch('https://reqres.in/api/register', requestOptions)
        .then(response => response.json())
        .then(data => {
            setIsLoading(false)
            setLoggedData(data)
            setLoggedInSuccess(true)
        })
        .catch(err=> {
            setIsLoading(false);
            alert(err);
        })
  }
  const handleClose = () => {
      setLoggedInSuccess(false)
  }
  return (      
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit} ValidateUser>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                value={fName}
                onChange={(e)=>setFName(e.target.value)}
                fullWidth
                margin="normal"
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={lName}
                onChange={(e)=>setlName(e.target.value)}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            <Typography component="p" variant="p"> By clicking Sign Up, you agree to our <Link href='#'>Terms of Use</Link> and our <Link href='#'>Privacy Policy</Link>.</Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isLoading?<CircularProgress color="inherit"/>: 'Sign Up'}
          </Button>
        </form>
        <Dialog
        maxWidth={"lg"}
        open={loggedInSuccess}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="form-dialog-title">Reqres Api</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Api used : https://reqres.in/
           Note: Use email= "eve.holt@reqres.in" and password = "pistol" as per API Docs
          </DialogContentText>
          id = {loggedData.id}
          token = {loggedData.token}
        </DialogContent>
          </Dialog>
      </div>
  );
}