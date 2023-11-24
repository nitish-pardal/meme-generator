import React from "react";
import  ReactDOM  from "react";
import data from "./memesdata.jsx"
export default function Main(){

  const [memeImage,setMemeImage]= React.useState("");
  const ImageArray=data.data.memes;
  const length =ImageArray.length;
  function handleClick(){
    const randomNumber =Math.floor(Math.random()*length);
    setMemeImage(ImageArray[randomNumber].url);
  }

  return (
    <div className="input-container">
      <input  className="text-container" type="text" placeholder="first-name"/>
      <input className="text-container"  type="text" placeholder="last-name"/>
      <button className="meme-button" onClick={handleClick}>Get a new meme image  🖼</button>
      <img src= {memeImage} alt="random-meme-image" className="meme--image"/>
    </div>
  )
}