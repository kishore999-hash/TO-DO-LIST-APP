import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";


function Login() {
    const [username,setu]=useState("");
    const [password,setp]=useState("");
    const [message,setm]=useState();
    const [mes,setmes]=useState(false);
    

    const senddata=async(e)=>{
        e.preventDefault()

        localStorage.setItem("username",username)

         if(!username || !password){
            return setm("WRITE FULL YAA")
        }

        const d=await axios.post("http://localhost:2222/",{
            username,
            password
        })
       
        
       
        if(d.data==="exist"){
            setmes(true)
        }
    
        setm(d.data)
        
        
       
        


    }
    if(mes){
        return <Navigate to="/home"></Navigate>
    }
  
  return (
    <div>
        <i id="a" className="fa-solid fa-house"></i>
        <form onSubmit={senddata}>
            <input type="text" placeholder="ENTER USERNAME" onChange={(e)=>setu(e.target.value)}/>
            <input type="password" placeholder="ENTER PASSWORD" onChange={(e)=>setp(e.target.value)}/>
            <input type="submit" name="" id="" />
        </form>
        <h1>{message}</h1>



        <Link id="b" to="/signup"><h3>SIGNUP</h3></Link>
        
        
    </div>
  )
}

export default Login