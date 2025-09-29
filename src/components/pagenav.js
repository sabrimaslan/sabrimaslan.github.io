import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const PageNav = () => {
  return (
    <aside className="fixed right-0 h-screen content-center text-right lg:p-6">
      <div className="flex flex-col font-semibold">
        <div className="group flex justify-end">
          <button
            className="invisible cursor-pointer no-underline group-hover:visible"
            onClick={() => scrollTo('#prologue')}
          >
            Prologue{' '}
          </button>
          <button
            className="cursor-pointer px-2 font-thin group-hover:font-black"
            onClick={() => scrollTo('#prologue')}
          >
            &bull;
          </button>
        </div>
      </div>
      <div className="flex flex-col font-semibold">
        <div className="group flex justify-end">
          <button
            className="invisible cursor-pointer no-underline group-hover:visible"
            onClick={() => scrollTo('#philosophy')}
          >
            Philosophy{' '}
          </button>
          <button
            className="cursor-pointer px-2 font-thin group-hover:font-black"
            onClick={() => scrollTo('#philosophy')}
          >
            &bull;
          </button>
        </div>
      </div>
      <div className="flex flex-col font-semibold">
        <div className="group flex justify-end">
          <button
            className="invisible cursor-pointer no-underline group-hover:visible"
            onClick={() => scrollTo('#achievements')}
          >
            Achievements{' '}
          </button>
          <button
            className="cursor-pointer px-2 font-thin group-hover:font-black"
            onClick={() => scrollTo('#achievements')}
          >
            &bull;
          </button>
        </div>
      </div>
      <div className="flex flex-col font-semibold">
        <div className="group flex justify-end">
          <button
            className="invisible cursor-pointer no-underline group-hover:visible"
            onClick={() => scrollTo('#testimonials')}
          >
            Testimonials{' '}
          </button>
          <button
            className="cursor-pointer px-2 font-thin group-hover:font-black"
            onClick={() => scrollTo('#testimonials')}
          >
            &bull;
          </button>
        </div>
      </div>
    </aside>
  )
}

export default PageNav
