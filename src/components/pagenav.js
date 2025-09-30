import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const PageNav = ({ anchors }) => {
  return (
    <aside className="fixed right-0 z-1 h-screen content-center text-right lg:p-2">
      {anchors.map((anchor) => (
        <div className="flex flex-col font-semibold" key={anchor.name}>
          <div className="group flex justify-end">
            <div className="hidden lg:block">
              <button
                className="invisible cursor-pointer no-underline group-hover:visible"
                onClick={() => scrollTo('#' + anchor.link)}
              >
                {anchor.name}{' '}
              </button>
            </div>
            <button
              className="cursor-pointer px-2 font-thin group-hover:font-black"
              onClick={() => scrollTo('#' + anchor.link)}
            >
              &bull;
            </button>
          </div>
        </div>
      ))}
    </aside>
  )
}

export default PageNav
