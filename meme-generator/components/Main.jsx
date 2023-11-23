import React from "react";
import  ReactDOM  from "react";

export default function Main(){
  return (
    <div className="input-container">
      <input  className="text-container" type="text" placeholder="first-name"/>
      <input className="text-container"  type="text" placeholder="last-name"/>
      <button className="meme-button">Get a new meme image  🖼</button>
    </div>
  )
}