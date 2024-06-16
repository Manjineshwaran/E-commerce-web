import React, {useState} from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';
function Signup(){

 //setting an empty value in state
 const [values, setValues] = useState({
    email:'',
    password:'',
    name:''
})
const navigate = useNavigate();
//fn which used in handlersubmit
const [errors, setErrors]= useState({})
const handleInput= (event) =>{
setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}
//activating the fn to execute set error funtion
const handlerSubmit =(event) =>{
    event.preventDefault();
    setErrors(Validation(values));
   
    if(errors.name==="" && errors.email==="" && errors.password ===""){
       
axios.post ('http://localhost:3318/signup',values )
.then(res => {
    console.log(res)
    navigate('/');
})
.catch(err =>console.log(err));
    }
}

    return(
        
<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sign In</h2>
        <form action="" onSubmit={handlerSubmit}>
        <div className='mg-3'>
                <lable htmlFor="name">name</lable>
                <input type="text" placeholder='Enter name' name='name' onChange={handleInput} className='form-control rounded-0'/>
                {errors.name && <span className="text-danger">{errors.name}</span>}
            </div>
            <div className='mg-3'>
                <lable htmlFor="email">Email</lable>
                <input type="email" placeholder='Enter email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <lable htmlFor="Password">Password</lable>
                <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <button type = 'submit' className=' btn btn-success'>Sign up</button>
            <p> agree to terms and conditions</p>
            <Link to="/" className='btn btn-default border '>Login</Link>
        </form>
    </div>
</div>
    )
}
export default Signup