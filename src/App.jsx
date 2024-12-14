import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RSVP from './pages/RSVP/RSVP';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import NavbarHook from './components/Navbar/NavbarHook/NavbarHook';
// import Navbar from './components/Navbar/Navbar';
import Details from './pages/Details/Details';
import WeddingParty from './pages/WeddingParty/WeddingParty';
import Registry from './pages/Registry/Registry';

import axios from "axios"

function App() {

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <Router>
      <NavbarHook />
      <div className="main__content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/details" element={<Details />} />
        <Route path="/wedding-party" element={<WeddingParty />} />
        <Route path="/registry" element={<Registry />} />
        {/* <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      
      </div>
    </Router>
  );
}

export default App;
