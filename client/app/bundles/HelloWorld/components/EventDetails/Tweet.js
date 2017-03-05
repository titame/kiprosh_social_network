import React, { Component } from 'react';


class Tweet extends Component {
  render(){
   return (
     <section className="avatar clearfix">
         <div className="image__header">
           <section className="image__avatar">
               <img src="http://lorempixel.com/100/100/sports/5" alt=""/>
           </section>
         </div>
       <section className="image__content clearfix">
           <section className="image__heading">
               Shoaib Bhimani
           </section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, cupiditate enim eum exercitationem, facere fugit laudantium minima non nostrum, ratione rerum sequi sint voluptates! Est facere ipsum maxime rem sequi?
       </section>
     </section>
   )
  }
}

export default Tweet