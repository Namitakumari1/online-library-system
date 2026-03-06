import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


function App(){
  return(
    <>
      <h1>
        Creating Online Library System
      </h1>
      <Navbar />
      <Outlet /> {/* This renders child routes */}
    </>
    
  )
}
export default App;