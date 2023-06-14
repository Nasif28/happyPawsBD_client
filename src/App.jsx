import "./App.css";
import Header from "./Components/Header/Header";
// import Header_2 from "./Components/Header/Header_2";
// import Header_3 from "./Components/Header/Header_3";
import Footer from "./Components/Footer/Footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Theme/Theme";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {/* <Header_2 /> */}
        {/* <Header_3 /> */}
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
