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


const useStyles = makeStyles(componentStyles);

export default function AuthContent() {
  const classes = useStyles();
  let history = useHistory();
  const [register, setRegister] = useState(false);
  const [options, setOptions] = useState([]);

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

  const handleSignIn = () => {
    history.push('/dashboard');
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
                  <input id="email" className={classes.authInput} name="email"  type="text" placeholder="Email"></input>
                </Box>
                <Box mt={2.5}>
                  <Typography variant="h3" className={classes.authInputLabel}>Password</Typography>
                  <input id="password" className={classes.authInput} name="password"  type="password" placeholder="Password"></input>
                </Box>
                <Typography className={classes.forgotPassword}>Forgot Password?</Typography>
              </>
            :
            <>
              <Box mt={5}>
                <Grid container style={{margin: "0px", justifyContent: "space-between"}}>
                  <Grid item sm={12} md={6} style={{paddingLeft: "0px", paddingRight: "5px"}}>
                    <Typography variant="h3" className={classes.authInputLabel}>First Name</Typography>
                    <input id="first_name" className={classes.authInput} name="first_name"  type="text" placeholder="First Name"></input>
                  </Grid>
                  <Grid item sm={12} md={6} style={{paddingRight: "0px", paddingLeft: "5px"}}>
                    <Typography variant="h3" className={classes.authInputLabel}>Last Name</Typography>
                    <input id="last_name" className={classes.authInput} name="last_name"  type="text" placeholder="Last Name"></input>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2.5}>
                <Grid container style={{margin: "0px", justifyContent: "space-between"}}>
                  <Grid item sm={12} md={6} style={{paddingLeft: "0px", paddingRight: "5px"}}>
                    <Typography variant="h3" className={classes.authInputLabel}>Email</Typography>
                    <input id="email" className={classes.authInput} name="email"  type="text" placeholder="Email"></input>
                  </Grid>
                  <Grid item sm={12} md={6} style={{paddingRight: "0px", paddingLeft: "5px"}}>
                    <Typography variant="h3" className={classes.authInputLabel}>Password</Typography>
                    <input id="password" className={classes.authInput} name="password"  type="password" placeholder="Password"></input>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2.5}>
                <Typography variant="h3" className={classes.authInputLabel}>Creator Alias</Typography>
                <input id="creator" className={classes.authInput} name="creator"  type="text" placeholder="Creator Alias"></input>
              </Box>
            </> }
            { !register && <Box mt={2.5} mb={4.75}>
              <Typography variant="h3" className={classes.authInputLabel}>Genres of Interest</Typography>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option1") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option1')}>Pop</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option2") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option2')}>Hip-Hop/Rap</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option3") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option3')}>Rock</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option4") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option4')}>Dance/Electronic</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option5") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option5')}>Latin</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option6") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option6')}>Alternative</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option7") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option7')}>Classical</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option8") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option8')}>K-Pop</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option9") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option9')}>Country</Button>
              <Button className={clsx("genre-select-btn", {"selected": options.findIndex(option => option === "option10") > -1})}
                variant="outlined" size="small" onClick={() => handleSaveOption('option10')}>Metal</Button>
            </Box> }
            { register ? <Button variant="contained" color="primary" className={classes.loginBtn} size="large" onClick={handleSignIn}>Sign In</Button>
            : <Button variant="contained" color="primary" className={classes.registerBtn} size="large" onClick={() => setRegister(!register)}>Sign Up</Button> }            
            <Typography className={classes.authQuestion}>
              Already have an Account? <span className={classes.authBtn} onClick={() => setRegister(!register)}>{ register ? "Sign Up" : "Sign In" }</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}