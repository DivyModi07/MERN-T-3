import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nopage from './Nopage'
import Props from './Props'
import Profile from './Profile'
import Timer from './Timer'
import Setting from'./Setting'
import Product from './Product'
// import './App.css'
function Main(){
    return (
        <>
            <Router>
                <div  style={{backgroundColor:'cyan'}}>
                    <div className='main-route'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/Contact">Contact</Link></li> 
                            <li><Link to="/About">About</Link></li>  */}
                            <li><Link to="/Props">Props</Link></li> 
                            <li><Link to="/Profile">Profile</Link></li> 
                            <li><Link to="/Setting">Setting</Link></li> 
                            <li><Link to="/Product">Product</Link></li> 
                            <li><Link to="/Timer">Timer</Link></li> 

                        </ul>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="Contact" element={<Contact/>}/>
                    <Route path="Props" element={<Props fname='Divy' lname='Modi'/>}/>
                    <Route path="Profile" element={<Profile/>}/>
                    <Route path="Setting" element={<Setting/>}/>
                    <Route path="Product" element={<Product/>}/>
                    <Route path="Timer" element={<Timer/>}/>
                    <Route path="*" element={<Nopage/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default Main

