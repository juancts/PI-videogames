import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Detail, Form, About } from "./views";
import { NavBar } from "./components";

function App() {
  let location = useLocation();
  console.log(location);

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}

      {/* Varias formas de utilizar router dom 
      con component no puedo pasar props entonces utilizo render
      */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/about" component={About} />
      <Route path="/home" render={() => <Home />} />
    </div>
  );
}

export default App;
