import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'; 
import axios from 'axios';
function Login(){

    //setting an empty value in state
    const [values, setValues] = useState({
        email:'',
        password:''
    })
    const navigate= useNavigate();
    //fn which used in handlersubmit
    const [errors, setErrors]= useState({})
const handleInput= (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}
    //activating the fn to execute set error funtion
    const handlerSubmit =(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        
    if(errors.email==="" && errors.password ===""){
        console.log(values);
        
axios.post ('http://localhost:3318/Login',values )
.then(res => {
    if(res.data ==="success"){
        navigate('/home');
    }
    else{
        alert("no record");
    }
})
.catch(err =>console.log(err));
    }
    }

    return(
<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <form action="" onSubmit={handlerSubmit}>
            <div className='mg-3'>
                <lable htmlFor="email">Email</lable>
                <input type="email" placeholder='Enter email' name ='email' onChange= {handleInput} className='form-control rounded-0'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <lable htmlFor="Password">Password</lable>
                <input type="password" placeholder='Enter Password' name ='password' onChange= {handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}

            </div>
            <button type='submit' className=' btn btn-success'>Log in</button>
            <p> agree to terms and conditions</p>
            <Link to="/signup" className='btn btn-default border '>Create account</Link>
        </form>
    </div>
</div>
    )
}
export default Login