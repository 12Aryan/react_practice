import React, { useState } from 'react';
import Home from './Home';

const Forms = () => {
    let newFirstName, newLastName;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

  
     ////////////////////for First Name////////////
     const handleFName = (event) => {
        newFirstName = event.target.value;

    }
    // const submitFirstNameWithEnter=(event)=>{
    //     if(event.key==="Enter")
    //   setFirstName(newFirstName);

    // }
   
    //////////////////for Lasr Name///////////////
    const handleLName=(event)=>{
        newLastName=event.target.value;
       
        
    }
     /////////sset first name and last name
     const handleSubmit = (event) => {
        event.preventDefault();//using preventDefault() to prevent the default Refresh behaviour of form
        setFirstName(newFirstName);
        setLastName(newLastName);
         
     }

    return (
       // using onSubmit to submit the text
       //handleSubmit function is used to set the value after submit
        <form onSubmit={handleSubmit}>
      
        <div>
             <Home/>
            <h1>Forms</h1>
            
            <input type="text"
                placeholder='FirstName'
                onChange={handleFName}//handleFName is used to get the value from input field
                // onKeyDown={submitFirstNameWithEnter}//hadndleText is used to display the text after pressing enter
                value={newFirstName}
            />
            <br />
            <input type="text" 
            placeholder='LastName'
           onChange={handleLName}
           value={newLastName}

            />
            <h3>hedo</h3>  
            <h3>{firstName} {lastName}</h3>
            <button>+</button>
            <hr />
        </div>
        </form>
    )
}

export default Forms;
