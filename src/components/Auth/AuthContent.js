import React from "react";
import {useEffect, useState} from "react";
import clsx from 'clsx';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// @material-ui/icons components

// core components
import componentStyles from "../../assets/theme/components/Auth/AuthContent";
import { useHistory } from "react-router-dom";
import { createUser, readUser } from "../../service/api";

const useStyles = makeStyles(componentStyles);

export default function AuthContent() {
  const classes = useStyles();
  let history = useHistory();
  const [register, setRegister] = useState(false);
  const [options, setOptions] = useState([]);
  const [registerUser, setRegisterUser] = useState({
    email: "",
    password: "",
    first: "",
    last: "",
    creator_alias: "",
  });
  const [signInUser, setSignInUser] = useState({
    email: "",
    password: "",
  });

  const handleSaveOption = (val) => {
    const isExist = options.findIndex(option => option === val) > -1;
    console.log(isExist);
    if (isExist) {
      const updatedOptions = options.filter(option => option !== val);
      setOptions(updatedOptions);
    } else {
      setOptions(prev => [...prev, val]);
    }
  }

  const handleChangeInput = (field) => (e) => {
    let value = e.target.value;
    setRegisterUser(prevState => {
      return {...prevState, [field]: value}
    })
  }
  const handleChangeLogInInput = (field) => (e) => {
    let value = e.target.value;
    setSignInUser(prevState => {
      return {...prevState, [field]: value}
    })
  }

  const handleSignIn = () => {
    const bodySignInData = {
      email: signInUser.email,
      password: signInUser.password,
    };
    readUser(bodySignInData)
      .then(rlt => {
        localStorage.setItem('session_token', rlt.data.session_key);
        localStorage.setItem('musicInfo', JSON.stringify(rlt.data))
        history.push('/dashboard');
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleRegister = () => {
    const bodyRegisterData = {
      email: registerUser.email,
      password: registerUser.password,
      first: registerUser.first,
      last: registerUser.last,
      creator_alias: registerUser.creator_alias,
      genres: options
    };
    const bodySignInData = {
      email: registerUser.email,
      password: registerUser.password,
    };
    createUser(bodyRegisterData)
      .then(rlt => {
        readUser(bodySignInData)
          .then(rlt => {
            localStorage.setItem('session_token', rlt.data.session_key);
            history.push('/upload');
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  return (
      <Box className="auth-content-wrap">
        <Box className={classes.authContentContainer}>
          <Box>
            <Typography className={classes.registerTitle}>
              { register ? "Sign In" : "Sign Up" }
            </Typography>
            <Typography className={classes.registerDescription}>
              It is a long established fact that a reader will be distracted by the readable content.
            </Typography>
            <Box>
              { register ? 
                <>
                  <Box mt={2.5}>
                    <Typography variant="h3" className={classes.authInputLabel}>Email</Typography>
                    <input id="email" className={classes.authInput} name="email"  type="text" placeholder="Email" onChange={handleChangeLogInInput("email")}></input>
                  </Box>
                  <Box mt={2.5}>
                    <Typography variant="h3" className={classes.authInputLabel}>Password</Typography>
                    <input id="password" className={classes.authInput} name="password"  type="password" placeholder="Password" onChange={handleChangeLogInInput("password")}></input>
                  </Box>
                  <Typography className={classes.forgotPassword}>Forgot Password?</Typography>
                </>
              :
              <>
                <Box mt={5}>
                  <Grid container style={{margin: "0px", justifyContent: "space-between"}}>
                    <Grid item sm={12} md={6} style={{paddingLeft: "0px", paddingRight: "5px"}}>
                      <Typography variant="h3" className={classes.authInputLabel}>First Name</Typography>
                      <input id="first_name" className={classes.authInput} name="first_name"  type="text" placeholder="First Name" onChange={handleChangeInput('first')}></input>
                    </Grid>
                    <Grid item sm={12} md={6} style={{paddingRight: "0px", paddingLeft: "5px"}}>
                      <Typography variant="h3" className={classes.authInputLabel}>Last Name</Typography>
                      <input id="last_name" className={classes.authInput} name="last_name"  type="text" placeholder="Last Name" onChange={handleChangeInput('last')}></input>
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={2.5}>
                  <Grid container style={{margin: "0px", justifyContent: "space-between"}}>
                    <Grid item sm={12} md={6} style={{paddingLeft: "0px", paddingRight: "5px"}}>
                      <Typography variant="h3" className={classes.authInputLabel}>Email</Typography>
                      <input id="email" className={classes.authInput} name="email"  type="text" placeholder="Email" onChange={handleChangeInput('email')}></input>
                    </Grid>
                    <Grid item sm={12} md={6} style={{paddingRight: "0px", paddingLeft: "5px"}}>
                      <Typography variant="h3" className={classes.authInputLabel}>Password</Typography>
                      <input id="password" className={classes.authInput} name="password"  type="password" placeholder="Password" onChange={handleChangeInput('password')}></input>
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={2.5}>
                  <Typography variant="h3" className={classes.authInputLabel}>Creator Alias</Typography>
                  <input id="creator" className={classes.authInput} name="creator"  type="text" placeholder="Creator Alias" onChange={handleChangeInput('creator_alias')}></input>
                </Box>
              </> }
              { !register && <Box mt={2.5} mb={4.75}>
                <Typography variant="h3" className={classes.authInputLabel}>Genres of Interest</Typography>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Pop") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Pop')}>Pop</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Hip-Hop/Rap") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Hip-Hop/Rap')}>Hip-Hop/Rap</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Rock") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Rock')}>Rock</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Dance/Electronic") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Dance/Electronic')}>Dance/Electronic</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Latin") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Latin')}>Latin</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Alternative") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Alternative')}>Alternative</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Classical") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Classical')}>Classical</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "K-Pop") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('K-Pop')}>K-Pop</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Country") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Country')}>Country</Button>
                <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "Metal") > -1})}
                  variant="outlined" size="small" onClick={() => handleSaveOption('Metal')}>Metal</Button>
              </Box> }
              { register ? <Button variant="contained" color="primary" className={classes.loginBtn} size="large" onClick={handleSignIn}>Sign In</Button>
              : <Button variant="contained" color="primary" className={classes.registerBtn} size="large" onClick={handleRegister}>Sign Up</Button> }        
              <Typography className={classes.authQuestion}>
                Already have an Account? <span className={classes.authBtn} onClick={() => setRegister(!register)}>{ register ? "Sign Up" : "Sign In" }</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}
