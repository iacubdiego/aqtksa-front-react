/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react"

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const wrapperRef = useRef(null)

  const navigationItems = [
    {
      linkName: "Keysight Instrumentos",
    },
    {
      linkName: "Keysight ICT",
    },
    {
      linkName: "Ixia",
    },
    {
      linkName: "MVG",
    },
    {
      linkName: "Oscilloquartz",
    },
    {
      linkName: "Albedo Telecom",
    },
    {
      linkName: "Ideal",
    },
    {
      linkName: "VeEX",
    },
    {
      linkName: "Itech",
    },
  ]

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  const handleKeyDown = e => {
    if (isOpen) {
      e.preventDefault()

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === navigationItems.length - 1) {
            setCurrentItem(0)
          } else {
            setCurrentItem(currentItem + 1)
          }
          break
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(navigationItems.length - 1)
          } else {
            setCurrentItem(currentItem - 1)
          }
          break
        // Escape
        case 27:
          setCurrentItem(1)
          setIsOpen(false)
          break
        default:
          break
      }
    }
  }

  return (
    <>
      {/* <!-- Component: Basic dropdown menu--> */}
      <div className="relative inline-flex " id="dropdown">
        {/*  <!--  Start Dropdown trigger --> */}
        <button
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded font-medium tracking-wide transition duration-300 "
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
          ref={wrapperRef}
        >
          <span>Marcas</span>
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="t-01 d-01"
              role="graphics-symbol"
            >
              <title id="t-01">Button icon</title>
              <desc id="d-01">An icon describing the buttons usage</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          {navigationItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={` ${
                    index === currentItem
                      ? "bg-gray-50 text-gray-500"
                      : "bg-none text-slate-500"
                  } flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-500 focus:bg-gray-50 focus:text-gray-600 focus:outline-none focus-visible:outline-none`}
                  href="#"
                  aria-current={index + 1 === currentItem ? "page" : "false"}
                >
                  <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                    <span className="truncate leading-5">{item.linkName}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
        {/*  <!-- End Menu list --> */}
      </div>
      {/* <!-- End Basic dropdown menu--> */}
    </>
  )
}