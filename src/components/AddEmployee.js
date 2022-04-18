import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./style.css";

function AddEmp(){
    const [name, setEmpName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
   
    const navigate = useNavigate();

    //Defining Schema  and validation using yup dependency 

    //yup schema 

    const schema = yup.object({
        name: yup.string().required(),
        email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
        phone: yup.number().positive().integer().required(),
        location: yup.string().required(),
      }).required();

      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    

      const onSubmit = () => {
        axios
        .post(`https://608a365f8c8043001757fd98.mockapi.io/user/Employee`, {
        name,
        email,
        phone,
        location,
        
        })
        .then(() => {
          console.log('CREATE DONE');
          navigate('/');
        });
        
      };

   
    
    
    return(
        <>

        <form className="w-full max-w-sm container mt-20 mx-auto" onSubmit={handleSubmit(onSubmit)} >
            
      <div className="w-full mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
          Name of employee
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"  
        type="text" 
        placeholder="Enter name" 
        // {...register("name", {required: true, pattern: /^[A-Za-z]+$/i })}
        {...register("name")}
        onChange={(e) => setEmpName(e.target.value)}
      
        />
         <p>{errors.name?.message}</p>
    {/* {errors?.name?.type === "required" && <p>This field is required</p>}
    {errors?.name?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )} */}
          
      </div>
      <div className="w-full mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
         type="text" 
         placeholder="Enter Email"
         {...register("email")}
         onChange={(e) => setEmail(e.target.value)}
         
         />
         <p>{errors.email?.message}</p>
         
      </div>
      <div className="w-full mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
          Phone
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
         id="phone"
         type="tel"
         name="phone"
         placeholder="Enter Phone Number" 
         {...register("phone")}
        //  {...register("phone", { required: true, maxLength: 10 })}
         onChange={(e) => setPhone(e.target.value)}
         
         
         />
         <p>{errors.phone?.message}</p>
          
      {/* {errors?.phone?.type === "maxLength" && (
        <p>Phone Number cannot exceed 10 characters</p>
      )} */}
      
      </div>
      <div className="w-full mb-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
         location
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
         type="text"
         placeholder="Enter Location" 
         {...register("location")}
         onChange={(e) => setLocation(e.target.value)}
         
         />
           <p>{errors.location?.message}</p>
        
      </div>
      
      <div className="flex items-center justify-between">
      <input type="submit" className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/">Cancel</Link>
      </div>
     
    </form>
    
        </>
    )
}

export default AddEmp;