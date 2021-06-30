import React from "react";
import "./nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Tooltip from "react-bootstrap/Tooltip";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as ReactBootStrap from "react-bootstrap";

import Home from "../home/home";
import Hackathon from "../hackathon/hackathon";
import HtmlCssJs from "../htmlcssjs/htmlcssjs";
import ReactVersion from "../react/react";

function Nav() {
  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     Home
  //   </Tooltip>
  // );

  return (
    <Router>
      <div>
        <ReactBootStrap.Navbar
          className="navbar"
          collapseOnSelect
          expand="sm"
          bg="danger"
          variant="light"
        >
          {/* <p>🌑📜✂️</p> */}
          <Link to="/">
            {/* <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            > */}
            <ReactBootStrap.Navbar.Brand className="navbar-brand">
              Evolution of RPS
            </ReactBootStrap.Navbar.Brand>
            {/* </OverlayTrigger> */}
          </Link>

          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto navbar-nav">
              <Link to="/hackathon">
                <ReactBootStrap.Nav.Link className="nav-link" href="/hackathon">
                  Hackathon
                </ReactBootStrap.Nav.Link>
              </Link>
              {/* &nbsp; */}
              <Link to="/htmlcssjs">
                <ReactBootStrap.Nav.Link className="nav-link" href="/htmlcssjs">
                  HTML CSS JS
                </ReactBootStrap.Nav.Link>
              </Link>
              {/* &nbsp; */}
              <Link to="/react">
                <ReactBootStrap.Nav.Link className="nav-link" href="/react">
                  React
                </ReactBootStrap.Nav.Link>
              </Link>
            </ReactBootStrap.Nav>{" "}
          </ReactBootStrap.Navbar.Collapse>
          <p>🌑📜✂️</p>
        </ReactBootStrap.Navbar>
        <Switch>
          <Route path="/react">
            <ReactVersion />
          </Route>
          <Route path="/htmlcssjs">
            <HtmlCssJs />
          </Route>
          <Route path="/hackathon">
            <Hackathon />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Nav;
