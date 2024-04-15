import React from 'react';
// import reparacion_banner from '../images/reparacion_banner.png'
import reparacion_banner from '../../images/serviciosCarousel5.png'

const ServiciosProductos = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
    <div className="md:flex">
    <div className="md:w-2/3">
      <img
        className="object-cover h-60 w-full md:rounded-l-lg"
        src={reparacion_banner}
        alt="Imagen"
      />
    </div>
  
    <div className="flex flex-col justify-center p-4 md:w-1/3">
      <h2 className="text-4xl font-bold mb-4">Servicio Técnico</h2>
      {/* <p className="mb-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p> */}
      {/* <button className="w-40 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Ver Más
      </button> */}
    </div>
  </div>
</div>  
  );
};

export default ServiciosProductos;