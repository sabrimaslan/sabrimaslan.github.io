import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const CompanyCelcomDigiPage = () => {
  return (
    <Layout>
      <main className="snap-container lg:col-span-10">
        <div className="snap-section h-screen content-center gap-6 px-6 lg:grid lg:grid-cols-10 lg:p-0">
          <div className="hidden xl:col-span-1 xl:block"></div>
          <aside className="py-6 lg:col-span-4 lg:pt-22 xl:col-span-3">
            <h4 className="text-md font-light tracking-[.125em] uppercase">
              Telecommunication
            </h4>
            <p className="text-xl font-semibold">
              <span className="font-light">For </span>CelcomDigi Berhad
            </p>
          </aside>
          <section className="lg:col-span-4">
            <div className="py-6">
              <StaticImage
                src="../../images/celcomdigi-logo.png"
                placeholder="blurred"
                height={40}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="CelcomDigi"
              />
            </div>
            <p className="mb-2">
              Showcasing my works in the telecomunication industry, mainly on
              digitalising of the merger of companies. This includes design and
              development, for applications on the web and mobile.
            </p>
            <p className="mb-2">
              Utilising the latest technologies, from Next JS, React Native and
              Node JS to progressive web app, Strapi CMS and PostgreSQL as the
              database.
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
        {/* Next Gen */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex flex-row overflow-x-auto">
              <div className="min-w-[305px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcomdigi-nextgen-1.png"
                  placeholder="blurred"
                  width={305}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="CelcomDigi Next Gen"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcomdigi-nextgen-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="CelcomDigi Next Gen"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcomdigi-nextgen-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="CelcomDigi Next Gen"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcomdigi-nextgen-4.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="CelcomDigi Next Gen"
                />
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">Next Gen</p>
                Next Gen is a mobile app for CelcomDigi consumer. This app is
                build to integrate both Celcom and Digi consumers and will be as
                the main mobile app post merger. It is heavily dependent on the
                readiness of the to-be backend system.
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
                      <p className="text-md">React Native</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">UI/UX & Technical Lead</p>
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
        {/* Pryce */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex flex-row overflow-x-auto">
              <div className="min-w-[305px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcomdigi-pryce-1.png"
                  placeholder="blurred"
                  width={305}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcomdigi-pryce-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcomdigi-pryce-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcomdigi-pryce-4.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">Pryce</p>
                Pryce is a progressive web app (PWA) for CelcomDigi stores. This
                app is used to display package and pricing directly on the
                displayed devices in store. The app is lightweight and focused
                on in-store user experience.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Progressive Web App</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Next JS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">UI/UX & Technical Lead</p>
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
        {/* Next Gen Design System */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcomdigi-nextgen-designsystem-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Next Gen Design System"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcomdigi-nextgen-designsystem-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Next Gen Design System"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcomdigi-nextgen-designsystem-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Next Gen Design System"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">
                  Next Gen Design System
                </p>
                NextGen Design System creates consistency and harmony within the
                product and brand ecosystem. It’s a live documentation of
                CelcomDigi’s design direction. For developers, this translate to
                a styling bootstrap that can be used throughout CelcomDigi’s
                mobile applications.
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
                      <p className="text-md">UI/UX & Technical Lead</p>
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

export default CompanyCelcomDigiPage

export const Head = () => (
  <title>Portfolio for CelcomDigi Berhad : Sabri Maslan</title>
)
