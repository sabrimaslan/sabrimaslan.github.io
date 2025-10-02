import React, { Component } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import MenuIcon from '../components/menu'
import CloseIcon from '../components/close'
import UpRightIcon from '../components/upright'

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
      <nav className="justify-end lg:col-span-2 lg:h-screen">
        <div className="fixed z-5 w-full p-6 text-right lg:hidden lg:w-auto">
          <button onClick={this.handleClick} className="lg:hidden">
            <MenuIcon />
          </button>
        </div>
        <div
          className="fixed z-10 hidden h-full w-full bg-white p-6 text-right lg:flex lg:w-auto lg:p-0"
          ref={this.overlay}
        >
          <button onClick={this.handleClick} className="lg:hidden">
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
                  alt="Sabri Maslan"
                />
              </div>
              <div className="flex flex-col justify-center lg:basis-1/3 lg:px-4">
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
                  to="/portfolio"
                >
                  Portfolio
                </Link>
                <Link
                  className="pb-1 text-xl font-normal hover:underline hover:underline-offset-4"
                  activeClassName="font-semibold"
                  to="/about"
                >
                  About
                </Link>
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
}

export default Navigation
