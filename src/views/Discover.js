import React from "react"

import "../css/Page.css"
import "../css/Text.css"

class Diseases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null
    }
  }

  render() {
    return (
      <div className="dark-back">
        <div className="container formPad raleWay white">
          <h1 id="letter-spacing" className="white" style={{paddingBottom: '35px'}}>DISCOVER</h1>

        </div>
      </div>
    );
  }
}

export default Diseases;