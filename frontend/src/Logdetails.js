import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logdetails(){
const[values, setValues]=useState({
    
})
const navigate= useNavigate();
const handler=(event)=>{
setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
}
const handlersubmit=(event)=>{
event.preventDefault();
console.log(values)
if(values.email[0]==="siva" &&(values.pass[0]==="pass")){
navigate('/home')
}
else{
    alert('error')
}
}
    return(
        <>
    
        <input type='text' name='email' onChange={handler}/>
        <input type='text' name='pass' onChange={handler}/>
        <button type='submit' onClick={handlersubmit} >submit</button>
        
        </>
    )
}export default Logdetails;