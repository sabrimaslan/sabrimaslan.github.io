import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Navigation = () => {
  return (
    <nav className="w-full items-start justify-center lg:flex lg:h-screen lg:basis-1/6 lg:flex-col">
      <div className="flex justify-between p-6 lg:fixed lg:h-full lg:flex-col lg:p-20">
        <div className="order-last p-4 lg:order-first lg:w-full lg:basis-1/3 lg:justify-start">
          <StaticImage
            src="../images/notion-face.png"
            placeholder="blurred"
            width={128}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt="Sabri Maslan"
          />
        </div>
        <div className="flex flex-col justify-center p-4 lg:basis-1/3">
          <Link
            className="pb-1 text-xl/6 font-normal hover:underline hover:underline-offset-4"
            to="/"
          >
            Intro
          </Link>
          <Link
            className="pb-1 text-xl/6 font-normal hover:underline hover:underline-offset-4"
            to="/works"
          >
            Works
          </Link>
          <Link
            className="pb-1 text-xl/6 font-normal hover:underline hover:underline-offset-4"
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="mt-6 hidden max-w-7xl flex-col justify-end p-4 lg:flex lg:basis-1/3">
          <a
            className="text-md/6 font-light no-underline underline-offset-4 hover:underline"
            href="https://www.linkedin.com/in/sabrimaslan"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
