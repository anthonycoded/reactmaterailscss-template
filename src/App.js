import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/UI/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/UI/Footer";
import Login from "./components/auth/Login";
import Theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <Router>
          <Header className="display-block"></Header>
          <Switch>
            <Route path="/" exact>
              <LandingPage></LandingPage>
            </Route>
            <Route path="/admin" exact component={Admin}></Route>
            <Route path="/login" exact component={Login}></Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
