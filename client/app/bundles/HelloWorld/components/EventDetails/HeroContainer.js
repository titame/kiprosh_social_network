import React from 'react';


class HeroContainer extends React.Component {
    render() {
        return (
          <section className="heroimage" style={{
              backgroundImage:"url('https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&crop=faces&fit=crop&w=300&h=300')"
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