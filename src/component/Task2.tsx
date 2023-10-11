import React, { useState } from 'react';

type Customer = {
  name: string;
  age: number;
  phone: string;
  address: string;
};

// Reusable  components:
const CustomerRow: React.FC<{ customer: Customer; onClick: () => void }> = ({ customer, onClick }) => (
  <tr onClick={onClick}>
    <td>{customer.name}</td>
    <td>{customer.age}</td>
    <td>{customer.phone}</td>
    <td>{customer.address}</td>
  </tr>
);


const Popup: React.FC<{ customer: Customer | null; onClose: () => void }> = ({ customer, onClose }) => {
  if (!customer) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Customer Details</h2>
        <p>Name: {customer.name}</p>
        <p>Age: {customer.age}</p>
        <p>Phone: {customer.phone}</p>
        <p>Address: {customer.address}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Main component
const CustomerProfile: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // Dummy data
  const customers: Customer[] = [
    {
      name: 'Ashutosh Pradhan',
      age: 20,
      phone: '0101010101',
      address: 'Patan',
    },
    {
      name: 'Suresh Shrestha',
      age: 29,
      phone: '0001010111',
      address: 'Chitwan',
    },
  ];

  const openPopup = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const closePopup = () => {
    setSelectedCustomer(null);
  };

  return (
    <div>
      <h1>Customer Profiles</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <CustomerRow key={index} customer={customer} onClick={() => openPopup(customer)} />
          ))}
        </tbody>
      </table>
      <Popup customer={selectedCustomer} onClose={closePopup} />
    </div>
  );
};

export default CustomerProfile;

