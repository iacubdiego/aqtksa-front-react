import React from 'react'
import banner_contactos from '../../images/banner_contactos2.png';

const Nosotros = () => {
    return(
        <>
        <div className="container mx-auto">
         <div className="relative p-4">
         <div className="bg-gradient-to-r from-slate-200 to-slate-50 p-4 rounded-lg shadow-lg">
         <div className="">
         <div className="">
           <img
             className="object-cover mx-auto h-60 w-3/4 md:rounded-l-lg"
             src={banner_contactos}
             alt="Imagen"
           />
         </div>
       
         <div className="justify-center p-4">
           <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
           <p>Somos un empresa conformada en 2002 por profesionales con más de 30 años de desempeño en el área de instrumental electrónico.
            <br />
            <br />
            Luego de una larga trayectoria dentro de Hewlett Packard/Agilent Technologies instrumentos, actualmente Keysight Technologies, desempeñando tareas de reparación, calibración, soporte y ventas; tenemos el placer de haber sido seleccionados por Agilent para representar sus soluciones en las empresas de Telecomunicaciones de Argentina por nuestra vocación de servicio y soporte provisto a nuestros clientes.
            <br />
            <br />
            Nos focalizamos en brindar soluciones de medición, contamos con un equipo dinámico de profesionales altamente capacitado desarrollando las siguientes actividades:
            <br />
            <br />
            Provisión de instrumentos, soporte técnico, cobertura de garantías, reparación y calibración, consultoría, entrenamientos en tecnología y equipamiento, desarrollo e integración de soluciones tecnológicas acorde a las necesidades del cliente.
            </p>
         </div>
       </div>
     </div>  
     </div>  
     </div>  
         </>
    )
}

export default Nosotros
