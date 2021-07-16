const componentStyles = (theme) => ({
    authContentContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        paddingLeft: "100px",
        paddingRight: "150px"
    },
    registerTitle: {
        fontSize: "25px",
        fontWeight: "700",
        marginBottom: "13px"
    },
    registerDescription: {
        fontSize: "17px",
        fontWeight: "400",
        color: "#B0B0B0",
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
        marginBottom: "8px"
    },
    authQuestion: {
        color: "#CBCBCB",
        marginTop: "2.5rem"
    },
    authBtn: {
        color: "#9575CD",
        fontWeight: "700",
        cursor: "pointer",
    },
    forgotPassword: {
        textAlign: "right",
        color: "#9575CD",
        cursor: "pointer",
        marginTop: ".625rem",
        marginBottom: "1.125rem"
    },
    authLink: {
        textDecoration: "none",
    }
  });
  
  export default componentStyles;