// import React from 'react'
// import Products from '../Products'
// import './ListOfProduct.css'

// import producto_ideal_lanxpolore from '../images/producto_ideal_lanxplorer.png'
// import producto_key_signal from '../images/producto_key_signal.png'
// import producto_itech_Power_Meter from '../images/producto_itech_Power_Meter.png'
// import producto_itech_LED_High_Power from '../images/producto_itech_LED_High_Power.png'

// import banner_keysight from '../images/banner_keysight.png'

// const products = [
//   {
//     id: 1,
//     image: producto_ideal_lanxpolore,
//     title: 'LanXPLORER',
//     description: 'In-Line network tester for LAN management with active and passive troubleshooting capabilities for Ethernet connectivity and cabling issues in multi-media environments including copper,fibre and WiFi.',
//     brand: 'Ideal',
//     brandbaner: "{banner_oscilloquartz}",
//   },
//   {
//     id: 2,
//     image: producto_itech_Power_Meter,
//     title: 'Power Meter',
//     description: 'Maximum input 600Vrms and 20Arms. Bandwidth 100KHZ. Voltage, Current, Power, Frequency, Harmonics. USB, GPIB, RS232, LAN remote control.',
//     brand: 'Itech',
//     brandbaner: {banner_keysight},
//   },
//   {
//     id: 3,
//     image: producto_key_signal,
//     title: 'Signal Generators',
//     description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
//     brand: 'Keysight',
//     brandbaner: {banner_keysight},

//   },
//   {
//     id: 4,
//     image: producto_itech_LED_High_Power,
//     title: 'LED High Power DC E-Load',
//     description: 'Simulate real output of LED lights. CR-LED mode. Duty ratio PWM dimming output port. I-pp/I-max. LED driver power dimming test.',
//     brand: 'Keysight',
//   },
//   {
//     id: 5,
//     image: producto_key_signal,
//     title: 'Signal Generators',
//     description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
//     brand: 'Keysight',
//   },
//   {
//     id: 6,
//     image: producto_key_signal,
//     title: 'Signal Generators',
//     description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
//     brand: 'Keysight',
//   },
//   {
//     id: 7,
//     image: producto_key_signal,
//     title: 'Signal Generators',
//     description: 'Keysight offers the widest selection of baseband, RF, and microwave signal generator products from baseband to 67 GHz.',
//     brand: 'Keysight',
//   },
//   // Agrega más productos aquí
// ];


// export default function ListOfProducts ({products}) {
//   return <div className='ListOfProduct'>
//     {
//       products.map(({id, image, title}) =>
//         <Products
//           id={id}
//           key={id}
//           image={image}
//           title={title}
//         />
//       )
//     }
//   </div>
// }