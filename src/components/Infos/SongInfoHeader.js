import React, { useState } from "react";
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

// @material-ui/icons components
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// core components
import componentStyles from "../../assets/theme/components/Infos/SongInfoHeader";


const useStyles = makeStyles(componentStyles);

export default function SongInfoHeader({ }) {
  const classes = useStyles();
  const theme = useTheme();
  const [val,setVal] = useState(0);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon}/>
    )};

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null
  };


  return (
    <Box px={1.75} py={1.375}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item container alignItems="center">
          <button className={classes.playBtn}>
            <PlayArrowIcon className={classes.playIcon} fontSize="large" />
          </button>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              disableUnderline
              classes={{ root: minimalSelectClasses.select }}
              MenuProps={menuProps}
              IconComponent={iconComponent}
              value={val}
              onChange={handleChange}
            >
              <MenuItem value={0}>Genre</MenuItem>
              <MenuItem value={1}>Genre1</MenuItem>
              <MenuItem value={2}>Genre2</MenuItem>
              <MenuItem value={3}>Genre3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}