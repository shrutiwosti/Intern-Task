import { Link } from 'react-router-dom';

const Task1 = () => {
    return(
        <div>
            <h1>Hello, React!!</h1>
            <Link to="/customers" style={{color: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >Customers Page</Link>
        </div>
    )
}
export default Task1;