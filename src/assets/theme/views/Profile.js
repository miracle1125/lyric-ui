const componentStyles = (theme) => ({
    avatarImg: {
      verticalAlign: "middle",
      borderRadius: "50%",
    },
    profileContent: {
      textAlign: "center",
      width: "100%",
    },
    profileAvatar: {
      width: "128px",
      height: "128px",
    },
    authInput: {
      width: "100%",
      backgroundColor: "#000",
      border: "1px solid #605E5E",
      fontSize: "1rem",
      padding: "1rem",
      color: "white",
      fontFamily: "inter",
    },
    authInputLabel: {
      color: "#DEDEDE",
      fontSize: "18px",
      fontWeight: "400",
      marginBottom: "8px",
      textAlign: "left",
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