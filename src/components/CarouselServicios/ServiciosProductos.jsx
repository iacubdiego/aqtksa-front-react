import React from 'react';
import { Link } from "wouter";
// import reparacion_banner from '../images/reparacion_banner.png'
import reparacion_banner from '../../images/serviciosCarousel5.png'


const ServiciosProductos = () => {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
      <div className="md:flex">
        <div className="md:w-2/3">
          <img
          className="object-cover h-60 w-full md:rounded-l-lg"
          src={reparacion_banner}
          alt="Imagen"
        />
        </div> 
      <div className=" flex flex-col justify-center p-4 m-auto md:w-1/3">
        <button className="mb-4 inline-flex h-16 items-center justify-center gap-2 whitespace-nowrap rounded border-2 border-red-400 px-6 text-sm md:text-base lg:text-lg font-medium tracking-wide text-grey-500 shadow-lg shadow-grey-200 transition duration-300 hover:border-red-600 hover:text-grey-600 hover:shadow-md hover:shadow-grey-200 focus:border-red-800 focus:text-grey-700 focus:shadow-md focus:shadow-red-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-grey-300 disabled:text-grey-300 disabled:shadow-none">
        <Link href="/productos">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className=""
                  href="#productos"
                >
          <span className="text-xl md:text-2xl lg:text-3xl font-bold p-2">
        Productos
          </span>
                </a>
        </Link>
        </button>
      </div>  </div>
    </div>  
    );
  };

export default ServiciosProductos;