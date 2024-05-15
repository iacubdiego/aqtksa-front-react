import React from 'react';
import logo from '../images/aqtksa_logo.png'

const Footer = () => {
  return (
    // class="flex items-center justify-between p-4 bg-gray-100 border-2 w-full m-auto bg-gray-100"
<footer className="flex flex-col mt-4 p-2 border-2 w-full m-auto">
{/* <div className="container mt-4 py-8"> */}
<div className="flex items-center justify-between mt-4 bg-gray-100 w-full m-auto">

  <div className="flex flex-wrap w-full justify-around">
    <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-lg font-bold mb-2">EN LA WEB:</h2>
      <ul className="list-none">
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">Inicio</a>
        </li>
        <li className="mb-1">
          <a href="#productos" className="hover:text-gray-400">Productos</a>
        </li>
        <li className="mb-1">
          <a href="#servicio-tecnico" className="hover:text-gray-400">Servicio Tecnico</a>
        </li>
        <li className="mb-1">
          <a href="#consultoria" className="hover:text-gray-400">Consultoria</a>
        </li>
        <li className="mb-1">
          <a href="#sobre-nosotros" className="hover:text-gray-400">Sobre nosotros</a>
        </li>
      </ul>
    </div>
    <div className="w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="text-lg font-bold mb-4">CONTACTO:</h2>
      <ul className="list-none">
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">Av. Cramer 1765 Piso 7 "A"</a>
        </li>
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">C.A.B.A - Argentina</a>
        </li>
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">(54 11) 4783-0776</a>
        </li>
        <li className="mb-1">
          <a href="#inicio" className="hover:text-gray-400">consultas@aqtk.com.ar</a>
        </li>
      </ul>
      {/* Contenido de la segunda columna del footer */}
    </div>
    
  </div>
{/* </div> */}
</div>
  <div className="bg-gray-200 border-t border-slate-200 bg-slate-100 py-4 text-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
            <img className="h-10 mr-4" src={logo} alt="Logo" />
                <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                  <li className="leading-6">
                    <a
                      href="#T&C"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      T&C
                    </a>
                  </li>
                  <li className="leading-6">
                    <a
                      href="#Privacy"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="leading-6">
                    <a
                      href="#Cookies"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
</footer>
  )}
  export default Footer;
