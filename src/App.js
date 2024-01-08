import React, { useState } from 'react';
import './App.css';
import smartserv from './smartserv.jpg';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './dashboard';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login />} 
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}  
        />
      </Routes>
    </Router>
  );
};

export default App;
