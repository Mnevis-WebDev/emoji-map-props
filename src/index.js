import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import emojipedia from "./emojipedia";

//console.log(emojipedia[0].meaning.substring(0, 100));
/* 
const newEmojipedia = [];

emojipedia.map(function (num) {
 newEmojipedia.push(num.meaning.substring(0, 100))
  return "hello"
});
console.log(newEmojipedia); */

ReactDOM.render(<App />, document.getElementById("root"));
