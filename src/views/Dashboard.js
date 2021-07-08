import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// core components
import Header from "../components/Headers/Header";
import EarnCard from "../components/Cards/EarnCard";
import ListenerCard from "../components/Cards/ListenerCard";
import SongInfoWindow from "../components/Infos/SongInfoWindow";
import SongStructureList from "../components/Infos/SongStructureList";
import SongRelatedList from "../components/Infos/SongRelatedList";

import componentStyles from "../assets/theme/views/Dashboard";

const useStyles = makeStyles(componentStyles);



const Dashboard = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box position="relative">
      <Header 
        logo={{
          innerLink: "/dashboard",
          imgSrc: require("../assets/img/logo.png").default,
          imgAlt: "logo-image",
        }}
        help={{
          imgSrc: require("../assets/img/help_icon.png").default,
          imgAlt: "help-icon",
        }}
        avatar={{
          imgSrc: require("../assets/img/user_avatar.png").default,
          imgAlt: "user-avatar",
        }}
      />
      <Box px={4} py={5} className={classes.mainContent}>
        <Grid container>
          <Grid item sm={12} md={8} className={classes.widthMobile}>
            <Box>
              <Grid container className={classes.cardGroup}>
                <Grid md={12} lg={6} item>
                  <EarnCard 
                    amount = "895.89"
                  />
                </Grid>
                <Grid  md={12} lg={6} item>
                  <ListenerCard
                    totalAmount = "11,235"
                    listenerIcon={{
                      imgSrc: require("../assets/img/headphone.png").default,
                      imgAlt: "listener-icon",
                    }}
                    differAmount = "+1,200"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box mt={2}>
              <SongInfoWindow>
              </SongInfoWindow>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <SongStructureList>
            </SongStructureList>
            <SongRelatedList>
            </SongRelatedList>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;