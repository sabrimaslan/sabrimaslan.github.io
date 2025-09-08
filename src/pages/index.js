import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <main className="h-fit min-h-fit gap-6 p-6 lg:col-span-10 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:p-0">
        <div className="hidden lg:col-span-1 lg:block"></div>
        <aside className="lg:col-span-2 lg:content-center">
          <div className="pb-2 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em]">
            Hello.
          </div>
          <div className="text-2xl font-semibold">
            <span className="font-light lg:-ml-10">I'm </span>Sabri Maslan
          </div>
          <div className="text-xl font-normal">Lead, IT & UI/UX</div>
        </aside>
        <section className="lg:col-span-5 xl:col-span-4">
          <h4 className="py-6 text-2xl font-semibold">Prologue</h4>
          <p className="mb-4">
            This portfolio features a curated selection of my work, reflecting
            over 15 years of experience across design, engineering, and digital
            leadership.
          </p>
          <p className="mb-4">
            For more than a decade, I’ve led teams with a hands-on,
            sleeves-rolled-up approach — collaborative, grounded, and deeply
            involved in the day-to-day.
          </p>
          <p className="mb-0">
            If you’re building something ambitious — I’m in.
          </p>
          <div className="flex justify-end pt-8">
            <Link
              className="text-md align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
              to="/latest"
            >
              View my latest resume here
              <StaticImage
                src="../images/scroll.png"
                className="rotate-270"
                placeholder="blurred"
                height={24}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Scroll"
              />
            </Link>
          </div>
        </section>
        <div className="hidden lg:col-span-2 lg:block xl:col-span-3"></div>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Sabri Maslan</title>
