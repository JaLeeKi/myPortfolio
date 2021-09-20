import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import LandingPage from "./views/LandingPage";
import ContactMe from "./views/ContactMe";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <LandingPage />
          <Footer />
        </Route>
        <Route exact path="/contact">
          <ContactMe />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}
