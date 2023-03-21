import React, { useState } from 'react'

let styles ={
    textDecoration : "underline"
};


const Time = () => {
    
    let [curTime,setTime]=useState("time")
   let setNewTime=()=>{
    let time= new Date().toLocaleTimeString();
       setTime(time);
    }
    
    
  return (
    <> 
       <hr />
      <h1 style={styles}>{curTime}</h1>
      <button onClick={setNewTime}>Get Time</button>
      <hr />
    </>
  );
}

export default Time;
