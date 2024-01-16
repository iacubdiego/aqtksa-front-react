import React from 'react'
import Products from '../Products'

export default function ListOfProducts ({products}) {
  return <div >
    {
      products.map(({id, image, title}) =>
        <Products
          id={id}
          key={id}
          image={image}
          title={title}
        />
      )
    }
  </div>
}