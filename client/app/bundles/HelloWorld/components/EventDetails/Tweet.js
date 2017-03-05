import React, { Component } from 'react';


class Tweet extends Component {
  render(){
   const { post } = this.props;
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
           {post.content}
       </section>
     </section>
   )
  }
}

export default Tweet