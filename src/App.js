import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Home from "./components/home/home";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
    </div>
  );
}

export default App;
