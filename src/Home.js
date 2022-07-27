import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";


function App(){
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App