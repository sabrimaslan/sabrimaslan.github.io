import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const CompanyTimePage = () => {
  return (
    <Layout>
      <main className="lg:col-span-10 snap-container">
        <div className="min-h-screen gap-6 px-6 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:p-0 snap-section">
          <div className="hidden xl:col-span-1 xl:block"></div>
          <aside className="py-6 lg:col-span-4 lg:pt-20 xl:col-span-3">
            <h4 className="text-md font-light tracking-[.125em] uppercase">
              Telecommunication
            </h4>
            <p className="text-xl font-semibold">
              <span className="font-light">For </span>TIME dotCom Berhad
            </p>
          </aside>
          <section className="lg:col-span-4">
            <div className="py-6">
              <StaticImage
                src="../../images/time-logo.png"
                placeholder="blurred"
                height={32}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="TIME"
              />
            </div>
            <p className="mb-2">
              The engineering team built mainly to develop end-to-end solutions,
              refreshed technology stacks and digital transformation from legacy
              systems to support for the carve out broadband business.
            </p>
            <p className="mb-2">
              Utilising the latest technologies, from Flutter for the mobile
              application, NextJS for everything web, NodeJS and Golang for the
              middleware, and PostgreSQL for the database.
            </p>
            <p className="mb-2">
              For design, from prototyping to visual design with the use of
              Figma as the main tool.
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
          <div className="hidden lg:col-span-2 lg:block"></div>
        </div>
        {/* TIME Home Fibre */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex flex-row overflow-x-auto">
              <div className="min-w-[305px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/time-home-fibre-1.png"
                  placeholder="blurred"
                  width={305}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/time-home-fibre-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/time-home-fibre-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
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
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">TIME Home Fibre</p>
                The mobile app for TIME Retail business unit. This app is build
                as a refresh for consumers and is the main mobile app for TIME
                Retail business-as-usual and post carve out. It is currently
                integrated with existing legacy backend while developed with the
                future system integration ready in place.
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
                      <p className="text-md">Flutter</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Engineering Lead</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Status
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Production</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:col-span-1 lg:block xl:col-span-2"></div>
            </div>
          </aside>
        </div>
        {/* TIME Retail Kiosk */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex flex-row overflow-x-auto">
              <div className="min-w-[305px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/time-kiosk-1.png"
                  placeholder="blurred"
                  width={368}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/time-kiosk-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/time-kiosk-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Home Fibre"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
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
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">TIME Retail Kiosk</p>
                The kiosk is an on-the-ground sign up channels for TIME Retail
                located in targeted buildings. It is used to display package and
                pricing direct to offline consumer to get them to sign up for
                the broadband services.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Physical Kiosk</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Web</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Engineering Lead</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Status
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Production</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:col-span-1 lg:block xl:col-span-2"></div>
            </div>
          </aside>
        </div>
        {/* TIME Design Library */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/time-design-library-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="TIME Design Library"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/time-design-library-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="TIME Design Library"
                  />
                </div>
                <div className="min-w-[560px] p-4">
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
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">
                  TIME Design Library
                </p>
                TIME Design Library creates consistency and harmony within the
                product and brand ecosystem. It’s not only a live documentation
                of TIME’s design direction but also consist of components design
                and iconography.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Design System</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">React</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Engineering Lead</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Status
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Development</p>
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

export default CompanyTimePage

export const Head = () => <title>Portfolio for TIME dotCom : Sabri Maslan</title>
