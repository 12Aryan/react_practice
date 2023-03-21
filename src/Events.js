
import React, { useState } from 'react';

let styles ={
    textDecoration : "underline"
};
let click=0; 

 const Events=()=>{
  let [bg,setBg]= useState("crimson");//hooks
  let [text,setText]= useState("change color");

  const bgChange=()=>{
    click=click+1;
    click%2===0?setBg((prevState) => "purple"):setBg((prevState) => "yellow");
    click%2===0?setText((prevState) => "Yellow"):setText((prevState) => "purple"); 
     console.log("clicked");  
     
     //  let [bg,setBg]=useState();
      //  click=click+1;
      //  
      
  }

  return(<>
    <div style={{backgroundColor: bg}}>
    <h1 style={styles}>Events</h1>
    <button onClick={bgChange}>{text}</button> 
    <hr />
    </div>
    </>)
 } 
 export default Events;