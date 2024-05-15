import Banner from '../../components/Banner';
import Carousel from '../../components/CarouselServicios/Carousel';
import Galeria from '../../components/Galeria';
import WhatsAppIcon from '../../components/WhatsAppIcon';

export default function Home() {
    return (
    <>
      {/* Banner */}
      <Banner />
      {/* Carousel */}
      <Carousel />
      {/* Galeria */}
      <Galeria />
      {/* Agregar Numero de Telefono */}
      <WhatsAppIcon phoneNumber="NUMERO_DE_TELEFONO" />
    </>
    )}