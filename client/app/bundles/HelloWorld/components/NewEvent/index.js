import React, { Component } from 'react';
import { Button } from 'antd';
import bindFunctions from '../UtilityMethod';


import { VelocityTransitionGroup } from 'velocity-react'

import './newEventCaleder.css';
import Form from './Form'

class NewEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderSubComponent:false
    };
    bindFunctions.call(this, ['updateSubComponentRender']);
  }

  updateSubComponentRender(){
   this.setState((prevState) => {
     return {
       renderSubComponent: !prevState.renderSubComponent
     }
   })
  }


  render(){
  	return (
     <div style={{ border: '1px solid #d9d9d9', borderRadius: 4 }}>
       <Button onClick={this.updateSubComponentRender}>New Event</Button>
       <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
           {this.state.renderSubComponent ? <Form updateSubComponentRender={this.updateSubComponentRender}/> : undefined}
       </VelocityTransitionGroup>
     </div>
  	)
  }
}

export default NewEvent;