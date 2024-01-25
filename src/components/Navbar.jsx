import React, { useState } from "react"
import { Link } from "wouter";

import logo from '../images/aqtksa_logo_solo.png'

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      <header className="border-b-1 bg-gray-100 sticky top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[3rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
          <div className="flex items-center">
          <Link href="/" className="flex items-center">
          <img className="h-8 mr-2" src={logo} alt="Logo" />
          <span className="font-bold text-lg">AQTK</span>
          </Link>
        </div>
        
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center md:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 md:visible md:relative md:top-0  md:z-0 md:flex md:h-full md:w-auto md:items-stretch md:overflow-visible md:bg-white/0 md:px-0 md:py-0  md:pt-0 md:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
              <Link href="/serviciotecnico">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none md:px-6"
                  href="#productos"
                >
                  <span>Servicio Técnico</span>
                </a>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link href="/consultoría">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4  transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none md:px-6"
                  href="#consultoria"
                >
                  <span>Consultoría</span>
                </a>
                </Link>

              </li>
              <li role="none" className="flex items-stretch">
                <Link href="/nosotros">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none md:px-6"
                  href="#sobre-nosotros"
                >
                  <span>Sobre nosotros</span>
                </a>
              </Link>
              </li>
              <li role="none" className="flex items-stretch">
              <Link href="/Contactos">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 text-red-500 transition-colors duration-300 hover:text-red-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none md:px-6"
                  href="#contactos"
                >
                  <span>Contactos</span>
                </a>
              </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}