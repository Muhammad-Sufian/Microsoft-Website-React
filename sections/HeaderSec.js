import React from "react";
import "../App.css";

class HeaderSec extends React.Component {
    state = {
        sideBarwid: "0px",
    };

  render() {

    var openSideBarFunction = () =>{
        this.setState({sideBarwid:"250px"});
    }

    var closeSideBarFunction =() => {
       this.setState({sideBarwid:"0px"});
    }

    return (
      <div className="HeaderSec">
        <img src="https://i.ibb.co/wwLhz98/logo.png" width="120px"/>
        <div className="mainnav">
            <a href="#" className="mainnavItems">Office</a>
            <a href="#" className="mainnavItems">Windows</a>
            <a href="#" className="mainnavItems">Surface</a>
            <a href="#" className="mainnavItems">Xbox</a>
            <a href="#" className="mainnavItems">Deals</a>
            <a href="#" className="mainnavItems">Support</a>
        </div>
        <button className="SideNav" onClick={openSideBarFunction}>&#9776;</button>
        <div id="abc" className="sideBarMenuClass" style={{width:this.state.sideBarwid, overflowX:'hidden'}}>
        {/*<div id="abc" className="sideBarMenuClass" style={{width:"10px"}}>*/}
            <button id="123" onClick={closeSideBarFunction} style={{color: 'white', padding: "6px 20px", backgroundColor: '#505050', position: 'absolute', top: '5px', right: '5px', cursor:'pointer'}}>X</button>
            <a href="default">Home</a>
            <a href="news.asp">News</a>
            <a href="contact.asp">Contact</a>
            <a href="about.asp">About</a>
	    </div>
      </div>
    );
  }
}

export default HeaderSec;
