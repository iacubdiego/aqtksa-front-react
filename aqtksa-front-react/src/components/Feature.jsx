import React from 'react'
import { ReactComponent as RepairIcon } from '../images/icons/electronic_repair_service_tool_equipment_icon_193578.svg';


const Feature = () => {
    return (
<div className="grid p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {/* Columna 1 */}
      <div className="bg-gray-100 p-2">
      <div className="flex p-4 flex-col items-center gap-4 text-center">
        <div className="flex items-center text-emerald-500">
          
        <RepairIcon
            fill="none"
            // viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            aria-label="Dashboard icon"
            role="graphics-symbol"
          />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          
        </div>
        <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
          <p className="text-slate-500">
            <strong className="font-large text-slate-700">
              Servicio Tecnico:
            </strong>{" "}
            Nuestro laboratorio se encuentra gerenciado por un ingeniero con más de 35 años de experiencia en la reparación y calibración de instrumental electrónico.
          </p>
        </div>
      </div>
      </div>
      {/* Columna 2 */}
      <div className="bg-gray-100 p-2">
      <div className="flex p-4 flex-col items-center gap-4 text-center">
        <div className="flex items-center text-emerald-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            aria-label="Dashboard icon"
            role="graphics-symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </div>
        <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
          <p className="text-slate-500">
            <strong className="font-large text-slate-700">
              Consultoria:
            </strong>{" "}
            Nuestros consultores cuentan con más de 20 años de reconocida trayectoria en el mercado de instrumentación en Latinoamérica.
          </p>
        </div>
      </div>
      </div>
      {/* Columna 3 */}
      <div className="bg-gray-100 p-2">
      <div className="flex p-4 flex-col items-center gap-4 text-center">
        <div className="flex items-center text-emerald-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            aria-label="Dashboard icon"
            role="graphics-symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </div>
        <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
          <p className="text-slate-500">
            <strong className="font-large text-slate-700">
              Productos:
            </strong>{" "}
            Diseñados para brindar a las empresas de telecomunicaciones las herramientas necesarias para monitorear, analizar y optimizar sus redes de manera precisa y efectiva.
          </p>
        </div>
      </div>
    </div>
  </div>
)}
export default Feature;