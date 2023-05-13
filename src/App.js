import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    /*setTimeout(() => {
      setAlert(null);
    }, 1500)*/
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      //document.body.style.backgroundColor = "#042743";
      //showAlert("Dark mode has been enabled", "success");
      toast.dark("✅ Dark Mode Has Been Enabled")
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      //ocument.body.style.backgroundColor = "white";
      //showAlert("Light mode has been enabled", "success");
      toast.dark("✅ Light Mode Has Been Enabled")
      document.body.style.backgroundColor = "white";
    }
    //toast.dark("Light mode has been enabled");
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextWizard"
          mode={mode}
          toggleMode={toggleMode}
          key={new Date()}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading ="Text Wizard - Text Manipulation Tools"
                heading1="   Welcome to TextWizard! Simple, Single Task, Browser Based, Text Manipulation Tools"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
