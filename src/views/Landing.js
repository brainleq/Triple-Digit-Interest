import React from 'react';

import '../css/Page.css';
import '../css/Text.css';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="dark-back">
        <div className="content-center raleWay">
          <div className="title-brand white">
            <h1 style={{fontSize: "4rem"}} className="presentation-title" id="letter-spacing">
              Triple-Digit Interest
            </h1>
          </div>
          <h4 style={{padding: "20px"}} className="presentation-subtitle text-center white">
            Lorem ispsum skdugbnsongosdngoserngoisuwe
          </h4>
          <form action="/">
            <button type="submit" className="btn btn-outline-danger btn-lg">Begin Search</button>
          </form>
        </div>
      </div>
    );
  }
}
