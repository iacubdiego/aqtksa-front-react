import React from 'react';
import banner_albedo from '../images/banner_horizontal.png'

const Servicios = () => {
  return (
    <div className="bg-white p-4 h-200 rounded-lg shadow-lg">
  <div className="md:flex">
    <div className="md:w-1/3">
      <img
        className="object-cover h-full w-full md:rounded-l-lg"
        src={banner_albedo}
        alt="Imagen"
      />
    </div>
  
    <div className="flex flex-col justify-center p-4 md:w-2/3">
      <h2 className="text-2xl font-bold mb-4">Servicio Técnico</h2>
      <p className="mb-4">
        Nuestro laboratorio se encuentra gerenciado por un ingeniero con más de 35 años de experiencia en la reparación y calibración de instrumental electrónico, reflejo de su amplia trayectoria desarrollada en los laboratorios de HP y Agilent en Argentina, quien junto a nuestros capacitados técnicos le demostrarán su vocación de servicio.
      </p>
      <button className="w-40 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Ver Más
      </button>
    </div>
  </div>
</div>  
  );
};

export default Servicios;