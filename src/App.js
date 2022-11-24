import React ,{Component} from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './component/Home'
import"./App.css"
import Login from "./Header/Login"
import Sign from './Header/Sign';

import Nav from "./component/Navbar"
import London from './component/London';
import Paris from "./component/Paris"


function App(){
  
    return (
      <BrowserRouter>
        <div className="App">
        <Nav/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Sign" element={<Sign/>} />
            <Route path="/London" element={<London/>} />
            <Route path="/Paris" element={<Paris/>} />



          </Routes>
        </div>
      </BrowserRouter>
    );
  }


export default App;
