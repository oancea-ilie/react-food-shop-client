import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css"
import Header from "./Compoments/Header";
import Home from "./Compoments/Home";
import Categories from "./Compoments/Categories";

export default ()=>{

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path = "/"><Home/></Route>
        <Route exact path = "/categories"><Categories/></Route>
      </Switch>
    </Router>
  )
}

