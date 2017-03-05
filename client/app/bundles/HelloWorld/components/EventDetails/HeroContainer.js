import React from 'react';


class HeroContainer extends React.Component {
 render() {
  const { backgroundImage, events } = this.props;
  return (
    <section className="heroimage" style={{
        backgroundImage: `url(${events.background_image_url})`
    }}>
    <section className="herowrapper">
      <div className="heroimage__content">
         <h3 className="hero__header"> {events.name }</h3>
          <div className="hero_date_container">
              <div className="hero__date start__date">
                  <p>Start</p>
                  <p> 13- August </p>
              </div>
              <div className="hero__date stop__date">
                  <p>End</p>
                  <p> 13- August </p>
              </div>
          </div>
          <div style={{
              marginTop:'1rem'
          }} className="center-block text-center">
              {events.description}
          </div>
      </div>
    </section>
   </section>
  )
 }
}

export default HeroContainer;