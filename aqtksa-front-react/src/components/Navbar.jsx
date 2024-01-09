import React from 'react';
import logo from '../images/aqtksa_logo_solo.png'

const Navbar = () => {
  return (
<nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <div className="flex items-center">
          <img className="h-8 mr-4" src={logo} alt="Logo" />
          <span className="font-bold text-lg">AQTK</span>
        </div>
        <button className="text-white focus:outline-none lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <a href="#contactos" className="hover:text-gray-400">Contactos</a>
          <a href="#sobre-nosotros" className="hover:text-gray-400">Sobre nosotros</a>
          <a href="#productos" className="hover:text-gray-400">Productos</a>
        </div>
      </nav>
  )}
export default Navbar;
