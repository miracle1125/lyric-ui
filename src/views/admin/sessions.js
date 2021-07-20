import React,{useState,useEffect, forwardRef} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

// core components
import Header from "../../components/Headers/Header";

import componentStyles from "../../assets/theme/views/Sessions";

const useStyles = makeStyles(componentStyles);

const Sessions = () => {
  const classes = useStyles();
  // const theme = useTheme();
  const theme = createMuiTheme({
    overrides: {
      MuiInput: {
        underline: {
          "&&&:before": {
            borderColor: "green",
          },
          "&&&:after": {
            borderColor: "red",
          },
          "&&&:not(.Mui-disabled):hover::before": {
            borderColor: "green",
          },
        },
      },
      MuiTypography: {
        h6: {
          fontSize: "1.375rem",
          fontWeight: "600",
          color: "#8D6DC8",
        },
        caption: {
          color: "#fff"
        }
      },
      MuiTablePagination: {
        root: {
          border: "none"
        },
        select: {
          color: "#fff"
        },
      },
      MuiInputBase: {
        input: {
          backgroundColor: "unset",
          color: "#fff"
        }
      },
      MuiIconButton: {
        root: {
          color: "#fff",
          "&.Mui-disabled": {
            color: "rgba(255, 255, 255, 0.26)"
          }
        }
      },
      MuiSelect: {
        icon: {
          color: "#fff"
        }
      },
      MuiTableCell: {
        body: {
          color: "#fff"
        }
      },
      MuiOutlinedInput: {
        input: {
          "&::placeholder": {
            color: "#fff",
            opacity: "100%",
          }
        }
      },
    },
  })
  const columns = [
    { title: "Song Name", field: "name" },
    { title: "Length", field: "length" },
    { title: "Last Opened", field: "time" },
  ];  
  const data = [
    { name: 'Song Name 1', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 2', length: '02:35', time: "1:30PM" },
    { name: 'Song Name 3', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 4', length: '02:35', time: "1:30PM" },
    { name: 'Song Name 5', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 6', length: '02:35', time: "1:30PM" },
    { name: 'Song Name 7', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 8', length: '02:35', time: "1:30PM" },
    { name: 'Song Name 9', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 10', length: '02:35', time: "1:30PM" },
    { name: 'Song Name 11', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 12', length: '02:35', time: "1:30PM" },
    { name: 'Song Name 13', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 14', length: '02:35', time: "1:30PM" },
    { name: 'Song Name 15', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 16', length: '02:35', time: "1:30PM" },
    { name: 'Song Name 17', length: '01:23', time: "2:34PM" },
    { name: 'Song Name 18', length: '02:35', time: "1:30PM" },
  ];
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
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

      <Box className="sessions-wrap">
        <Box className="sessions-container">
          <MuiThemeProvider theme={theme}>
            <MaterialTable 
              title="My Sessions"
              data={data} 
              columns={columns}
              icons={tableIcons}
              style={{ backgroundColor:"#323232", color: "#fff", borderRadius: "2px", padding: "16px 0px", width: "90%", margin: "auto" }}
              options={{
                headerStyle: { backgroundColor: "#323232", border: "none", color: "#fff", fontWeight: "600" },
                rowStyle: {borderColor: "red", color: "#fff"},
                cellStyle: { fontSize: "14px", verticalAlign: "middle", border: "none", color: "#fff" },
                filterCellStyle: { color:"#fff" },
                searchFieldStyle: { color: "#fff", backgroundColor: "#272727", height: "45px" },
                maxBodyHeight: 500,
                searchFieldVariant: 'outlined',
                searchFieldAlignment: "right"
              }}
              localization={{ 
                toolbar: { 
                  searchPlaceholder: 'Search...' 
                },
                pagination: {

                }
              }}
            />
          </MuiThemeProvider>
        </Box>          
      </Box>
    </Box>
  );
};

export default Sessions;
