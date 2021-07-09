const componentStyles = (theme) => ({
    uploadBtn: {
      backgroundColor: "#fff",
      padding: ".375rem 1.125rem",
      fontWeight: "400",
      lineHeight: "1",
      color: "#8D6DC8"
    },
    logoText: {
      fontWeight: "600",
      fontSize: "1.375rem"
    },
    logoClasses: {
      maxHeight: "2rem",
      maxWidth: "100%",
      verticalAlign: "middle",
      borderStyle: "none",
      [theme.breakpoints.up("md")]: {
        maxHeight: "2.5rem",
      },
    },
    logoLinkClasses: {
      fontSize: "1.25rem",
      lineHeight: "inherit",
      whiteSpace: "nowrap",
      textDecoration: "none",
      display: "block",
      textAlign: "center",
    },
    avatarImg: {
      verticalAlign: "middle",
      borderRadius: "50%",
    },
    verticalAlign: {
      verticalAlign: "middle",
    },
    cardRoot: {
      marginBottom: "1.5rem",
      [theme.breakpoints.up("xl")]: {
        marginBottom: 0,
      },
    },
    cardContentRoot: {
      padding: "1rem 1.5rem !important",
    },
    textUppercase: {
      textTransform: "uppercase",
    },
    bgPrimary: {
      backgroundColor: theme.palette.primary.main,
    },
    bgPrimaryLight: {
      backgroundColor: theme.palette.primary.light,
    },
    bgError: {
      backgroundColor: theme.palette.error.main,
    },
    bgErrorLight: {
      backgroundColor: theme.palette.error.light,
    },
    bgWarning: {
      backgroundColor: theme.palette.warning.main,
    },
    bgWarningLight: {
      backgroundColor: theme.palette.warning.light,
    },
    bgInfo: {
      backgroundColor: theme.palette.info.main,
    },
    bgInfoLight: {
      backgroundColor: theme.palette.info.light,
    },
  });
  
  export default componentStyles;