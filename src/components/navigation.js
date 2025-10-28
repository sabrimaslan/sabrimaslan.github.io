import React, { useRef } from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import MenuIcon from '../components/menu'
import CloseIcon from '../components/close'
import UpRightIcon from '../components/upright'

const Navigation = ({ siteTitle, menuLinks }) => {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.classList.toggle('hidden')
  }

  return (
    <nav className="justify-end lg:col-span-2 lg:h-screen">
      <div className="fixed z-5 w-full p-6 text-right lg:hidden lg:w-auto">
        <button onClick={handleClick} className="lg:hidden">
          <MenuIcon />
        </button>
      </div>
      <div
        className="fixed z-10 hidden h-full w-full bg-base-100 p-6 text-right lg:flex lg:w-auto lg:p-0"
        ref={inputRef}
      >
        <button onClick={handleClick} className="lg:hidden">
          <CloseIcon />
        </button>
        <div className="h-screen flex-col content-between items-stretch text-left">
          <div className="animate__fadeIn animate__animated flex justify-between py-6 lg:fixed lg:h-full lg:flex-col lg:px-6 lg:py-20">
            <div className="order-last lg:order-first">
              <StaticImage
                src="../images/notion-face.png"
                placeholder="blurred"
                width={128}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt={siteTitle}
              />
            </div>
            <div className="flex flex-col justify-center lg:basis-1/3 lg:px-4">
              {menuLinks.map(route => (
                <Link
                  className="pb-1 text-xl font-normal hover:underline hover:underline-offset-4"
                  activeClassName="font-semibold"
                  key={route.name}
                  to={route.link}
                >
                  {route.name}
                </Link>
              ))}
            </div>
            <div className="fixed top-60 lg:relative lg:top-auto lg:flex lg:px-4 lg:pt-25.5">
              <div className='flex'>
                <a
                  className="text-md align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
                  href="https://www.linkedin.com/in/sabrimaslan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn{' '}
                </a>
                <UpRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation