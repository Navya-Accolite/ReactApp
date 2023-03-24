import React, { Component } from "react";
import Login from "./Login";
import MainScreen from "./MainScreen";
import { Auth } from "./Auth";

export default class Home extends Component {
  render() {
    return (
      <div className="homeBg">

            <Login/>
            <MainScreen/>
       
        
      </div>
    );
  }
}
