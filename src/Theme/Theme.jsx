import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      yellow: "#FBD062",
      green: "#7AB259",
      green2: "#A7D18E",
      headline: "#333332",
      para: "#626262",
      back: "rgba(122, 178, 89, 0.15)"
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
