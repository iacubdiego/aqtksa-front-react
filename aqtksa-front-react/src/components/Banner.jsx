import React from 'react';
// import banner_principal from '../images/banner_horizontal_principal.png'
import banner_horizontal from '../images/banner_horizontal_ok.png'


const Banner = () => {
  return (
<section className="pt-16 md:pt-0 flex flex-col items-center justify-center bg-gray-100">
  <div className="relative w-full">
    <img src={banner_horizontal} alt="banner_principal" className="w-full h-auto object-cover rounded-md" />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end" style={{ borderImage: 'fill 0 linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3))' }}>
      <div className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-ms p-4 rounded-md text-center">
        <h1 className="text-4xl font-bold text-white mb-4">AQTK</h1>
        <p className="text-lg text-white">Encuentra las mejores soluciones en telecomunicaciones</p>
      </div>
    </div>
  </div>
</section>  )}
  export default Banner;
