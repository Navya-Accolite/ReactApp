import React, { Component } from "react";

import AuthContext from "./Auth";

export default class MainScreen extends Component {
  static contextType = AuthContext;


  render() {
    const { isAuthenticated, userName, handleLogout } = this.context;
    return (
      <div className="mainScreenBg">
        {isAuthenticated && (
          <div className="gridcontainer">
            
            <div className="griditem">
              <h4 className="poem">How Long?</h4>
                <h5>How long am I going to fake my smile? {'\n'}
                    How long am I going to play dumb? {'\n'}
                    How long can I cover my scars? {'\n'}
                    How long am I going to hide behind the mask? {'\n'}
                    How long... {'\n'}
                    You know my bright side, But have you ever thought of listening to my part of story? {'\n'}
                    Will you ever listen to it?{'\n'}
                 </h5>
            </div>

            <div className="griditem">
              <h4 className="poem">Cookies</h4>
                <h5>How long am I going to fake my smile? {'\n'}
                    How long am I going to play dumb? {'\n'}
                    How long can I cover my scars? {'\n'}
                    How long am I going to hide behind the mask? {'\n'}
                    How long... {'\n'}
                    You know my bright side, But have you ever thought of listening to my part of story? {'\n'}
                    Will you ever listen to it?{'\n'}
                 </h5>
            </div>

            <div className="griditem">
              <h4 className="poem">Random</h4>
                <h5>Major changes have recently occured in my life, both personally and professionally. We're approaching five years since the inception of this blog, and going back to read the posts from May '04 is quite the experience. I suppose its what diaries and journals are for, the chance to go back and read out your thoughts and ideas from another time. 
                  Kind of like mental time travel.
                 </h5>
            </div>
           
          </div>
        )}
      </div>
    );
  }
}
