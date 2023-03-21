import React, { useState } from 'react'

const Loginform = () => {
    const [fullName,setName]=useState({
      fName:"",
      lName:""
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
      alert("form submitted")

    }
  return (<>
    <div>
      <h1>Loginform</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" 
      
       />
      <button>submit</button>
    
      </form>
      <hr />
    </div>
    </>
  )
}
export default Loginform;
