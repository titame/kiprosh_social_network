import React from 'react';


class HeroContainer extends React.Component {
 render() {
  const { backgroundImage } = this.props;
  return (
    <section className="heroimage" style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "url('')"
    }}>
    <section className="herowrapper">
      <div className="heroimage__content">
         <h3 className="hero__header">Awesome Event</h3>
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
      </div>
    </section>
   </section>
  )
 }
}

export default HeroContainer;