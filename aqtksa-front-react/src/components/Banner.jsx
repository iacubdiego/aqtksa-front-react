import React from 'react';
import banner_principal from '../images/banner_horizontal_principal.png'


const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <img src={banner_principal} alt="banner_principal" />
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">AQTK</h1>
      <p className="text-lg">Encuentra las mejores soluciones en telecomunicaciones</p>
    </div>
  </section>
  )}
  export default Banner;
