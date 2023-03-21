// component to diplay a digital clock

import React, { useState } from 'react'
let styles ={
    textDecoration : "underline"
};





const DigitalClock = () => {
   
    let time= new Date().toLocaleTimeString();
    let [currentTime, setTime]=useState(time);
    let updateTime=()=>{
        setTime(new Date().toLocaleTimeString());
    }
   setInterval(updateTime, 1000);//setinterval is used to call the updateTime funcn after every second
  return (
    <>
      <h1 style={styles}>Digital clock</h1>
      <h1>{currentTime}</h1>
      <hr />
    </>
  );
}

export default DigitalClock;
