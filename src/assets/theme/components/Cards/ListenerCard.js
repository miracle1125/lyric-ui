const componentStyles = (theme) => ({
    bgSecondary: {
        backgroundColor: theme.palette.secondary.main,
    },
    verticalAlign: {
        verticalAlign: "middle",
    },
    bgSecondaryLight: {
        backgroundColor: theme.palette.secondary.light,
    },
    listenAmount: {
        marginTop: "9px",
        marginBottom: "11px",
    },
    increaseListener: {
        backgroundColor: "rgba(76, 175, 80, 0.29)",
        color: "#4CAF50",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
    },
    prMobile: {
        "@media (max-width: 410px)": {
            paddingRight: "0px",
        },
    }
  });
  
  export default componentStyles;