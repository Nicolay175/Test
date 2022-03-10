
import React from "react";
import {BrowserRouter} from "react-router-dom";
import HeaderBar from "./components/UI/header/HeaderBar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/footer/Footer";
import {ThemeProvider} from "@mui/material";
import theme from "./Theme";

function App() {

  return (
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <HeaderBar/>
              <AppRouter/>
              <Footer/>
          </ThemeProvider>
      </BrowserRouter>
);
}

export default App;
