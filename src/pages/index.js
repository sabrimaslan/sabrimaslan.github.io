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
          <div className="animate__animated animate__fadeInUp animate__faster pb-2 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em]">
            Innovate.
          </div>
          <div className="animate__animated animate__fadeInUp animate__fast text-2xl font-semibold">
            Sabri Maslan
          </div>
          <div className="animate__animated animate__fadeInUp text-xl font-normal">
            Head, Engineering & Innovation
          </div>
        </aside>
        <section className="animate__animated animate__fadeIn animate__delay lg:col-span-5 xl:col-span-4">
          <h4 className="animate__animated animate__fadeInUp py-6 text-2xl font-semibold">
            Prologue
          </h4>
          <p className="animate__animated animate__fadeInUp animate__fast mb-4">
            This portfolio presents a curated selection of my work, reflecting over 15 years of experience leading digital innovation, engineering and enterprise technology in complex, regulated environments.
          </p>
          <p className="animate__animated animate__fadeInUp mb-4">
            For more than a decade, I have combined hands-on technical expertise with strategic leadership—building scalable platforms, fostering high-performing teams and guiding transformative digital initiatives from concept to delivery.
          </p>
          <p className="animate__animated animate__fadeInUp animate__slow mb-0">
            If you’re building something ambitious — I’m in.
          </p>
          <div className="flex justify-between pt-8">
            <Link
              className="text-md animate__animated animate__fadeInUp animate__slow align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
              to="/latest"
            >
              View my resume
            </Link>
            <Link
              className="text-md animate__animated animate__fadeInUp animate__slower align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
              to="/works"
            >
              Explore my works
              <StaticImage
                src="../images/scroll.png"
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
