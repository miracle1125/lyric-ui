const componentStyles = (theme) => ({
    earnAmount: {
        fontSize: "1.375rem",
        fontWeight: "700",
        paddingTop: "10px",
        paddingLeft: "11px",
    },
    earnTitle: {
        paddingLeft: "11px",
        paddingTop: "12px",
        fontWeight: "500"
    },
    earnCard: {
        backgroundColor: theme.palette.secondary.main,
        "@media (max-width: 1100px)": {
          marginBottom: "1rem"
        },
      },
  });
  
  export default componentStyles;