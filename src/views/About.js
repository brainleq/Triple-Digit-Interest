import React from 'react';

import '../css/Text.css';
import '../css/Page.css';
import '../css/About.css';

import Brian from '../images/brian.png';

export default class About extends React.Component {
  render() {
    return (
      <div className="container" style={{position: "relative"}}>
        <div className="container formPad raleWay">
          <h1 id="letter-spacing" style={{paddingBottom: "35px"}}>ABOUT TRIPLE-DIGIT INTEREST</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <h1 id="letter-spacing" style={{paddingBottom: "30px", paddingTop: "35px"}}>MEET THE TEAM</h1>

          {/* Team members */}
          <div className="row">
            <div className="col-md-6 tilePad" style={{paddingLeft: "100px"}}>
            <a href = "https://brianlequang.com">
              <img src={Brian} alt="Brian LeQuang" className="teamPic"/>
            </a>
              <h3>Brian LeQuang</h3>
              <p>
                Frontend
              </p>
              <p>
                I am a machine learning enthusiast, a hobbyist programmer, and a
                 computer science student at the University of Texas at Austin.
                 I worked primarily on the design and construction of the frontend.
              </p>
            </div>

            <div className="col-md-6 tilePad" style={{paddingRight: "100px"}}>
              <a href = "">
                <img src={Brian} alt="Bennett Ramirez" className="teamPic"/>
              </a>
              <h3>Bennett Ramirez</h3>
              <p>
                Backend
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 tilePad">
              <a href = "">
                <img src={Brian} alt="Sebastian Diaz" className="teamPic"/>
              </a>
              <h3>Sebastian Diaz</h3>
              <p>
                Full Stack
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
            <div className="col-md-6 tilePad">
              <img src={Brian} alt="Jonathan Nguyen" className="teamPic"/>
              <h3>Jonathan Nguyen</h3>
              <p>
                Backend
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>

          <a href="https://github.com/brainleq/Triple-Digit-Interest" class="btn btn-info" role="button">GitHub Repository</a>
          <span> </span>
          <a href="" class="btn btn-info" role="button">Postman RESTful API</a>
        </div>
      </div>
    )
  }
}
