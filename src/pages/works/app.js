import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const OnAppPage = () => {
  return (
    <Layout>
      <main className="flex w-full flex-col lg:basis-5/6">
        <div className="flex h-dvh w-full flex-col lg:flex-row lg:justify-items-center">
          <aside className="lg:basis-1/4">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="hidden items-end p-4 lg:flex lg:basis-2/5 lg:justify-start">
                &nbsp;
              </div>
              <div className="p-4 lg:basis-3/5">
                <h4 className="text-lg/6 font-light tracking-[.125em] uppercase">
                  Freelance
                </h4>
                <div className="font-normal">
                  <p className="text-2xl/8 font-semibold">
                    <span className="font-light">On </span>App
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:basis-2/4">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="flex items-end p-4 lg:basis-2/5 lg:justify-start">
                <StaticImage
                  src="../../images/app-icon.png"
                  placeholder="blurred"
                  height={47}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="On Web"
                />
              </div>
              <div className="p-4 lg:basis-3/5">
                <div className="font-normal">
                  <p className="mb-2">
                    Another part of my work that involves other media. This
                    includes desktop & mobile applications. I’d always like to
                    involved with startups to practice new technologies.
                  </p>
                  <p className="mb-2">
                    The tools used for these works are mostly open source tools.
                    Electron, React Native and Cordova to just name a few (just
                    by the names you’d know its the future).
                  </p>
                  <div className="flex justify-end text-xl/8 font-semibold">
                    Scroll{' '}
                    <StaticImage
                      src="../../images/scroll.png"
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
          <section className="w-full basis-3/5">
            <div className="flex h-full max-w-full flex-col items-center overflow-x-auto p-6 md:flex-row lg:p-0">
              <div className="p-4">
                <StaticImage
                  src="../../images/freelance-niosh-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Checkmate"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-niosh-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Checkmate"
                  />
                </div>
                <div className="p-4">
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
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">Checkmate</p>
                  Desktop application developed for the National Institute of
                  Occupational Safety and Health (NIOSH). It is used for the
                  workplace inspection checklist.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Desktop Application</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Electron</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Designer / Developer</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Client
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">NIOSH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <hr className="mx-auto my-4 h-1 w-48 border-0 bg-gray-100 lg:my-10 dark:bg-gray-300"></hr>
        <div className="flex h-dvh flex-col lg:w-full lg:justify-items-center">
          <section className="w-full basis-4/5">
            <div className="flex h-full max-w-full flex-row items-center overflow-x-auto p-6 lg:p-0">
              <div className="min-w-[299px] p-4">
                <StaticImage
                  src="../../images/freelance-makan-1.png"
                  placeholder="blurred"
                  width={299}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Makan App"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/freelance-makan-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Makan App"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/freelance-makan-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Makan App"
                />
              </div>
              <div className="min-w-[270px] p-4">
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
          <aside className="order-first basis-1/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">Makan App</p>
                  Makan is a platform for SME F&B providers to sell online. The
                  platform is targeting existing sellers who are leveraging
                  instant messaging platform. Estimate to be release in 2018.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Mobile Application</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">React Native / ExpressJS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Designer / Developer</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Client
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Asticus Technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}

export default OnAppPage

export const Head = () => <title>Freelance - On App : Sabri Maslan</title>
