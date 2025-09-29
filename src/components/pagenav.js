import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const PageNav = ({ anchors }) => {
  return (
    <aside className="fixed right-0 h-screen content-center text-right lg:p-6">
      {anchors.map((anchor) => (
        <div className="flex flex-col font-semibold" key={anchor.name}>
          <div className="group flex justify-end">
            <button
              className="invisible cursor-pointer no-underline group-hover:visible"
              onClick={() => scrollTo('#' + anchor.link)}
            >
              {anchor.name}{' '}
            </button>
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
