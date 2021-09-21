import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import LandingPage from "./views/LandingPage";
import ContactMe from "./views/ContactMe";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <LandingPage />
          <Footer />
        </Route>
        <Route exact path="/contact">
          <ContactMe
            name={name}
            setName={setName}
            contact={contact}
            setContact={setContact}
            message={message}
            setMessage={setMessage}
          />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}
