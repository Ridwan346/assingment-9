import React, { useState } from 'react';
import { createUserWithEmailAndPassword,  } from 'firebase/auth';
import { auth } from './email';
import { Link } from 'react-router';
import { sendEmailVerification } from 'firebase/auth';


const Register = () => {
  let [error ,seterror] =useState('')
    let [sucsess ,setsucsess] =useState('')
    let [showPass ,setshowPass] =useState('')

    let handleSubmit = (e) =>{
          e.preventDefault();
          let email = e.target.email.value;
          let password =e.target.pass.value;
        console.log("submit", email ,password)
        let carecter =/^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
       if(!carecter.test(password)){
        seterror('must be 6')
        return;
       }

        setsucsess(false)
        seterror('')
        createUserWithEmailAndPassword(auth ,email ,password)
        .then(result => {
            console.log(result.user)
            setsucsess(true)
            e.target.reset();
            sendEmailVerification(result.user)
            .then(()=>{
              alert('verify your email')
            })
        })
        .catch(error =>{
            console.log('error hapen' ,error.message)
            seterror(error.message)
        })
    }
   let handlePass = (e) =>{
    e.preventDefault()
      setshowPass(!showPass)
    }
    return (
        <div>
            <div className="hero bg-gradient-to-r from-blue-200 via-blue-500 to white shadow-sm min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-center font-bold">Registretion Now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        
      </div>
    </div>
  </div>
 </div>
        </div>
    );
};

export default Register;