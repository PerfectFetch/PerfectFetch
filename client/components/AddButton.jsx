// comments made by GARETH L.

import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props){
    super(props);
  }


  render(){
    // the onKeyUp function captures the user's input. this is then passed as the argument to getUserLocation
    // this is how the user input (i.e. the message they want to say about their project, which displays in the InfoWindow) is passed up and saved into the state object
    let userInfo = '';
    return(
      <div>
          <input className={'addButtonInput'} type="text" name="projectInfo" placeholder={"What are you working on?"} onKeyUp={
            (e)=>{
              userInfo = e.target.value;
              console.log(userInfo); 
              console.log(e.target.value);
            }
            } />
          <button className={'addButtonInput'} onClick={()=>{
            this.props.getUserLocation(userInfo);

            }}>
              ADD
            </button>
      </div>
    );

  }
}


export default AddButton;