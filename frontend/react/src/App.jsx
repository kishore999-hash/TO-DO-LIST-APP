
  import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../componenets/Home"
import Login from "../componenets/login"
import Signip from "../componenets/signip"
  function App() {


      
      
    return (
      <div>
        
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/signup" element={<Signip/>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              
            </Routes>
              
            
          
          </BrowserRouter>

          
      
      </div>
    ) 
  }

  export default App