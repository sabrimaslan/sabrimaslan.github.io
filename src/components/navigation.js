import React, { Component } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import MenuIcon from '../components/menu'
import CloseIcon from '../components/close'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.overlay = React.createRef()
  }

  handleClick = () => {
    this.overlay.current.classList.toggle('hidden')
  }

  render() {
    return (
      <nav className="justify-end lg:h-screen lg:col-span-2">
        <div className="text-right fixed lg:hidden p-6 w-full lg:w-auto z-1">
          <button
            onClick={this.handleClick}
            className="lg:hidden"
          >
            <MenuIcon />
          </button>
        </div>
        <div className="bg-white hidden text-right fixed lg:flex p-6 lg:p-0 h-full w-full lg:w-auto z-10" ref={this.overlay}>
          <button
            onClick={this.handleClick}
            className="lg:hidden"
          >
            <CloseIcon />
          </button>
          <div className='flex-col text-left h-screen items-stretch content-between'>
            <div className="animate__fadeIn animate__animated justify-between py-6 lg:fixed lg:h-full lg:flex-col lg:px-6 lg:py-20 flex">
              <div className="order-last lg:order-first">
                <StaticImage
                  src="../images/notion-face.png"
                  placeholder="blurred"
                  width={128}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Sabri Maslan"
                />
              </div>
              <div className="flex flex-col justify-center lg:basis-1/3 lg:px-6">
                <Link
                  className="pb-1 text-xl font-normal hover:underline hover:underline-offset-4"
                  activeClassName="font-semibold"
                  to="/"
                >
                  Intro
                </Link>
                <Link
                  className="pb-1 text-xl font-normal hover:underline hover:underline-offset-4"
                  activeClassName="font-semibold"
                  to="/works"
                >
                  Works
                </Link>
                <Link
                  className="pb-1 text-xl font-normal hover:underline hover:underline-offset-4"
                  activeClassName="font-semibold"
                  to="/about"
                >
                  About
                </Link>
              </div>
              <div className="hidden lg:block lg:flex-col lg:justify-end lg:px-6 lg:pt-25.5">
                <a
                  className="text-md align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
                  href="https://www.linkedin.com/in/sabrimaslan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <StaticImage
                    src="../images/scroll.png"
                    className="rotate-270"
                    placeholder="blurred"
                    height={24}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Scroll"
                  />
                </a>
              </div>
            </div>
            <div className="animate__fadeIn animate__animated animate__slow lg:hidden lg:flex-col lg:justify-end lg:px-6 lg:pt-25.5">
              <a
                className="text-md align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
                href="https://www.linkedin.com/in/sabrimaslan"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <StaticImage
                  src="../images/scroll.png"
                  className="rotate-270"
                  placeholder="blurred"
                  height={24}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Scroll"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
