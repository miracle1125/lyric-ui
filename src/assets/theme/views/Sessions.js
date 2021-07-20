const componentStyles = (theme) => ({
    "@global tbody tr:nth-child(odd)": {
      background: "#212121",
      height: "70px"
    },
    "@global tbody tr:nth-child(even)": {
      background: "#323232",
      height: "50px",
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