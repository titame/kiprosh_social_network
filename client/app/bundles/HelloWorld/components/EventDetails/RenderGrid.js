import React, { Component } from 'react';


class RenderGrid extends Component {
  renderViewMoreButton() {
    return(
      <section style={{
        textAlign:'center'
      }}>
        <button className="album__btn">View More Photos</button>
      </section>
    );
  }

  render(){
    return (
      <section>
        <section className="album__thumbnail clearfix">
        {
           this.props.images.map((image, index) => {
             return  <img key={index} className="img-responsive" src={image.src} />
           })
         }
        </section>
        {(this.props.images.length > 5) ? this.renderViewMoreButton() : null}
      </section>
    )
  }
}

export default RenderGrid;
