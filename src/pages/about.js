import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <main className="flex w-full flex-col lg:basis-5/6">
        <div className="flex h-dvh w-full flex-col lg:flex-row lg:justify-items-center">
          <div className="hidden flex-col lg:flex lg:h-screen lg:basis-1/10"></div>
          <aside className="lg:basis-1/5">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="hidden items-end p-4 lg:flex lg:basis-2/5 lg:justify-start">
                &nbsp;
              </div>
              <div className="p-4 lg:basis-3/5">
                <div className="font-[Sometype_Mono] text-6xl/12 font-bold -tracking-[.175em]">
                  FAQ.
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:basis-3/5 xl:basis-2/5">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="flex items-end p-4 lg:basis-2/5 lg:justify-start">
                <div className="text-xl/6 font-semibold">
                  (Fine, Actually Quirky)
                </div>
              </div>
              <div className="p-4 lg:basis-3/5">
                <div className="font-normal">
                  <p className="mb-4">
                    <ul>
                      <li className="mb-2 -ml-3">
                        &bull;{' '}
                        <span className="font-semibold italic">
                          Do I lead teams?
                        </span>
                        <br />
                        <span className="ml-3">
                          Yes — and I build them to lead themselves, too.
                        </span>
                      </li>
                      <li className="mb-2 -ml-3">
                        &bull;{' '}
                        <span className="font-semibold italic">
                          Do I still design & code things myself?
                        </span>
                        <br />
                        <span className="ml-3">Also yes.</span>
                      </li>
                      <li className="mb-2 -ml-3">
                        &bull;{' '}
                        <span className="font-semibold italic">
                          Do I drink too much coffee?
                        </span>
                        <br />
                        <span className="ml-3">Highly likely.</span>
                      </li>
                      <li className="mb-2 -ml-3">
                        &bull;{' '}
                        <span className="font-semibold italic">
                          Do I love turning chaos into clarity?
                        </span>
                        <br />
                        <span className="ml-3">Every time.</span>
                      </li>
                    </ul>
                  </p>
                  <div className="flex justify-end text-xl/8 font-semibold">
                    Scroll{' '}
                    <StaticImage
                      src="../images/scroll.png"
                      placeholder="blurred"
                      height={32}
                      quality={100}
                      formats={['auto', 'webp', 'avif']}
                      alt="Scroll"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <hr className="mx-auto my-4 h-1 w-48 border-0 bg-gray-100 lg:my-10 dark:bg-gray-300"></hr>
        <div className="flex h-dvh flex-col lg:w-full lg:justify-items-center">
          <section className="w-full basis-2/5">
            <div className="flex h-full max-w-full flex-col items-start justify-end overflow-x-auto p-6 lg:p-0">
              <div className="p-4 pb-0 lg:pb-4">
                <p className="mb-2 text-2xl/8 font-semibold">Epilogue</p>
              </div>
            </div>
          </section>
          <aside className="basis-3/5">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4 py-0 lg:py-4">
                  <p className="mb-4 text-lg/6 font-bold">
                    I build digital things that work—and teams that work even
                    better.
                  </p>
                  <p className="mb-4">
                    With over 15 years of experience spanning UI/UX,
                    engineering, and product delivery, I’ve led cross-functional
                    teams through complex challenges — from designing better
                    user experiences to aligning tech execution with evolving
                    business goals.
                  </p>
                  <p className="mb-4">
                    I don’t just manage from the top; I lead with sleeves rolled
                    up. My approach blends strategy with hands-on delivery —
                    making sure the vision is clear, the execution is tight, and
                    the team is empowered every step of the way.
                  </p>
                  <p className="mb-4">
                    This portfolio won’t show you everything — like how I bring
                    calm to chaos or clarity to cluttered backlogs — but it’s a
                    start.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4 pt-0 lg:pt-4">
                  <p className="mb-4">
                    Much of my work sits at the intersection of design thinking,
                    system architecture, and team culture. I’ve built and scaled
                    design systems that bring consistency and speed across
                    teams. I’ve introduced product thinking into engineering
                    workflows. And I’ve led teams through transformation —
                    whether it’s a company-wide platform shift, a product
                    overhaul, or spinning up a new tech division from scratch.
                  </p>
                  <p className="mb-4 text-2xl/8 font-semibold">
                    Build something worth staying for.
                  </p>
                  <p className="mb-4">
                    I’ve worked in global MNCs, GLCs, startups, and scaling tech
                    companies. That range has taught me how to adapt quickly,
                    lead with clarity, and stay focused on what matters:
                    building systems that are user-centered, teams that are
                    self-driven, and outcomes that stick.
                  </p>
                  <p className="mb-4">
                    This portfolio is a glimpse into that journey.
                  </p>
                  <p className="mb-4 flex justify-end">
                    <Link
                      className="text-md/6 align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
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
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About : Sabri Maslan</title>
