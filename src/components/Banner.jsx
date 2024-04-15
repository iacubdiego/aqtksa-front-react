import React from 'react';
// import banner_principal from '../images/banner_horizontal_principal.png'
import banner_horizontal from '../images/banner_horizontal_new2.png'


const Banner = () => {
  return (
<section className="p-1 flex flex-col items-center justify-center bg-gray-100">
  <div className="relative w-full">
    <img src={banner_horizontal} alt="banner_principal" className="w-full h-auto rounded-md" />
    {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end" style={{ borderImage: 'fill 0 linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3))' }}>
      <div className="bg-gray-900 bg-opacity-50 w-full h-full backdrop-filter backdrop-blur-ms p-2 rounded-md text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">AQTK</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white hidden sm:block">Encuentra las mejores soluciones en:<br></br>
- Telecomunicaciones<br></br>
- Electrónica en general<br></br>
- Industria</p>
      </div>
    </div> */}
  </div>
</section>  )}
  export default Banner;
