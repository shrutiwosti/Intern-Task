import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task1 from './component/Task1';
import Task2 from './component/Task2';


function App() {
  return (
    <div>
      <Task1/>
      <Task2 name="Shruti" address="grande" age={20} phone={+9779845090541} />
    </div>
  );
}

export default App;
