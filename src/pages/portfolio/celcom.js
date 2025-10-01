import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const CompanyCelcomPage = () => {
  return (
    <Layout>
      <main className="lg:col-span-10 snap-container">
        <div className="min-h-screen gap-6 px-6 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:p-0 snap-section">
          <div className="hidden xl:col-span-1 xl:block"></div>
          <aside className="py-6 lg:col-span-4 lg:pt-27 xl:col-span-3">
            <h4 className="text-md font-light tracking-[.125em] uppercase">
              Telecommunication
            </h4>
            <p className="text-xl font-semibold">
              <span className="font-light">For </span>Celcom Axiata Berhad
            </p>
          </aside>
          <section className="lg:col-span-4">
            <div className="py-6 text-right">
              <StaticImage
                src="../../images/celcom-logo.png"
                placeholder="blurred"
                height={60}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Celcom"
              />
            </div>
            <p className="mb-2">
              Showcasing my works in the telco industry, mainly on digitalising
              throughout the company. This includes design and development, for
              applications on the web and mobile. Solutions include internal,
              consumer and enterprise.
            </p>
            <p className="mb-2">
              Utilising the latest technologies, mostly javascript frameworks,
              from Angular JS, React Native and Node JS to a static site
              generator, Gatsby JS and Strapi CMS.
            </p>
            <p className="mb-2">
              For design, from prototyping to visual with the use of Sketch,
              Adobe XD and Figma. As for vectorised components such as icons,
              Adobe Illustrator was still the preferred tool.
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
        {/* Celcom Web Portal */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcom-web-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Celcom Web Portal"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-web-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Celcom Web Portal"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-web-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Celcom Web Portal"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl/8 font-semibold">
                  Celcom Web Portal
                </p>
                Celcom’s portal has been refreshed since the digitalization of
                the company in 2017. That is when, the Prisma design system
                started to be integrated in the platform. This is to ensure a
                consistency and harmony within the look and feel throughout
                Celcom’s brand ecosystem.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Web Portal</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Angular / Drupal</p>
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
        {/* Design@Celcom */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcom-design-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Design@Celcom"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-design-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Design@Celcom"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-design-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Design@Celcom"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">Design@Celcom</p>
                Design@Celcom is a web to introduced the in-house design team
                and to showcase the work involved. The team consist of not only
                designers but copywriters, developers, researchers and customer
                experience experts.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Web Portfolio</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">GatsbyJS</p>
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
        {/* Prisma Design System */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcom-prisma-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Prisma"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-prisma-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Prisma"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-prisma-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Prisma"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">
                  Prisma Design System
                </p>
                Prisma Design System creates consistency and harmony within the
                product and brand ecosystem. It’s not only a live documentation
                of Celcom’s design direction but also consist of components
                design, iconography, animation and motion. For developers, this
                translate to a styling bootstrap and web components that can be
                used throughout Celcom’s applications.
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
                      <p className="text-md">Production</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:col-span-1 lg:block xl:col-span-2"></div>
            </div>
          </aside>
        </div>
        {/* Celcom Business */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcom-business-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Celcom Business"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-business-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Celcom Business"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-business-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Celcom Business"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">Celcom Business</p>
                Celcom Business Cloud Suite started as a proof-of-concept to
                showcase the ideation and capabilities developed by the in-house
                team while leveraging the latest technologies available. It made
                into an actual product with the solution collaboration with
                Microsoft.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Web Portal</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Angular / Strapi</p>
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
        {/* Onboardme */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcom-onboardme-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Onboardme"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-onboardme-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Onboardme"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-onboardme-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Onboardme"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">Onboardme</p>
                Onboardme is an onboarding tool, ideated and innovated by the
                HIPA-X team members. It started as a proof-of-concept and
                currently is used by Celcom’s talent acquisition team to onboard
                new joiner in Celcom.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Web Application</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Angular / Strapi</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Team Lead</p>
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
        {/* HIPA-X */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcom-hipax-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HIPA-X"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-hipax-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HIPA-X"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/celcom-hipax-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HIPA-X"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl/8 font-semibold">HIPA-X</p>
                HIPA-X is a graduate programme in Celcom for technical talents.
                This project is to showcase the team’s work and as their
                portfolio. From ideation to development and deployment, all done
                by the young team in HIPA.
              </div>
              <div className="hidden lg:col-span-5 lg:flex lg:flex-row xl:col-span-4">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Web Portfolio</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">GatsbyJS / Strapi</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Team Lead</p>
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
        {/* We@Celcom */}
        <div className="flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row snap-section">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex flex-row overflow-x-auto">
              <div className="min-w-[305px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/celcom-we-1.png"
                  placeholder="blurred"
                  width={305}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcom-we-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcom-we-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/celcom-we-4.png"
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
                <p className="mb-2 text-2xl font-semibold">We@Celcom</p>
                We@Celcom is a mobile application for Celcom’s employees. This
                app is used as a daily working tools including check-in
                capability for Bluecube employees and notifications throughout
                all Celcom.
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
                      <p className="text-md">Production</p>
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

export default CompanyCelcomPage

export const Head = () => (
  <title>Portfolio for Celcom Axiata Berhad : Sabri Maslan</title>
)
