import React, { Component } from 'react';
import { Button } from 'antd';
import bindFunctions from '../UtilityMethod';


import { VelocityTransitionGroup } from 'velocity-react'

import './newEventCaleder.css';
import EventForm from './EventForm'

class NewEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderSubComponent:false
    };
    bindFunctions.call(this, ['updateSubComponentRender', 'logOut']);
  }

  updateSubComponentRender(){
   if(!this.state.renderSubComponent) {
    $(".new-event-form-container").css({opacity: 1, backgrounColor: '#fff'})
   } else {
    $(".new-event-form-container").css({opacity: 0.7, backgrounColor: 'rgb(150, 146, 136)'})
   }
   this.setState((prevState) => {
     return {
       renderSubComponent: !prevState.renderSubComponent
     }
   })
  }

  logOut(){
    $.post('/logout', function(data) {
        window.location.href = '/login'
    })
  }

  render(){
  	return (
     <div className="new-event-form-container" style={{ backgroundColor: '#d9d9d9',
       position: 'fixed', width: '100%', opacity: 0.7, zIndex: 2 }}>
       <Button style={{ float: 'right', fontWeight: 800 }} onClick={this.updateSubComponentRender}>New Event</Button>
       <Button style={{ float: 'right', fontWeight: 800 }} onClick={this.logOut}>Logout</Button>
       <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
           {this.state.renderSubComponent ? <EventForm updateSubComponentRender={this.updateSubComponentRender} event_types={this.props.event_types}/> : undefined}
       </VelocityTransitionGroup>
     </div>
  	)
  }
}

export default NewEvent;
