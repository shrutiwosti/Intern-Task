import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task1 from './component/Task1';
import Task2 from './component/Task2';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="customers" element={<Task2 />} />
      </Routes>
    </div>
  );
}


export default App;
