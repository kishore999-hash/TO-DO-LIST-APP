import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function Signip() {
    const [username,setu]=useState();
    const [password,setp]=useState();
    const [confirmpassword,setcp]=useState();
    const [message,setm]=useState();

    
    const signup=async(e)=>{
      e.preventDefault()

      if(!username || !password || !confirmpassword){
        return setm("PLEASE ENTER FULL DETAILS")
      }
      if(password !== confirmpassword){
        return setm("PASSWORD AND CONFORM PASSWORD MUST BE SAME")
      }

      const d=await axios.post("http://localhost:2222/signup",{
        username,password
      })

      if(d.data==="exist"){
        return setm("USER ALREADY EXIST,PLEASE LOGIN")
      }
      if(d.data=="SUCESS"){
        return setm("USER CREATED")
      }




      
      
      
    }
    

  return (
    <div>
         <form onSubmit={signup}>
            <input type="text" placeholder="ENTER USERNAME" onChange={(e)=>setu(e.target.value)}/>
            <input type="password" placeholder="ENTER PASSWORD" onChange={(e)=>setp(e.target.value)}/>
            <input id="i2" type="password" placeholder="ENTER CONFIRM PASSWORD"  onChange={(e)=>setcp(e.target.value)}/>
            {message}

            
            <input type="submit" name="" id="" />
        </form>
        
        <Link id="a" to="/"><h3>LOGIN</h3></Link>
    </div>
  )
}

export default Signip