import React, { useState } from 'react';

const products = [
  {
    id: 1,
    image: 'product1.jpg',
    title: 'Producto 1',
    description: 'Descripción del Producto 1',
    brand: 'Marca A',
  },
  {
    id: 2,
    image: 'product2.jpg',
    title: 'Producto 2',
    description: 'Descripción del Producto 2',
    brand: 'Marca B',
  },
  // Agrega más productos aquí
];

const Galeria = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedBrand === '' || product.brand === selectedBrand) &&
      (searchTerm === '' ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto">

    <div className="p-4 bg-gray-200 py-2 px-4 flex items-center">
        <img src="logo.png" alt="Logo de la marca" className="h-8 mr-2" />
        <h1 className="text-lg font-semibold">Nombre de la Marca</h1>
    </div>
  <div className="flex justify-between items-center mb-4">
    <select
      onChange={(e) => handleBrandFilter(e.target.value)}
      value={selectedBrand}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
    >
      <option value="">Todos</option>
      <option value="Marca A">Marca A</option>
      <option value="Marca B">Marca B</option>
      {/* Agrega más opciones de marca aquí */}
    </select>
    <input
      type="text"
      placeholder="Buscar producto"
      value={searchTerm}
      onChange={handleSearch}
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {filteredProducts.map((product) => (
      <div key={product.id} className="border border-gray-300 rounded-md p-4">
        <div className="flex">
          <div className="w-1/3">
            <img src={product.image} alt={product.title} className="w-full rounded-md" />
          </div>
          <div className="w-2/3 ml-4">
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Galeria;