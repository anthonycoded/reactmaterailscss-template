import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import LandingPage from "./pages/LandingPage";

import Theme from "./config/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <Router>
          <Header className="display-block"></Header>
          <Routes>
            <Route path="/" exact element={LandingPage}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
