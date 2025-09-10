import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const OnPrintsPage = () => {
  return (
    <Layout>
      <main className="lg:col-span-10 snap-container">
        <div className="min-h-screen gap-6 px-6 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:p-0 snap-section">
          <div className="hidden lg:col-span-1 lg:block"></div>
          <aside className="py-6 lg:col-span-2 lg:pt-26">
            <h4 className="text-md font-light tracking-[.125em] uppercase">
              Freelance
            </h4>
            <p className="text-xl font-semibold">
              <span className="font-light">On </span>Prints
            </p>
          </aside>
          <section className="lg:col-span-4">
            <div className="py-6">
                <StaticImage
                  src="../../images/prints-icon.png"
                  placeholder="blurred"
                  height={56}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="On Web"
                />
              </div>
              <p className="mb-2">
                Part of my work that involves other media. This includes designing for advertisements on newspaper and magazines, brochures, name cards, wedding invitations and other prints.
              </p>
              <p className="mb-2">
                The tools used for most of these works are vector graphic editors (Adobe Illustrator, CorelDRAW and Inkscape) and IMAGINATION :)
              </p>
          </section>
          <div className="hidden lg:col-span-3 lg:block"></div>
        </div>
      </main>
    </Layout>
  )
}

export default OnPrintsPage

export const Head = () => (
  <title>Freelance - On Prints : Sabri Maslan</title>
)
