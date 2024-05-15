import React, { useState } from "react";
// import { Link } from "wouter";

// import producto_ideal_lanxpolore from '../../images/products/producto_ideal_lanxplorer.png'
import producto_key_signal from "../images/products/producto_key_signal.png";
import producto_itech_Power_Meter from "../images/products/producto_itech_Power_Meter.png";
import producto_itech_LED_High_Power from "../images/products/producto_itech_LED_High_Power.png";
// import banner_oscilloquartz from '../images/banner_oscilloquartz.png'
import banner_keysight from "../images/banner_keysight.png";
import logoMercado from "../images/mercadolibreLogo.png";

const products = [
  {
    id: 1,
    image: producto_itech_Power_Meter,
    title: "LanXPLORER",
    description:
      "In-Line network tester for LAN management with active and passive troubleshooting capabilities for Ethernet connectivity and cabling issues in multi-media environments including copper,fibre and WiFi.",
    brand: "Ideal",
    brandbaner: "{banner_oscilloquartz}",
  },
  {
    id: 2,
    image: producto_itech_Power_Meter,
    title: "Power Meter",
    description:
      "Maximum input 600Vrms and 20Arms. Bandwidth 100KHZ. Voltage, Current, Power, Frequency, Harmonics. USB, GPIB, RS232, LAN remote control.",
    brand: "Itech",
    brandbaner: { banner_keysight },
  },
  {
    id: 3,
    image: producto_key_signal,
    title: "Signal Generators",
    description:
      "Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.",
    brand: "Keysight",
    brandbaner: { banner_keysight },
  },
  {
    id: 4,
    image: producto_itech_LED_High_Power,
    title: "LED High Power DC E-Load",
    description:
      "Simulate real output of LED lights. CR-LED mode. Duty ratio PWM dimming output port. I-pp/I-max. LED driver power dimming test.",
    brand: "Keysight",
  },
  {
    id: 5,
    image: producto_key_signal,
    title: "Signal Generators",
    description:
      "Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.",
    brand: "Keysight",
  },
  {
    id: 6,
    image: producto_key_signal,
    title: "Signal Generators",
    description:
      "Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.",
    brand: "Keysight",
  },
  {
    id: 7,
    image: producto_key_signal,
    title: "Signal Generators",
    description:
      "Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.",
    brand: "Keysight",
  },
  // Agrega más productos aquí
];

const Galeria = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedBrand === "" || product.brand === selectedBrand) &&
      (searchTerm === "" ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto">
      <div className="p-4 flex justify-content items-center mb-4">
        <select
          onChange={(e) => handleBrandFilter(e.target.value)}
          value={selectedBrand}
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Todos</option>
          <option value="Ideal">Ideal</option>
          <option value="Keysight">Keysight</option>
        </select>
        <input
          type="text"
          placeholder="Buscar producto"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-wrap gap-2 justify-center p-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-md p-2 shadow-md w-[200px]"
          >
            <div className="aspect-w-3 aspect-h-2">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover rounded-md w-full h-full shadow-md"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 line-clamp-3">
                {product.title}
              </h3>
              <p className="text-gray-600 line-clamp-3">
                {product.description}
              </p>
              <div className="flex justify-end m-2">
                <button className="p-2 bg-gray-100 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm md:text-base lg:text-md tracking-wide shadow-xl shadow-grey-200">
                  <a
                    href="https://articulo.mercadolibre.com.ar/MLA-1400485671-osciloscopio-20-mhz-doble-canal-gen-func-1-mhz-2-en-1-_JM#position=5&search_layout=stack&type=item&tracking_id=62004a24-28ef-4901-b0d6-c29883083579"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <div className="flex gap-2 inline-flex items-center justify-center">
                      <span className="text-sm md:text-xl lg:text-1xl font-bold">
                        Ver en
                      </span>
                      <img
                        src={logoMercado}
                        alt={logoMercado}
                        className="object-cover rounded-md w-full h-8 shadow-md"
                      />
                    </div>
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
