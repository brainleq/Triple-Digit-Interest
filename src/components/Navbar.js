import React, {Component} from "react";
import { nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import "../css/Navbar.css"
import "../css/Text.css"

const redColor = "#DD2C06"
const darkColor = "#202020"
const whiteColor = "#FFF"
{/*
const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        color: "rgba(255, 255, 255, .6)",
        '&.Mui-focused': {
          color: redColor
        }
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${whiteColor}`
        },
        "&:after": {
          borderBottom: `1px solid ${redColor}`
        },
        "&:hover": {
          borderBottom: `1px solid ${redColor}`
        }
      }
    },
    MuiInputBase: {
      root: {
        backgroundColor: "#343a40",
        color: whiteColor
      }
    }
  }
});
*/}
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ""
    }
  }

  handleChange = e => {
    this.setState({ search: e.target.value })
  }

  handleKey = e => {
    if (this.state.search.length > 0 && e.keyCode === 13) {
      this.props.history.push('/search/' + this.state.search);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light raleWay">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">NAME??</a>
          </div>
          <ul className="navbar-nav mr-auto">
            <li><a className="nav-link" href="/discover">Discover</a></li>
            <li><a className="nav-link" href="/">Testing</a></li>
            <li><a className="nav-link" href="/">Lorem</a></li>
            <li><a className="nav-link" href="/">Ipsum</a></li>
            <li><a className="nav-link" href="/about">About</a></li>
          </ul>
          {/*<MuiThemeProvider theme={theme} >
            <TextField
              id="outlined-margin-none"
              label="Search"
              margin="none"
              variants="outlined"
              onChange={this.handleChange}
              onKeyDown={this.handleKey}
            />
          </MuiThemeProvider>*/}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
