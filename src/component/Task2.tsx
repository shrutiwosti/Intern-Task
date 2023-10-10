type Myprops = {
    name:string 
    age:number 
    phone:number 
    address:string
} 

const Task2 = ({name,age,phone,address}:Myprops) =>{
    return(
        <div>
            {name}
            {age} 
            {phone}
            {address}
        </div>
    )
}
export default Task2;