import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Login from './Login';
import UserRecord from './UserRecord';

function App(){
  return(
  <BrowserRouter>
  <Nav />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login /> } />
    <Route path="/userrecord/:id" element={<UserRecord /> } />

   </Routes>
   <div className='mt-5'>
    <h3>Footer</h3>
   </div>
  </BrowserRouter>
  )
}

export default App;