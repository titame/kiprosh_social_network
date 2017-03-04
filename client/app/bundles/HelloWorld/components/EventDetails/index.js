import React, {  Component } from 'react';

import HeroContainer from './HeroContainer';
import Gallery from './Gallery';
import PicturesWall from './PicturesWall';


import './EventsDetail.css';
import './PicturesWall.css';
import './antd.min.css';


class EventDetails extends Component {
 constructor(props){
   super(props);
   this.state = {
     images:[{ src:'http://lorempixel.com/400/200/sports/1'} ,{ src:'http://lorempixel.com/400/200/sports/2'} ]
   };
 }

 render(){
   return (
     <section>
       <HeroContainer />
        <button onClick={() => {
            this.setState({
                lightboxIsOpen:true
            })
        }}>
            Show Image
        </button>
       <Gallery
          images={this.state.images}
        />
       <PicturesWall/>
     </section>
   )
 }
}

export default EventDetails
