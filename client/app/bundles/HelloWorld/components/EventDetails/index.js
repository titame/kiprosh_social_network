import React, {  Component } from 'react';
import HeroContainer from './HeroContainer';
import Gallery from './Gallery';

import Modal from 'react-modal';

import './EventsDetail.css';
const customStyle = {
    content : {
        top : '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width:'80%',
        height:'75%',
        marginRight: '-50%',
        transform:'translate(-50%, -50%)',
        padding:'0',
        overflowX:'hidden'
    },
    overlay : {
        backgroundColor: 'rgba(211, 211, 211, 0.74902)'
    }
};


class EventDetails extends Component {
 constructor(props){
   super(props);
   this.state = {
     images:[{ src:'http://lorempixel.com/400/200/sports/1'} ,{ src:'http://lorempixel.com/400/200/sports/2'} ],
     isModalOpen:false
   };
   this.closeModal = this.closeModal.bind(this);
 }
 closeModal(){
   this.setState({
     isModalOpen:false
   })
 }


 componentWillMount() {
   Modal.setAppElement('body');
 }

 render(){
  const {
    images,
    isModalOpen
  } = this.state;
   return (
     <section>
       <HeroContainer />
       <Gallery images={images} />
         <div onClick={() => {
             this.setState({
                 isModalOpen:true
             })
         }}>Show Modal</div>
       <Modal
          isOpen={isModalOpen}
          onAfterOpen={() => {}}
          onRequestClose={this.closeModal}
          closeTimeoutMS={100}
          style={customStyle}
          contentLabel="Modal"
        >
           This is Modal
           <button onClick={() => {
               this.setState({
                   isModalOpen:false
               })
           }}>Close</button>
       </Modal>
     </section>
   )
 }
}

export default EventDetails
