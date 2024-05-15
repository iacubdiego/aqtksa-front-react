import React from 'react';
import serviciotecnico_banner from '../../images/serviciosCarousel1.png';

export default function ServicioTecnico() {
  return (
    <>
   <div className="container mx-auto">
    <div className="relative p-4">
    <div className="bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
    <div className="">
    <div className="">
      <img
        className="object-cover h-60 w-full md:rounded-l-lg"
        src={serviciotecnico_banner}
        alt="Imagen"
      />
    </div>
  
    <div className="justify-center p-4">
      <h2 className="text-4xl font-bold mb-4">Nuestro Laboratorio</h2>
      <p>Se encuentra gerenciado por un ingeniero con más de 35 años de experiencia en la reparación y calibración de instrumental electrónico, reflejo de su amplia trayectoria desarrollada en los laboratorios de HP y Agilent en Argentina. Junto a nuestros capacitados técnicos le demostrarán su vocación de servicio.</p>
      <ul className="mt-4 list-disc p-4">
        <li>Reparación de todo tipo de instrumental</li>
        <li>Cobertura de garantías</li>
        <li>Actualizaciones de hardware y software</li>
        <li>Verificaciones</li>
        <li>Calibraciones</li>
        <li>Mantenimiento preventivo (bajo contrato)</li>
      </ul>
    </div>
  </div>
</div>  
</div>  
</div>  
    </>
  );
}
