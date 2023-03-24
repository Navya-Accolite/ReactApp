import React, { Component } from "react";
import AuthContext from "./Auth";
import "./loginstyles.css";

export default class Login extends Component {
  static contextType = AuthContext;
  render() {
    const {
      isAuthenticated,
      userName,
      userPwd,
      hanldeLogin,
      updatePwd,
      updateUserName
    } = this.context;
    console.log("context::", this.context);
    return (
      <div
        className="loginLayout"
        style={{ display: isAuthenticated ? "none" : "flex" }}
      >
        <div  style={{paddingLeft:35}}>
          <div style={{color: "red",padding:"20px"}}><center>Please Login First!</center></div>
            
          
          <label>User Name</label>
          <input
            onChange={(e) => updateUserName(e.target.value)}
            type="text"
            value={userName}
            placeholder={userName === "" ? "Please enter your name" : ""}
          />
        </div>
        <div style={{ marginTop: 20 , paddingLeft:40}}>
          <label>Password</label>
          <input
            onChange={(e) => updatePwd(e.target.value)}
            type="password"
            value={userPwd}
            style={{ marginLeft: 15 }}
            placeholder={userPwd === "" ? "Please enter your password" : ""}
          />
        </div>
        <div className="loinBtn">
          <button onClick={() => hanldeLogin()}>Login</button>
        </div>
      </div>
    );
  }
}
