import React, { FC, useState } from 'react';
import './style.css'; 
import Button from './Task3';

type Customer = {
  name: string;
  age: number;
  phone: string;
  address: string;
};

type props = {
  styles:React.CSSProperties
}


const CustomerProfile: FC = () => {
  const [popUpData, setPopUpData]=useState({name:"", age:0, phone:"", address:""});

  const [showPopUp, setShowPopUp]=useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState< Customer | null>(null);

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

  const Popup = (styles:props) => {
    return (
      <div className="popup" style={styles.styles}>
        <div className="popup-content">
          <h3>Customer Details</h3>
          <input type='text' name="name" onChange={handleChange} value={popUpData.name}/>
          <input type='number' name="age" onChange={handleChange}  value={popUpData.age}/>
          <input type='number' name="phone"onChange={handleChange}  value={popUpData.phone}/>
          <input type='text' name="address" onChange={handleChange}  value={popUpData.address}/>
          <button onClick={()=>{setShowPopUp(false)}}>Close</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  };

  const openPopup = (customer: Customer) => {
    setSelectedCustomer(customer);
    setPopUpData(customer);
  };

  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setPopUpData({...popUpData, [event.target.name]:event.target.value})
  }

  return (
    <div>
      <h2>Customer Profiles</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th> 
            <th>Age</th> 
            <th>Phone</th> 
            <th>Address</th> 
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr onClick={()=>{setPopUpData(customer);setShowPopUp(true)}}>
            <td>{customer.name}</td>
            <td>{customer.age}</td>
            <td>{customer.phone}</td>
            <td>{customer.address}</td>
            <td> <Button/> </td>
          </tr>
          ))} <button> Add </button>
        </tbody>
      </table>
      <Popup styles={{display:showPopUp? "block": "none"}}/>
    </div>
  );
};

export default CustomerProfile;
