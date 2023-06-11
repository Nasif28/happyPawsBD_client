import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      yellow: "#FBD062",
      green: "#7AB259",
      headline: "#333332",
      para: "#404040"
    },
  },

  // components: {
  //   MuiContainer: {
  //     defultProps: {
  //       maxWidth: "lg",
  //     },
  //   },

//     MuiButton: {
//       styleOverrides: {
//         root: {
//           fontSize: "1rem",
//           padding: "0.6rem 2.5rem",
//         },
//       },

//       defaultProps: {
//         varient: "contained",
//         color: "primary",
//       },
//     },
  // }
});
