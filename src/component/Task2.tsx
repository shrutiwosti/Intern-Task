import React, { useState } from 'react';

// Define the Customer type
type Customer = {
  name: string;
  age: number;
  phone: string;
  address: string;
};

// Reusable CustomerRow component
const CustomerRow: React.FC<{ customer: Customer; onClick: () => void }> = ({ customer, onClick }) => (
  <tr onClick={onClick}>
    <td>{customer.name}</td>
    <td>{customer.age}</td>
    <td>{customer.phone}</td>
    <td>{customer.address}</td>
  </tr>
);

// Reusable Popup component
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

// Main CustomerProfile component
const CustomerProfile: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // Dummy data
  const customers: Customer[] = [
    {
      name: 'John Doe',
      age: 30,
      phone: '555-123-4567',
      address: '123 Main St',
    },
    {
      name: 'Jane Smith',
      age: 25,
      phone: '555-987-6543',
      address: '456 Elm St',
    },
    // Add more customers as needed
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

