import React from 'react';
import Slider from 'react-slick';
import Servicios from './Servicios';

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Habilitar las flechas de navegación
    prevArrow: <PrevArrow />, // Componente personalizado para la flecha anterior
    nextArrow: <NextArrow />, // Componente personalizado para la flecha siguiente
  };


  return (
    <div className="relative p-4">
    <Slider {...settings}>
      <div>
        <Servicios />
      </div>
      <div>
        <Servicios />
      </div>
      <div>
        <Servicios />
      </div>
    </Slider>
      <ul className="flex justify-center mt-4">
        </ul>
    </div>
  );
};

export default Carousel;