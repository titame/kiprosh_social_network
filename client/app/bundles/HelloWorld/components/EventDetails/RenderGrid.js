import React, { Component } from 'react';


class RenderGrid extends Component {
  render(){
    return (
      <section className="album__thumbnail clearfix">
      {
         this.props.images.map((image, index) => {
           return  <img key={index} className="img-responsive" src={image.src} />
         })
       }
       <section style={{
         textAlign:'center'
       }}>
         <button className="album__btn">View More Photos</button>
       </section>

      </section>
    )
  }
}

export default RenderGrid;