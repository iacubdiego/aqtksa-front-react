import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

import producto_logo_ideal from '../images/producto_logo_ideal.png'
import producto_logo_albedo from '../images/producto_logo_albedo.png'
import producto_logo_itech from '../images/producto_logo_itech.png'
import producto_logo_ixia from '../images/producto_logo_ixia.png'
import producto_logo_keysight from '../images/producto_logo_keysight.png'
import producto_logo_oscillo from '../images/producto_logo_oscillo.png'
// import producto_logo_vaex from '../images/producto_logo_vaex.png'


export default function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full overflow-hidden">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
            <img src={producto_logo_ideal} alt="producto_logo_ideal" className="m-auto h-20 max-h-full w-auto max-w-full" />

              {/* <img
                src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              /> */}
            </li>
            <li>
            <img src={producto_logo_albedo} alt="producto_logo_albedo" className="m-auto h-20 max-h-full w-auto max-w-full" />

            </li>
            <li>
            <img src={producto_logo_itech} alt="producto_logo_itech" className="m-auto h-20 max-h-full w-auto max-w-full" />

            </li>
            <li>
            <img src={producto_logo_ixia} alt="producto_logo_ixia" className="m-auto h-20 max-h-full w-auto max-w-full" />

            </li>
            <li>
            <img src={producto_logo_keysight} alt="producto_logo_keysight" className="m-auto h-20 max-h-full w-auto max-w-full" />

            </li>
            <li>
            <img src={producto_logo_oscillo} alt="producto_logo_oscillo" className="m-auto h-20 max-h-full w-auto max-w-full" />

            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )
}