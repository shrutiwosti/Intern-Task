import React, {  useState } from 'react';
import './style.css'; 
import { Space, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Customer } from '../App';
import Task3 from './Task3';

type props = {
  customerData:{  
    name: string;
    age: number;
    phone: string;
    address: string;
  }[]

};


const CustomerProfile: React.FC<props> = ({customerData}) => {
  const [tableD, setTableD] = useState(customerData)
  const [popUpData, setPopUpData]=useState({name:"", age:0, phone:"", address:""});
  const [showPopUp, setShowPopUp]=useState(false);
  const [isAdd, setIsAdd]=useState(false);


  const openPopup = (record: Customer) => {

    setPopUpData(record);
    setShowPopUp(true)
  };
  
  function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    setPopUpData({...popUpData, [event.target.name]:event.target.value})
  }

  const columns: ColumnsType<Customer> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title:"Phone",
      dataIndex:"phone"
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title:"Status",
      render : () => {
        return <Task3 />;
      }
    }
  ];

  const editOrAdd = () => {  

    if(!isAdd){
      edit()
    }
    else{
      add()
      edit()
    }

    setShowPopUp(false)

  }

  const add = () => {
    tableD.push(popUpData)
  }

  const edit = () => {  

      const newData = tableD.map((record) => {
        if(record.name === popUpData.name){
          return popUpData
        }
        else{
          return record
        }
      })
      setTableD(newData)
    }

  const deleteCust = () => {
    const newTableD = tableD.filter((newData) => { return newData.name !== popUpData.name})
    setTableD(newTableD)
    setShowPopUp(false)
  }

  const addCustomer = () => {
    setIsAdd(true)
    openPopup({name:"", age:0, phone:"", address:""})
  }

  return (
    <div>
      <h2>Customer Profiles</h2>

        <Table columns={columns} dataSource={tableD} size="middle" rowKey={"name"} className='customerTable' onRow={(record) => {
          return{onClick : () => {openPopup(record) ; setIsAdd(false)}};
        }}/>
        <button onClick={() => {
          addCustomer()
        }}>Add new customer</button>

      

      <div className="popup" style={{display:showPopUp? "block": "none", position:"absolute", top:"30%", left:"40%"}}>
        <div className="popup-content">
          <h3>Customer Details</h3>
          <input type='text' name="name" onChange={handleChange} value={popUpData.name}/>
          <input type='number' name="age" onChange={handleChange}  value={popUpData.age}/>
          <input type='text' name="phone"onChange={handleChange}  value={popUpData.phone}/>
          <input type='text' name="address" value={popUpData.address} onChange={handleChange}  />
          <button onClick={() => editOrAdd()}>{isAdd? "Add":"Edit"}</button>
          <button onClick={deleteCust} style={isAdd? {display:"none"} : {}}>Delete</button>
          <button onClick={()=>{setShowPopUp(false)}}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;