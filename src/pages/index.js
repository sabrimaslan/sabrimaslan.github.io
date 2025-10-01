import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import TopIcon from '../components/top'
import UpIcon from '../components/up'
import DownIcon from '../components/down'
import Layout from '../components/layout'
import PageNav from '../components/pagenav'
import scrollTo from 'gatsby-plugin-smoothscroll'

const anchors = [
  {
    name: 'Prologue',
    link: 'prologue',
  },
  {
    name: 'Philosophy',
    link: 'philosophy',
  },
  {
    name: 'Achievements',
    link: 'achievements',
  },
  {
    name: 'Testimonials',
    link: 'testimonials',
  },
]

const words = [
  { tag: 'Innovate' },
  { tag: 'Develop' },
  { tag: 'Integrate' },
  { tag: 'Execute' },
]

const IndexPage = () => {
  const [word, setWord] = useState(words[0])
  const [textIdx, setTextIdx] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIdx((i) => (i + 1) % words.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setWord(words[textIdx])
  }, [textIdx])

  return (
    <Layout>
      <main className="snap-container px-6 lg:col-span-10 lg:p-0">
        <PageNav anchors={anchors} />
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
            <div className="text-md animate__animated animate__fadeInUp animate__slower flex justify-end font-semibold">
              <button
                className="animate-bounce cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#philosophy')}
              >
                <DownIcon />
              </button>
            </div>
          </article>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit content-center gap-6 py-10 lg:grid lg:grid-cols-10 lg:py-20"
          id="philosophy"
        >
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Leadership Philosophy
            </h4>
          </div>
          <article className="lg:col-span-4 lg:content-start">
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
          </article>
          <article className="lg:col-span-4 lg:content-start">
            <h5 className="text-lg font-semibold">
              Strategic Execution with Technical Excellence:
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
            <div className="text-md flex justify-end gap-2 font-semibold">
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#prologue')}
              >
                <UpIcon />
              </button>
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#achievements')}
              >
                <DownIcon />
              </button>
            </div>
          </article>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit content-center gap-6 py-10 lg:grid lg:grid-cols-10 lg:py-20"
          id="achievements"
        >
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Key Achievements
            </h4>
          </div>
          <article className="lg:col-span-4 lg:content-start">
            <ul className="ml-4 list-disc">
              <li className="mb-4">
                Innovated and deployed a web-based onboarding solution
                integrated with HR systems, transforming and streamlining
                onboarding processes to enhance operational efficiency and user
                experience.
              </li>
              <li className="mb-4">
                Spearheaded integration of the Design System across major
                platforms, establishing a unified, scalable, reusable component
                framework that served as the foundational framework during the
                merger which significantly reducing development effort and
                accelerating time-to-market.
              </li>
            </ul>
          </article>
          <article className="lg:col-span-4 lg:content-start">
            <ul className="ml-4 list-disc">
              <li className="mb-4">
                Fostered a live documentation culture, enhancing collaboration
                and boosting organizational knowledge sharing across teams and
                departments.
              </li>
              <li className="mb-4">
                Rolled out a compliance-first middleware solution ensuring audit
                trails for all transactions, meeting regulatory requirements.
              </li>
              <li className="mb-4">
                Launched customer self-care applications and kiosks, reducing
                onboarding time by 40%.
              </li>
              <li className="mb-4">
                Delivered WhatsApp bots for acquisition and customer engagement,
                significantly improving sign-up velocity.
              </li>
            </ul>
            <div className="text-md animate__animated animate__fadeInUp animate__slower flex justify-end gap-2 font-semibold">
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#philosophy')}
              >
                <UpIcon />
              </button>
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#testimonials')}
              >
                <DownIcon />
              </button>
            </div>
          </article>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit content-center gap-6 py-10 lg:grid lg:grid-cols-10 lg:py-20"
          id="testimonials"
        >
          <div className="lg:col-span-8">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Testimonials
            </h4>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
          <article className="no-scrollbar flex flex-row overflow-x-auto lg:col-span-10 lg:px-4">
            <div className="mr-4 min-w-[234px]">
              <StaticImage
                src="../images/testimonial-07-alif.png"
                placeholder="blurred"
                width={234}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Alif"
              />
            </div>
            <div className="mr-4 min-w-[234px]">
              <StaticImage
                src="../images/testimonial-01-ashbil.png"
                placeholder="blurred"
                width={234}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Ashbil"
              />
            </div>
            <div className="mr-4 min-w-[234px]">
              <StaticImage
                src="../images/testimonial-02-zee.png"
                placeholder="blurred"
                width={234}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Zee"
              />
            </div>
            <div className="mr-4 min-w-[286px]">
              <StaticImage
                src="../images/testimonial-04-fazlinda.png"
                className="mb-4"
                placeholder="blurred"
                width={286}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Fazlinda"
              />
              <StaticImage
                src="../images/testimonial-05-yvonne.png"
                className="mb-4"
                placeholder="blurred"
                width={286}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Yvonne"
              />
              <StaticImage
                src="../images/testimonial-06-esther.png"
                placeholder="blurred"
                width={286}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Esther"
              />
            </div>
            <div className="mr-4 min-w-[286px]">
              <StaticImage
                src="../images/testimonial-08-azuree.png"
                className="mb-4"
                placeholder="blurred"
                width={286}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Azuree"
              />
              <StaticImage
                src="../images/testimonial-03-alif.png"
                className="mb-4"
                placeholder="blurred"
                width={288}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Alif"
              />
            </div>
            <div className="mr-4 min-w-[234px]">
              <StaticImage
                src="../images/testimonial-10-putra.png"
                placeholder="blurred"
                width={234}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Putra"
              />
            </div>
            <div className="mr-4 min-w-[234px]">
              <StaticImage
                src="../images/testimonial-11-nazhan.png"
                placeholder="blurred"
                width={234}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Nazhan"
              />
            </div>
            <div className="mr-4 min-w-[284px]">
              <StaticImage
                src="../images/testimonial-12-thava.png"
                className="mb-4"
                placeholder="blurred"
                width={286}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Thava"
              />
              <StaticImage
                src="../images/testimonial-13-tasha.png"
                className="mb-4"
                placeholder="blurred"
                width={228}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Tasha"
              />
              <StaticImage
                src="../images/testimonial-14-ainna.png"
                placeholder="blurred"
                width={284}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Ainna"
              />
            </div>
          </article>
          <aside className="lg:col-span-8 lg:content-start">
            <div className="text-md flex justify-end gap-2 font-semibold">
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#prologue')}
              >
                <TopIcon />
              </button>
            </div>
          </aside>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Sabri Maslan</title>
