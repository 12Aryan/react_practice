import React from 'react';
import Home from './Home';
import Time from "./Time";
import Counter from './Counter';
import DigitalClock from './DigitalClock';
import Events from './Events';
import Forms from './Forms';
import Loginform from './Loginform';
import Navbar from './Navbar';
import { BrowserRouter, Routes,Route} from 'react-router-dom';





const App = () => {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/Counter' element={<Counter/>}/>
    <Route path='/Time' element={<Time/>}/>
    <Route path='/Digitalclock' element={<DigitalClock/>}/>
    <Route path='/Event' element={<Events/>}/>
    <Route path='/Forms' element={<Forms/>}/>
    <Route path='/Loginform' element={<Loginform/>}/>
    <Route path='/Navbar' element ={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
    
      
     
    </>
  );
}





export default App;