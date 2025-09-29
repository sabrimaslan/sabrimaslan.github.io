import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import UpIcon from '../components/up'
import DownIcon from '../components/down'
import Layout from '../components/layout'
import PageNav from '../components/pagenav'

const words = [
  { tag: 'Innovate' },
  { tag: 'Develop' },
  { tag: 'Integrate' },
  { tag: 'Execute' }
]

const IndexPage = () => {
  const [word, setWord] = useState(words[0])
  const [textIdx, setTextIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIdx((i) => (i + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setWord(words[textIdx])
  }, [textIdx])

  return (
    <Layout>
      <main className="snap-container px-6 lg:col-span-10 lg:p-0">
        <PageNav />
        <section
          className="snap-section h-screen min-h-fit content-center gap-6 lg:grid lg:grid-cols-10"
          id="prologue"
        >
          <div className="hidden lg:col-span-1 lg:block"></div>
          <aside className="lg:col-span-3 lg:content-center">
            <div className="animate__animated animate__fadeInUp animate__faster pb-2 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em]">
              <span className="animate__animated animate__fadeInUp animate__slow">
                {word.tag}
              </span>
            </div>
            <div className="animate__animated animate__fadeInUp animate__fast text-2xl font-semibold">
              Sabri Maslan
            </div>
            <div className="animate__animated animate__fadeInUp text-xl font-normal">
              Head, Engineering & Innovation
            </div>
            <div className="mt-6">
              <Link
                className="text-md animate__animated animate__fadeInUp animate__slow align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
                to="/latest"
              >
                View my resume
              </Link>
            </div>
          </aside>
          <article className="animate__animated animate__fadeIn animate__delay lg:col-span-4">
            <h4 className="animate__animated animate__fadeInUp py-6 text-2xl font-semibold">
              Prologue
            </h4>
            <p className="animate__animated animate__fadeInUp animate__fast mb-4">
              This portfolio presents a curated selection of my work, reflecting
              over 15 years of experience leading digital innovation,
              engineering and enterprise technology in complex, regulated
              environments.
            </p>
            <p className="animate__animated animate__fadeInUp mb-4">
              For more than a decade, I have combined hands-on technical
              expertise with strategic leadership—building scalable platforms,
              fostering high-performing teams and guiding transformative digital
              initiatives from concept to delivery.
            </p>
            <p className="animate__animated animate__fadeInUp animate__slow mb-0">
              If you’re building something ambitious — I’m in.
            </p>
            <div className="flex justify-between py-6">
              <div className="text-md animate__animated animate__fadeInUp animate__slower flex font-semibold">
                <button
                  className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                  onClick={() => scrollTo('#philosophy')}
                >
                  Philosophy{' '}
                </button>
                <span className="animate-bounce px-2">
                  <DownIcon />
                </span>
              </div>
            </div>
          </article>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit gap-6 py-10 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:py-20"
          id="philosophy"
        >
          <div className="hidden lg:col-span-2 lg:block"></div>
          <div className="lg:col-span-8">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Leadership Philosophy
            </h4>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
          <section className="lg:col-span-4 lg:content-start">
            <h5 className="text-lg font-semibold">Empowering Talent:</h5>
            <p className="mb-4">
              I believe that the true currency of a high-performing organization
              is talent. By mentoring, advocating for growth, and unlocking
              autonomy, I empower teams to surpass expectations.
            </p>
            <h5 className="text-lg font-semibold">
              Driving Change Through Collaboration:
            </h5>
            <p className="mb-4">
              Sustainable transformation demands empathy, clarity, and
              alignment. I champion cross-functional dialogue, transparency, and
              shared objectives, ensuring every stakeholder becomes an agent of
              change.
            </p>
            <h5 className="text-lg font-semibold">
              Strategic Vision Executed with Technical Excellence:
            </h5>
            <p className="mb-4">
              Business strategy only thrives through rigorous technical
              execution. I bridge vision and delivery, translating bold ideas
              into scalable systems that advance both user experience and
              business value.
            </p>
            <h5 className="text-lg font-semibold">Adaptable Leadership:</h5>
            <p className="mb-4">
              In complexity and disruption, adaptability wins. My leadership
              flexes between coach, architect, and strategist, depending on what
              teams and outcomes demand in the moment.
            </p>
            <div className="flex justify-between py-6">
              <div className="text-md animate__animated animate__fadeInUp animate__slower flex justify-end font-semibold">
                <button
                  className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                  onClick={() => scrollTo('#achievements')}
                >
                  Achievements{' '}
                </button>
                <span className="animate-bounce px-2">
                  <DownIcon />
                </span>
              </div>
              <div className="text-md animate__animated animate__fadeInUp animate__slower flex justify-end font-semibold">
                <button
                  className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                  onClick={() => scrollTo('#prologue')}
                >
                  Prologue{' '}
                </button>
                <span className="animate-bounce px-2">
                  <UpIcon />
                </span>
              </div>
            </div>
          </section>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit gap-6 py-10 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:py-20"
          id="achievements"
        >
          <div className="hidden lg:col-span-2 lg:block"></div>
          <div className="lg:col-span-8">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Key Achievements
            </h4>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
          <section className="lg:col-span-4 lg:content-start">
            <h5 className="text-lg font-semibold">Empowering Talent:</h5>
            <p className="mb-4">
              I believe that the true currency of a high-performing organization
              is talent. By mentoring, advocating for growth, and unlocking
              autonomy, I empower teams to surpass expectations.
            </p>
            <h5 className="text-lg font-semibold">
              Driving Change Through Collaboration:
            </h5>
            <p className="mb-4">
              Sustainable transformation demands empathy, clarity, and
              alignment. I champion cross-functional dialogue, transparency, and
              shared objectives, ensuring every stakeholder becomes an agent of
              change.
            </p>
            <h5 className="text-lg font-semibold">
              Strategic Vision Executed with Technical Excellence:
            </h5>
            <p className="mb-4">
              Business strategy only thrives through rigorous technical
              execution. I bridge vision and delivery, translating bold ideas
              into scalable systems that advance both user experience and
              business value.
            </p>
            <h5 className="text-lg font-semibold">Adaptable Leadership:</h5>
            <p className="mb-4">
              In complexity and disruption, adaptability wins. My leadership
              flexes between coach, architect, and strategist, depending on what
              teams and outcomes demand in the moment.
            </p>
          </section>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit gap-6 py-10 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:py-20"
          id="testimonials"
        >
          <div className="hidden lg:col-span-2 lg:block"></div>
          <div className="lg:col-span-8">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Testimonials
            </h4>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
          <section className="lg:col-span-4 lg:content-start">
            <h5 className="text-lg font-semibold">Empowering Talent:</h5>
            <p className="mb-4">
              I believe that the true currency of a high-performing organization
              is talent. By mentoring, advocating for growth, and unlocking
              autonomy, I empower teams to surpass expectations.
            </p>
            <h5 className="text-lg font-semibold">
              Driving Change Through Collaboration:
            </h5>
            <p className="mb-4">
              Sustainable transformation demands empathy, clarity, and
              alignment. I champion cross-functional dialogue, transparency, and
              shared objectives, ensuring every stakeholder becomes an agent of
              change.
            </p>
            <h5 className="text-lg font-semibold">
              Strategic Vision Executed with Technical Excellence:
            </h5>
            <p className="mb-4">
              Business strategy only thrives through rigorous technical
              execution. I bridge vision and delivery, translating bold ideas
              into scalable systems that advance both user experience and
              business value.
            </p>
            <h5 className="text-lg font-semibold">Adaptable Leadership:</h5>
            <p className="mb-4">
              In complexity and disruption, adaptability wins. My leadership
              flexes between coach, architect, and strategist, depending on what
              teams and outcomes demand in the moment.
            </p>
          </section>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Sabri Maslan</title>
