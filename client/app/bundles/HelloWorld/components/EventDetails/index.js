import React, {  Component } from 'react';
import Modal from 'react-modal';


//Custom
import HeroContainer from './HeroContainer';
import Gallery from './Gallery';

import PicturesWall from './PicturesWall';
import Tweet from './Tweet'
import './EventsDetail.css';
import './PicturesWall.css';
import './antd.min.css';

// Theme for SLider
const theme = {
    // container
    container: { background: 'rgba(255, 255, 255, 0.9)' },

    // arrows
    arrow: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        fill: '#222',
        opacity: 0.6,
        transition: 'opacity 200ms',

        ':hover': {
            opacity: 1,
        },
    },
    arrow__size__medium: {
        borderRadius: 40,
        height: 40,
        marginTop: -20,

        '@media (min-width: 768px)': {
            height: 70,
            padding: 15,
        },
    },
    arrow__direction__left: { marginLeft: 10 },
    arrow__direction__right: { marginRight: 10 },

    // header
    close: {
        fill: '#D40000',
        opacity: 0.6,
        transition: 'all 200ms',

        ':hover': {
            opacity: 1,
        },
    },

    // footer
    footer: {
        color: 'black',
    },
    footerCount: {
        color: 'rgba(0, 0, 0, 0.6)',
    },

    // thumbnails
    thumbnail: {
    },
    thumbnail__active: {
        boxShadow: '0 0 0 2px #00D8FF',
    },
};

// Css For Modal

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
     images:[{ src:'http://lorempixel.com/400/400/sports/1'} ,{ src:'http://lorempixel.com/400/400/sports/2'},{ src:'http://lorempixel.com/400/400/sports/3'},{ src:'http://lorempixel.com/400/400/sports/1'} ],
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
       <HeroContainer
           backgroundImage={'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&crop=faces&fit=crop&w=300&h=300'}
       />

       <section className="gallery__container clearfix">
         <h4 className="album__heading">Album</h4>
         <section className="gallery__item">
            <Gallery
              images={images}
              showThumbnails={true}
              theme={theme}
            />
         </section>
         <section className="gallery__item">
           <Gallery
               images={images}
               showThumbnails={true}
               theme={theme}
           />
         </section>
       </section>

       <div onClick={() => {
         this.setState({
           isModalOpen:true
         })
       }}>
         Show Modal
       </div>
        <section  className="container">
           <section style={{'width': '100%'}} className="col-md-8 col-md-2-offset">
             <Tweet  />
             <Tweet  />
             <Tweet  />
             <Tweet  />
             <Tweet  />
             <Tweet  />
             <Tweet  />
             <Tweet  />
             <Tweet  />
           </section>
         </section>
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
       <PicturesWall/>
     </section>
   )
 }
}

export default EventDetails
