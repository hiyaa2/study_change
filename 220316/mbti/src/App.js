import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Question from './pages/Question/Question';
import Result from './pages/Result/Result';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question" element={<Question />} />
        <Route path="Result" element={<Result />} />
    </Routes>
  )
}



export default App;


