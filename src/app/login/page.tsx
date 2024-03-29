"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";




export default function LoginPage(){
  const [user,setUser]=React.useState({
    email:"",
    password:"",
    
  })

  const onLogin = async ()=>{
  }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className=" text-white">Login</h1>
      <hr />
      
      <label htmlFor="email">email</label>
      <input type="email" id="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" />


      <label htmlFor="password">password</label>
      <input type="password" id="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password" />

      <button className="p-2 border border-gray-300 rounded-lg mb-4 mt-4 focus:outline-none focus:border-gray-600">Login</button>


      
      
      <Link href="/signup"> <button className="p-2 border border-gray-300 rounded-lg mb-4 mt-4 focus:outline-none focus:border-gray-600">Go to signup</button></Link>
    </div>
    )
}

