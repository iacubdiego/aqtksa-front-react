import React from 'react';

const Servicios = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            className="object-cover w-full h-64 md:h-auto md:rounded-l-lg"
            src="imagen.jpg"
            alt="Imagen"
          />
        </div>
        <div className="flex flex-col justify-center p-4 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Título de la Servicios</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat orci ac odio tincidunt, ac sodales nisl condimentum. Sed
            vestibulum, ex at consequat efficitur, lectus urna ullamcorper
            turpis, quis iaculis nisi purus vel risus.
          </p>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Botón
          </button>
        </div>
      </div>
    </div>
  );
};

export default Servicios;