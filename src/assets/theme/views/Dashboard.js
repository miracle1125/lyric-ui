const componentStyles = (theme) => ({
    mainContent: {
      backgroundColor: "black",
    },
    cardGroup: {
      "@media (max-width: 768px)": {
        display: "block",
      },
    },
    widthMobile: {
      "@media (max-width: 768px)": {
        width: "100%",
      },
    }
  });
  
  export default componentStyles;