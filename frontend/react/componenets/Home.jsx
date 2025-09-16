import axios from "axios"
import { useState } from "react"

function Home() {
  
  const [todo,addtodo]=useState([])
  const[item,setitem]=useState("")
  const[m,setm]=useState()

  const username=localStorage.getItem("username")
  
  const getdata=async()=>{
    const ge=await axios.get(`http://localhost:2222/home?username=${username}`);
    const got=await ge.data
    addtodo(got)
    
    


  }
  getdata()


  const add=()=>{ 
    if(item.trim()!==""){
      addtodo([...todo,item])
      const senddata=async()=>{
        const g=async()=>{await axios.post("http://localhost:2222/home",{username,item})}
        g()
        
      }
      senddata()
      setm()
      setitem("")
     
    }
    else{
      setm("WRITE SOMETHING TO DO YAARA")
    }
  }
  const deleteElement=async(e)=>{
    const wanttodelete=e
    const deleteElement=await axios.delete(`http://localhost:2222/home?username=${username}&&wanttodelete=${wanttodelete}`);
    const dee=deleteElement.data
    setm(dee)


  }
    
  
  
  return (
    <div>
      <h1>TO DO LIST </h1>
      <ul>

        {
          todo.map((e,n)=>(
            <li key={n} onClick={()=>deleteElement(e)}>{e}</li>
          ))
        }
      </ul>

      <input type="text" id="i"   value={item} onChange={(e)=>{setitem(e.target.value)}}  />
      <button onClick={add}>add</button>
      <br />
      <br />
      
      <p id="para">{m}</p>


    </div>
  )
}

export default Home