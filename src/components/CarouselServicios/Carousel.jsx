import React from 'react';
import Slider from 'react-slick';
import ServiciosReparacion from './ServiciosReparacion';
import ServiciosConsultoria from './ServiciosConsultoria';
import ServiciosProductos from './ServiciosProductos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PrevArrow = (props) => (
  <button {...props} className="slick-arrow  slick-prev text-red-500">
    Prev
  </button>
);

const NextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    Next
  </button>
);
const Carousel = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Habilitar las flechas de navegación
    prevArrow: <PrevArrow />, // Componente personalizado para la flecha anterior
    nextArrow: <NextArrow />, // Componente personalizado para la flecha siguiente
  };


  return (
    <div className="container mx-auto">
    <div className="relative p-4">
    <Slider {...settings}>
      <div>
        <ServiciosReparacion />
      </div>
      <div>
        <ServiciosConsultoria />
      </div>
      <div>
        <ServiciosProductos />
      </div>
    </Slider>
      <ul className="flex justify-center p-2 mt-4 space-x-4">
      {/* Para cambiar 
      <li className="w-8 h-8 bg-gray-300 rounded-full"></li>
      <li className="w-8 h-8 bg-gray-300 rounded-full"></li>
      <li className="w-8 h-8 bg-gray-300 rounded-full"></li> */}
        </ul>
    </div>
    </div>
  );
};

export default Carousel;