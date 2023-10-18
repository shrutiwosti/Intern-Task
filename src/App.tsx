import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task1 from './component/Task1';
import Task2 from './component/Task2';

export type Customer = {
  name: string;
  age: number;
  phone: string;
  address: string;
}

const customers: Customer[] = [
  {
    name: 'Ashutosh Pradhan',
    age: 20,
    phone: '0101010101',
    address: 'Patan',
  },
  {
    name: 'Priyasa Karki',
    age: 39,
    phone: '0001010111',
    address: 'Palpa',
  },
  {
    name: 'kanchan Shrestha',
    age: 21,
    phone: '0001010112',
    address: 'Chitwan',
  },
  {
    name: 'Prianca Rajbhandari',
    age: 41,
    phone: '0001013312',
    address: 'Kathmandu',
  },
  {
    name: 'Sudarshan Bista',
    age: 49,
    phone: '0001013112',
    address: 'Butwal',
  },
];

function App() {
  return (
    <div>
      <Task1/>
      <Task2 customerData={customers}/>
    </div>
  );
}

export default App;