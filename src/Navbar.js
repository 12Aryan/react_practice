import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (<>
    <div>
      Navbar
      <ul>
      <li>Counter</li>
      <li>Time</li>
      <li>DigitalCLock</li>
      <li>Events</li>
      <li>Forms</li>
      <li>LoginForm</li>
      </ul>
      <Link to ="/Counter" >counter</Link>
      <Link to ="/Counter" >counter</Link>
      <Link to ="/Counter" >counter</Link>
      <Link to ="/Counter" >counter</Link>
      <Link to ="/Counter" >counter</Link>
      <Link to ="/Counter" >counter</Link>
      <Link to ="/Counter" >counter</Link>
      
    </div>
    </>
  )
}

export default Navbar;
