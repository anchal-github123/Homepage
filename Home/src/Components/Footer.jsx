import {footerData} from "../Constant/Homepage"
import logo from "../assets/logo.png"
export default function Footer() {
  return (
    <>
    <div className="grid px-4 md:grid-cols-4  gap-2 bg-gray-800">
    {/* 1st section */}
    <div>
      <img src={logo} alt="logo" loading="lazy"></img>
      <p>We are pleased to introduce you ourselves as a leading manufacturers of PRECISION BRASS TURNED & SHEET COMPONENTS “SINCE 1974" and are marketing our products to the entire satisfaction of esteemed customers. As we have a very big range of items, your specific interest may be communicated for attending it promptly and to your satisfaction.</p>
    </div>
    {/* Others */}
  {footerData.map((ele,ind)=>(
   <div key={ind} className="flex flex-col"><h2>{ele.title}</h2>
  
   {ele.subtitle?.map((subdata,i)=>(
    <li key={i}>{subdata}</li>))}</div> 
  ))}
 </div>
  </>
    
  )
}
