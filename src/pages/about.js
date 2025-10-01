import * as React from 'react'
import TopIcon from '../components/top'
import DownIcon from '../components/down'
import Layout from '../components/layout'
import PageNav from '../components/pagenav'
import scrollTo from 'gatsby-plugin-smoothscroll'

const anchors = [
  {
    name: 'Epilogue',
    link: 'epilogue',
  },
  {
    name: 'FAQ',
    link: 'faq',
  },
]

const AboutPage = () => {
  return (
    <Layout>
      <main className="snap-container p-6 lg:col-span-10 lg:p-0">
        <PageNav anchors={anchors} />
        <section
          className="snap-section h-fit min-h-fit gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center"
          id="epilogue"
        >
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">Epilogue</h4>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-lg/6 font-bold">
              I build digital systems that thrive—and teams that work even
              better.
            </p>
            <p className="mb-4">
              With over 15 years of experience spanning engineering, UI/UX, and
              product delivery, I have led cross-functional teams through
              complex challenges — from crafting seamless user experiences to
              aligning technology execution with dynamic business goals.
            </p>
            <p className="mb-4">
              My work sits at the intersection of design thinking, system
              architecture, and team culture. I have built scalable design
              systems, integrated product thinking into engineering workflows,
              and led successful transformations — from company-wide platform
              shifts to launching new technology divisions.
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4">
              I don’t manage from the sidelines. I lead with my sleeves rolled
              up, blending strategic vision with hands-on delivery. Ensuring the
              vision is clear, execution is precise, and teams are empowered at
              every step.
            </p>
            <p className="mb-4 text-2xl font-semibold">
              Build something worth staying for.
            </p>
            <p className="mb-4">
              Having worked with global MNCs, GLCs, startups, and scaling
              companies, I have honed the ability to adapt quickly, lead with
              clarity, and stay focused on what matters: building user-centered
              systems, self-driven teams, and lasting impact.
            </p>
            <p>
              This portfolio is a glimpse into that journey — one driven by
              commitment, collaboration, and continuous innovation.
            </p>
            <div className="text-md flex justify-end font-semibold">
              <button
                className="animate-bounce cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#faq')}
              >
                <DownIcon />
              </button>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen content-center gap-5 lg:grid lg:grid-cols-10"
          id="faq"
        >
          <div className="hidden lg:col-span-1 lg:block"></div>
          <aside className="lg:col-span-2 lg:content-center">
            <div className="pb-2 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em]">
              FAQ
            </div>
            <div className="hidden text-2xl font-semibold lg:block">&nbsp;</div>
            <div className="hidden text-xl font-normal lg:block">&nbsp;</div>
          </aside>
          <div className="hidden lg:col-span-1 lg:block"></div>
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
              <div className="text-md animate__animated animate__fadeInUp animate__slower flex justify-end gap-2 font-semibold">
                <button
                  className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                  onClick={() => scrollTo('#epilogue')}
                >
                  <TopIcon />
                </button>
              </div>
            </div>
          </section>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About : Sabri Maslan</title>
