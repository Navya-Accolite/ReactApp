
import React, { Component } from "react";

import AuthContext, { Auth } from "./Auth";
import Login from "./Login";
import Todo from "./Todo";

export default class Task extends Component {
  static contextType = AuthContext;



  render() {
    const { isAuthenticated, userName, handleLogout } = this.context;
    
    return (
      <div className="contactBg">

        {isAuthenticated? <Todo/> : <Login/>}
      
         
       
       

      </div>
    );
  }
}
