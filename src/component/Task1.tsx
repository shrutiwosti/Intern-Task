import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Task1 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCounter((counter) => counter + 1);}, 1000);
    
        return () => {
          clearInterval(interval);};
    }, []);

    return(
        <div>
            <h1>Hello, React!!</h1>
            <Link to="/customers" style={{color: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >Customers Page</Link>
                <div className='counter'>{counter}</div>
        </div>
    )
}
  

export default Task1;