import React,{ useState } from 'react';
import clsx from 'clsx';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

// core components
import Header from "../../components/Headers/Header";
import Sidebar from '../../components/Sidebar/Sidebar';

import componentStyles from "../../assets/theme/views/Profile";

const useStyles = makeStyles(componentStyles);

const Profile = () => {
  const classes = useStyles();
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

  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <Box position="relative">
      <Header 
        logo={{
          innerLink: "/dashboard",
          imgSrc: require("../../assets/img/logo.png").default,
          imgAlt: "logo-image",
        }}
        help={{
          imgSrc: require("../../assets/img/help_icon.png").default,
          imgAlt: "help-icon",
        }}
      />
      <Box display="flex">
        <Sidebar></Sidebar>
        <Box className="profile-wrap">
          <Box className="profile-container">
            <Box className={classes.profileContent} py={6} pl={6} pr={4}>
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<EditRoundedIcon alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
              >
                <Avatar alt="user-avatar" src={require('../../assets/img/profile_avatar.png').default} className={classes.profileAvatar} />
              </Badge>
              <Box mt={6}>
                <Grid container style={{margin: "0px", justifyContent: "space-between"}}>
                  <Grid item sm={12} md={6} style={{paddingLeft: "0px", paddingRight: "20px"}}>
                    <Typography variant="h3" className={classes.authInputLabel}>First Name</Typography>
                    <input id="first_name" className={classes.authInput} name="first_name"  type="text" defaultValue={userData["first_name"]}></input>
                  </Grid>
                  <Grid item sm={12} md={6} style={{paddingRight: "0px", paddingLeft: "20px"}}>
                    <Typography variant="h3" className={classes.authInputLabel}>Last Name</Typography>
                    <input id="last_name" className={classes.authInput} name="last_name"  type="text" defaultValue={userData["last_name"]}></input>
                  </Grid>
                </Grid>
              </Box>
              <Box mt={2.5}>
                <Grid container style={{margin: "0px", justifyContent: "space-between"}}>
                  <Grid item sm={12} md={6} style={{paddingLeft: "0px", paddingRight: "20px"}}>
                    <Typography variant="h3" className={classes.authInputLabel}>Email</Typography>
                    <input id="email" className={classes.authInput} name="email"  type="text" defaultValue={userData["email"]}></input>
                  </Grid>
                  <Grid item sm={12} md={6} style={{paddingRight: "0px", paddingLeft: "20px"}}>
                      <Typography variant="h3" className={classes.authInputLabel}>Creator Alias</Typography>
                      <input id="creator" className={classes.authInput} name="creator"  type="text" defaultValue={userData["creator_alias"]}></input>
                  </Grid>
                </Grid>
              </Box>
              <Box my={5} textAlign="left">
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
              </Box>
              <Box textAlign="left">
                <Button variant="contained" color="primary" size="large">Save Changes</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
