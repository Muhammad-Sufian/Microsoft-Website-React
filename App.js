import React from "react";
import "./App.css";
import HeaderSec from "./sections/HeaderSec";
import BodySec from "./sections/BodySec";
import FooterSec from "./sections/FooterSec";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderSec/>
        <BodySec/>
        <FooterSec/>
      </div>
    );
  }
}

export default App;
