import React from 'react';
import logo from '../images/aqtksa_logo_solo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 border-2 fixed top-0 left-0 w-full" style={{ zIndex: '999' }}>
        <div className="flex items-center">
          <img className="h-8 mr-4" src={logo} alt="Logo" />
          <span className="font-bold text-lg">AQTK</span>
        </div>
        <button className="focus:outline-none lg:hidden">
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
          {/* Buttons */}
          <div id="menu__buttons" className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#contactos"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Contactos
                </a>
                <a
                  href="#sobre-nosotros"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Sobre nosotros
                </a>
                <a
                  href="#productos"
                  className="text-gray-900 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Productos
                </a>
              </div>
            </div>
        </div>
      </nav>
  )}
export default Navbar;
