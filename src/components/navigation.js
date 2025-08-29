import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Navigation = () => {
  return (
    <nav className="items-start justify-center pl-6 lg:col-span-2">
      <div className="flex justify-between py-6 lg:fixed lg:h-full lg:flex-col lg:py-20">
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
        <div className="flex flex-col justify-center lg:basis-1/3">
          <Link
            className="pb-1 text-xl font-normal hover:underline hover:underline-offset-4 lg:pl-6"
            to="/"
          >
            Intro
          </Link>
          <Link
            className="pb-1 text-xl font-normal hover:underline hover:underline-offset-4 lg:pl-6"
            to="/works"
          >
            Works
          </Link>
          <Link
            className="pb-1 text-xl font-normal hover:underline hover:underline-offset-4 lg:pl-6"
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="hidden lg:block lg:flex-col lg:justify-end lg:pt-25.5">
          <a
            className="text-md align-text-bottom font-semibold no-underline underline-offset-4 hover:underline lg:pl-6"
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
    </nav>
  )
}

export default Navigation
