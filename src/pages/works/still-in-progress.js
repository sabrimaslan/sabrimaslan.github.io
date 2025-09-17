import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const WorksPage = () => {
  return (
    <Layout>
      <main className="h-fit min-h-fit gap-6 p-6 lg:col-span-10 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:p-0">
        <div className="lg:col-span-10">
          <div className="mb-5 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em] lg:mb-0">
            Digitalized.
          </div>
        </div>
        <section className="lg:col-span-4 lg:content-start">
          <p className="mb-4 text-lg font-bold">
            Behind every successful digital transformation lies a story — of
            vision, challenge, collaboration, and delivery.
          </p>
          <p className="mb-4">
            This collection shares some of those stories from my career, where
            leadership met hands-on engineering to build solutions that matter.
          </p>
          <p className="mb-4">
            From navigating complex regulatory landscapes to architecting
            scalable systems and empowering cross-functional teams, each case
            offers a glimpse into how strategy and execution intertwine.
          </p>
        </section>
        <section className="lg:col-span-4">
          <p className="mb-4">
            These highlights are more than just projects; they are journeys of
            innovation, resilience, and impact — brought to life by passionate
            teams working toward a common goal.
          </p>
          <p className="mb-4 text-xl font-semibold">
            Bridging strategy and engineering to accelerate digital innovation.
          </p>

          <p className="mb-4">
            Take a look to see how I approach technology and leadership to
            create meaningful outcomes, one challenge at a time.
          </p>
          <div className="text-md flex justify-end py-6 font-semibold">
            Scroll{' '}
            <StaticImage
              src="../../images/scroll.png"
              className="rotate-45"
              placeholder="blurred"
              height={24}
              quality={100}
              formats={['auto', 'webp', 'avif']}
              alt="Scroll"
            />
          </div>
        </section>
        <div className="hidden lg:col-span-2 lg:block"></div>
      </main>
    </Layout>
  )
}

export default WorksPage

export const Head = () => <title>Works : Sabri Maslan</title>
