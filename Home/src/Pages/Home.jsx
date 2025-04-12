import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
export default function Home() {
  return (
    <div className="relative">
    {/* Hero section========== */}
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <h1 className="position-absolute z-30 opacity-60 ">Gurunanak Brass Industries</h1>
    <div className="carousel-item active w-full">
      <img src={slide1} className="d-block w-100" alt="Slide1"></img>
    </div>
    <div className="carousel-item w-full ">
      <img src={slide2} className="d-block w-100" alt="Slide2"></img>
    </div>
    <div className="carousel-item w-full ">
      <img src={slide3} className="d-block w-100" alt="Slide3"></img>
    </div>
  </div>
  </div>
  {/* Hero section End================== */}
  {/* Heading========= */}
  <div class="bg-yellow-500 py-1 relative -skew-x-20 origin-top-right w-4/5 text-sm ">
  <div className="bg-gray-900 p-1"></div>
  <div class="container  text-center">
    <p class="text-white text-sm md:text-2xl font-semibold">MANUFACTURER & EXPORTER OF PRECISION BRASS COMPONENTS</p>
  </div>
  {/* <div class="absolute top-0 bottom-0 right-0 w-6 bg-white -skew-y-6 origin-top-right"></div> */}
</div>
<section>
  {/* Heading============ */}
  {/* About Company start========== */}
  <div className="text-black">
  <h3>WELCOME TO OUR COMPANY</h3>
  <div className="bg-gray-900 h-1 w-40">
  
  </div>
  <div className="bg-yellow-500 w-50 h-1">
    
  </div>
  <p className="text-sm md:text-xl">Gurunanak Brass Industries is a specialized Manufacturer & Exporter of precision Brass Turned Components. The Company was established in "1974" and is situated at G.I.D.C. Industrial Estate, Jamnagar (INDIA).

We are leading Manufacturer & Exporter engaged in Precision Brass Components 01mm to 100mm O.D. like electrical & electronic parts, automobile parts, meter parts, brass fasteners such as screws, nuts, bolts, washers, rivets, anchors, brass connectors, brass inserts, brass pins, nozzles, sheet metal components, brass housing parts, brass pressure gauge parts, brass male female assembly, brass teminals, brass extrusion sections & others as per Customer's Drawings & Specification. We are in Manufacturing of Precision Brass Components Since 1974.</p>
  </div>
  

  {/* About Company End=========== */}
</section>
</div>
  )
}
