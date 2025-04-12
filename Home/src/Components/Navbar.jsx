import logo from "../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { navbarData } from "../Constant/Homepage";
import { useState } from "react";
export default function Navbar() {
const [toggleNav,setToggleNav]=useState(false)
  return (
    <>
   <nav className="flex justify-between items-center gap-3 z-50 bg-gray-900 sticky-top py-2">
   {/* logo section */}
    <div className="" id="logo">
    <img src={logo} alt="logo" loading="lazy"></img>
    </div>
    {/* navItem section */}
    <div className=" w-full h-full">
     <div className="md:hidden flex justify-end text-2xl" onClick={()=>setToggleNav(!toggleNav)}> <FaBarsStaggered /></div>
   <ul className="hidden md:flex gap-10 justify-center items-center ">
    {navbarData.map((navdata,ind)=>{
        return <a href={navbarData.link} key={ind}><li>{navdata.linkname.toUpperCase()}</li></a> 
})}
    </ul>
    </div>
   </nav>
   {/* Mobile view navbar */}
   {toggleNav && (
  <div
    className={`position-absolute z-50 w-full md:hidden bg-gray-600 transition-all duration-500 ease-in-out 
        ${toggleNav ? ' opacity-100' : ' opacity-0 pointer-events-none'}`}>
    <ul className="flex flex-col gap-4 p-3">
      {navbarData.map((navdata, ind) => (
        <li key={ind}>
          <a href={navdata.link} className="text-white">{navdata.linkname.toUpperCase()}</a>
        </li>
      ))}
    </ul>
    
  </div>
)}


</>
  )
}
