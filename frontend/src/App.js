import React from "react";
import {BrowserRouter} from "react-router-dom";
import HeaderBar from "./components/UI/header/HeaderBar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/footer/Footer";


function App() {
  return (
      <BrowserRouter>
          <HeaderBar/>
          <AppRouter/>
          <Footer/>
      </BrowserRouter>
);
}

export default App;
