import React from "react";
import ReactDom from "react-dom";
// import app from "./App.jsx";

function Heading() {
  var now = new Date();
  var hours = now.getHours();
  var ft = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
  const customStyle = {
    color: ""
  };
  if (hours >= 0 && hours < 12) {
    var name = "Good morning";
    customStyle.color = "red";
  } else if (hours >= 12 && hours < 18) {
    var name = "Good Afternoon";
    customStyle.color = "green";
  } else {
    var name = "Good evening";
    customStyle.color = "blue";
  }
  return <h1 style={customStyle}> {name} </h1>;
}

export default Heading;
// the mistake done by me is in the just above line that is I was using Heading()
