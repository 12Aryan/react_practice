import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
     <Link to="/">Home</Link>
     <br />
     <Link to ="Counter">Counter</Link>
     <br />
     <Link to ="Digitalclock">Digitalclock</Link>
     <br />
     <Link to ="Time">Time</Link>
     <br />
     <Link to ="Event">Event</Link>
     <br />
     <Link to ="Forms">Forms</Link>
     <br />
     <Link to = "Loginform">Loginform</Link>
     <br />
     <Link to = "Navbar">Navbar</Link>
    
    </div>
  )
}

export default Home;
