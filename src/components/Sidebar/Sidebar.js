import React, {useEffect, useState} from "react";
import { Link, useRouteMatch } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';

// core components
import componentStyles from "../../assets/theme/components/Sidebar/Sidebar";


const useStyles = makeStyles(componentStyles);
const sidebar_content = [
  { id: 0, label: "Profile", link: "/profile", icon: <PersonIcon  fontSize="large" /> },
  { id: 1, label: "Settings", link: "/settings", icon: <SettingsIcon fontSize="large" /> },
];

export default function Sidebar() {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />
      <List>
        {sidebar_content.map(item => (
          <ListItem key={item.id} className={`${item.link === url ? classes.blackBg : ""}`} >
            <ListItemIcon className={`${item.link === url ? classes.primaryColor : ""}`}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label}  className={`${item.link === url ? classes.primaryColor : ""}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
  </>
  );
}