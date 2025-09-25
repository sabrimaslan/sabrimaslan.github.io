import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const words = [{ tag: 'Innovate.' }, { tag: 'Transform.' }, { tag: 'Integrate.' }, { tag: 'Execute.' }]

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
      <main
        className="snap-container px-6 lg:col-span-10 lg:p-0"
        id="introduction"
      >
        <section className="snap-section h-screen min-h-fit content-center gap-6 lg:grid lg:grid-cols-10">
          <div className="hidden lg:col-span-1 lg:block"></div>
          <aside className="lg:col-span-3 lg:content-center">
            <div className="animate__animated animate__fadeInUp animate__faster pb-2 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em]">
              <span className="animate__animated animate__fadeInUp animate__slow">{word.tag}</span>
            </div>
            <div className="animate__animated animate__fadeInUp animate__fast text-2xl font-semibold">
              Sabri Maslan
            </div>
            <div className="animate__animated animate__fadeInUp text-xl font-normal">
              Head, Engineering & Innovation
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
          </article>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Sabri Maslan</title>
