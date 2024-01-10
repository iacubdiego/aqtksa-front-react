import React from 'react';

const Footer = () => {
  return (

    // class="flex items-center justify-between p-4 bg-gray-100 border-2 w-full m-auto bg-gray-100"
<footer className="flex items-center justify-between mt-4 p-4 bg-gray-100 border-2 w-full m-auto">
{/* <div className="container mt-4 py-8"> */}
  <div className="flex flex-wrap w-full justify-around">
    <div className="w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-lg font-bold mb-4">Columna 1</h2>
      <ul className="list-none">
        <li className="mb-2">
          <a href="#inicio" className="hover:text-gray-400">Inicio</a>
        </li>
        <li className="mb-2">
          <a href="#contactos" className="hover:text-gray-400">Contactos</a>
        </li>
        <li className="mb-2">
          <a href="#sobre-nosotros" className="hover:text-gray-400">Sobre nosotros</a>
        </li>
      </ul>
    </div>
    <div className="w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-lg font-bold mb-4">Columna 2</h2>
      {/* Contenido de la segunda columna del footer */}
    </div>
    
  </div>
{/* </div> */}
</footer>
  )}
  export default Footer;
