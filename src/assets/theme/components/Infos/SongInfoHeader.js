const componentStyles = (theme) => ({
    playBtn: {
      outline: "none",
      borderRadius: "50%",
      border: "none",
      width: "36px",
      height: "36px",
      background: "#9575CD",
      cursor: "pointer",
      display: "flex",
      justifyContet: "center",
      alignItems: "center"
    },
    playIcon: {
      color: theme.palette.white.main,
      height: "22px",
      width: "22px",
      lineHeight: "100%",
    },
    selectIcon: {
      width: "20px",
      height: "20px"
    },
  });
  
  export default componentStyles;