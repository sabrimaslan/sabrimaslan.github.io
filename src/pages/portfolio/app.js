import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const OnAppPage = () => {
  return (
    <Layout>
      <main className="snap-container lg:col-span-10">
        <div className="snap-section h-screen content-center gap-6 px-6 lg:grid lg:grid-cols-10 lg:p-0">
          <div className="hidden lg:col-span-1 lg:block"></div>
          <aside className="py-6 lg:col-span-2 lg:pt-23.5">
            <h4 className="text-md font-light tracking-[.125em] uppercase">
              Freelance
            </h4>
            <p className="text-xl font-semibold">
              <span className="font-light">On </span>App
            </p>
          </aside>
          <section className="lg:col-span-4">
            <div className="py-6">
              <StaticImage
                src="../../images/app-icon.png"
                placeholder="blurred"
                height={46}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="On Web"
              />
            </div>
            <p className="mb-2">
              Another part of my work that involves other media. This includes
              desktop & mobile applications. I’d always like to involved with
              startups to practice new technologies.
            </p>
            <p className="mb-2">
              The tools used for these works are mostly open source tools.
              Electron, React Native and Cordova to just name a few (just by the
              names you’d know its the future).
            </p>
            <div className="text-md flex justify-end py-6 font-semibold">
              Scroll{' '}
              <StaticImage
                src="../../images/scroll.png"
                placeholder="blurred"
                height={24}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Scroll"
              />
            </div>
          </section>
          <div className="hidden lg:col-span-3 lg:block"></div>
        </div>
        {/* Checkmate */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/freelance-niosh-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Checkmate"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/freelance-niosh-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Checkmate"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/freelance-niosh-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Checkmate"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">Checkmate</p>
                Desktop application developed for the National Institute of
                Occupational Safety and Health (NIOSH). It is used for the
                workplace inspection checklist.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Desktop Application</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Electron</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Designer / Developer</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Client
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">NIOSH</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:col-span-1 lg:block xl:col-span-2"></div>
            </div>
          </aside>
        </div>
        {/* Makan App */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex flex-row overflow-x-auto">
              <div className="min-w-[299px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/freelance-makan-1.png"
                  placeholder="blurred"
                  width={299}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Makan App"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/freelance-makan-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Makan App"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/freelance-makan-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Makan App"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/freelance-makan-4.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Makan App"
                />
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">Makan App</p>
                Makan is a platform for SME F&B providers to sell online. The
                platform is targeting existing sellers who are leveraging
                instant messaging platform. Estimate to be release in 2018.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Mobile Application</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">React Native / ExpressJS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Designer / Developer</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Client
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Asticus Technology</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:col-span-1 lg:block xl:col-span-2"></div>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export default OnAppPage

export const Head = () => <title>Portfolio on App : Sabri Maslan</title>
