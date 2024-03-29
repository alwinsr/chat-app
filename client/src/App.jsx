import { useState } from "react";
import React from 'react';  
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from './components/chat/index.jsx';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
