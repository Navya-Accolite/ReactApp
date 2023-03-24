
import React, { Component } from "react";

import AuthContext, { Auth } from "./Auth";
import Login from "./Login";

export default class Task extends Component {
  static contextType = AuthContext;



  render() {
    const { isAuthenticated, userName, handleLogout } = this.context;
    return (
      <div className="profileBg">


{isAuthenticated
        ?  <div>
            
        <div>
          <h4 style={{color:"Red",paddingBottom:"40px"}}>Hello! {userName}</h4>
          <h4 style={{paddingBottom:"30px"}}>
            This is your profile page.<br/>
            You can safely logout here!
          </h4>
        </div>
        <div>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      </div>
        : <Login/>
      }
        
         
       
       

      </div>
    );
  }
}
