import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const CompanyTimePage = () => {
  return (
    <Layout>
      <main className="flex w-full flex-col lg:basis-5/6">
        <div className="flex h-dvh w-full flex-col lg:flex-row lg:justify-items-center">
          <div className="hidden flex-col lg:flex lg:h-screen lg:basis-1/10"></div>
          <aside className="lg:basis-1/4">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="hidden items-end p-4 lg:flex lg:basis-2/5 lg:justify-start">
                &nbsp;
              </div>
              <div className="p-4 lg:basis-3/5">
                <h4 className="text-lg/6 font-light tracking-[.125em] uppercase">
                  Telecommunication
                </h4>
                <div className="font-normal">
                  <p className="text-2xl/8 font-semibold">
                    <span className="font-light">For </span>TIME dotCom Berhad
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:basis-2/4">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="flex items-end p-4 lg:basis-2/5 lg:justify-start">
                <StaticImage
                  src="../../images/time-logo.png"
                  placeholder="blurred"
                  height={32}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME"
                />
              </div>
              <div className="p-4 lg:basis-3/5">
                <div className="font-normal">
                  <p className="mb-2">
                    The engineering team built mainly to develop end-to-end
                    solutions, refreshed technology stacks and digital
                    transformation from legacy systems to support for the carve
                    out broadband business.
                  </p>
                  <p className="mb-2">
                    Utilising the latest technologies, from Flutter for the
                    mobile application, NextJS for everything web, NodeJS and
                    Golang for the middleware, and PostgreSQL for the database.
                  </p>
                  <p className="mb-2">
                    For design, from prototyping to visual design with the use of Figma
                    as the main tool.
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
          <section className="w-full basis-4/5">
            <div className="flex h-full max-w-full flex-row items-center overflow-x-auto p-6 lg:p-0">
              <div className="min-w-[305px] p-4">
                <StaticImage
                  src="../../images/time-home-fibre-1.png"
                  placeholder="blurred"
                  width={305}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/time-home-fibre-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/time-home-fibre-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/time-home-fibre-4.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
            </div>
          </section>
          <aside className="order-first basis-1/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">
                    TIME Home Fibre
                  </p>
                  The mobile app for TIME Retail business unit. This app is
                  build as a refresh for consumers and is the main mobile app
                  for TIME Retail business-as-usual and post carve out. It is
                  currently integrated with existing legacy backend while
                  developed with the future system integration ready in place.
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
                      <p className="text-md/6">Flutter</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Engineering Lead</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Status
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Production</p>
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
              <div className="min-w-[305px] p-4">
                <StaticImage
                  src="../../images/time-kiosk-1.png"
                  placeholder="blurred"
                  width={368}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/time-kiosk-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/time-kiosk-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/time-kiosk-4.png"
                  placeholder="blurred"
                  width={228}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
            </div>
          </section>
          <aside className="order-first basis-1/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">
                    TIME Retail Kiosk
                  </p>
                  The kiosk is an on-the-ground sign up channels for TIME Retail
                  located in targeted buildings. It is used to display package
                  and pricing direct to offline consumer to get them to sign up
                  for the broadband services.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Physical Kiosk</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Web</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Engineering Lead</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Status
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <hr className="mx-auto my-4 h-1 w-48 border-0 bg-gray-100 lg:my-10 dark:bg-gray-300"></hr>
        <div className="flex h-dvh flex-col lg:w-full lg:justify-items-center">
          <section className="w-full basis-3/5">
            <div className="flex h-full max-w-full flex-col items-center overflow-x-auto p-6 md:flex-row lg:p-0">
              <div className="p-4">
                <StaticImage
                  src="../../images/time-design-library-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Design Library"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/time-design-library-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="TIME Design Library"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/time-design-library-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="TIME Design Library"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">
                    TIME Design Library
                  </p>
                  TIME Design Library creates consistency and harmony within the
                  product and brand ecosystem. It’s not only a live
                  documentation of TIME’s design direction but also consist of
                  components design and iconography.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Design System</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">React</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Engineering Lead</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Status
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Development</p>
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

export default CompanyTimePage

export const Head = () => <title>Works - TIME dotCom : Sabri Maslan</title>
