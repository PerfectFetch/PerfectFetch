import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props){
    super(props);
  }


  render(){
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