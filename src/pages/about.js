import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <main className="p-6 lg:col-span-10 lg:p-0 snap-container">
        <div className="h-fit min-h-fit gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center snap-section">
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">Epilogue</h4>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-lg/6 font-bold">
              I build digital things that work—and teams that work even better.
            </p>
            <p className="mb-4">
              With over 15 years of experience spanning UI/UX, engineering, and
              product delivery, I’ve led cross-functional teams through complex
              challenges — from designing better user experiences to aligning
              tech execution with evolving business goals.
            </p>
            <p className="mb-4">
              I don’t just manage from the top; I lead with sleeves rolled up.
              My approach blends strategy with hands-on delivery — making sure
              the vision is clear, the execution is tight, and the team is
              empowered every step of the way.
            </p>
            <p className="mb-4">
              This portfolio won’t show you everything — like how I bring calm
              to chaos or clarity to cluttered backlogs — but it’s a start.
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4">
              Much of my work sits at the intersection of design thinking,
              system architecture, and team culture. I’ve built and scaled
              design systems that bring consistency and speed across teams. I’ve
              introduced product thinking into engineering workflows. And I’ve
              led teams through transformation — whether it’s a company-wide
              platform shift, a product overhaul, or spinning up a new tech
              division from scratch.
            </p>
            <p className="mb-4 text-2xl font-semibold">
              Build something worth staying for.
            </p>
            <p className="mb-4">
              I’ve worked in global MNCs, GLCs, startups, and scaling tech
              companies. That range has taught me how to adapt quickly, lead
              with clarity, and stay focused on what matters: building systems
              that are user-centered, teams that are self-driven, and outcomes
              that stick.
            </p>
            <p>This portfolio is a glimpse into that journey.</p>
            <div className="text-md flex justify-end py-6 font-semibold">
              Scroll{' '}
              <StaticImage
                src="../images/scroll.png"
                placeholder="blurred"
                height={24}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Scroll"
              />
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </div>
        <div className="h-screen content-center gap-5 lg:grid lg:grid-cols-10 snap-section">
          <div className="hidden lg:col-span-1 lg:block"></div>
          <aside className="lg:col-span-2 lg:content-center">
            <div className="pb-2 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em]">
              FAQ.
            </div>
            <div className="hidden text-2xl font-semibold lg:block">&nbsp;</div>
            <div className="hidden text-xl font-normal lg:block">&nbsp;</div>
          </aside>
          <section className="lg:col-span-4">
            <h4 className="py-6 text-2xl font-semibold">
              (Fine, Actually Quirky)
            </h4>
            <div className="mb-4">
              <ul>
                <li className="mb-2 -ml-3">
                  &bull;{' '}
                  <span className="font-semibold italic">Do I lead teams?</span>
                  <br />
                  <span className="ml-3">
                    Yes — and I build them to lead, too.
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
            </div>
          </section>
          <div className="hidden lg:col-span-3 lg:block"></div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About : Sabri Maslan</title>
