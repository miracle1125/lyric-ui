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
    genreSelect: {
      height: "32px",
      backgroundColor: theme.palette.secondary.light,
      borderRadius: "4px"
    },
    popupIndicator: {
      "& span": {
        "& svg": {
          fill: "#fff",
          "& path": {
            d: "path('M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z')"
          }
        }
      }
    }
  });
  
  export default componentStyles;