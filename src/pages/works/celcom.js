import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const CompanyCelcomPage = () => {
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
                  Telecommunication
                </h4>
                <div className="font-normal">
                  <p className="text-2xl/8 font-semibold">
                    <span className="font-light">For </span>Celcom Axiata Berhad
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:basis-2/4">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="flex items-end p-4 lg:basis-2/5 lg:justify-end">
                <StaticImage
                  src="../../images/celcom-logo.png"
                  placeholder="blurred"
                  height={80}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Celcom"
                />
              </div>
              <div className="p-4 lg:basis-3/5">
                <div className="font-normal">
                  <p className="mb-2">
                    Showcasing my works in the telecomunication industry, mainly
                    on digitalising throughout the company. This includes design
                    and development, for applications on the web and mobile.
                    Solutions include internal, consumer and enterprise.
                  </p>
                  <p className="mb-2">
                    Utilising the latest technologies, mostly javascript
                    frameworks, from Angular JS, React Native and Node JS to a
                    static site generator, Gatsby JS and Strapi CMS.
                  </p>
                  <p className="mb-2">
                    For design, from prototyping to visual with the use of Adobe
                    XD and Figma. As for vectorised components such as icons,
                    Adobe Illustrator was still the preferred tool.
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
                  src="../../images/celcom-web-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Celcom Web Portal"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/celcom-web-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Celcom Web Portal"
                  />
                </div>
                <div className="p-4">
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
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">
                    Celcom Web Portal
                  </p>
                  Celcom’s portal has been refreshed since the digitalization of
                  the company in 2017. That is when, the Prisma design system
                  started to be integrated in the platform. This is to ensure a
                  consistency and harmony within the look and feel throughout
                  Celcom’s brand ecosystem.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Web Portal</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Angular / Drupal</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">UI/UX & Technical Lead</p>
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
                  src="../../images/celcom-design-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Design@Celcom"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/celcom-design-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Design@Celcom"
                  />
                </div>
                <div className="p-4">
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
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">Design@Celcom</p>
                  Design@Celcom is a web to introduced the in-house design team
                  and to showcase the work involved. The team consist of not
                  only designers but copywriters, developers, researchers and
                  customer experience experts.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Web Portfolio</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">GatsbyJS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">UI/UX & Technical Lead</p>
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
                  src="../../images/celcom-prisma-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Prisma"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/celcom-prisma-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Prisma"
                  />
                </div>
                <div className="p-4">
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
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">
                    Prisma Design System
                  </p>
                  Prisma Design System creates consistency and harmony within
                  the product and brand ecosystem. It’s not only a live
                  documentation of Celcom’s design direction but also consist of
                  components design, iconography, animation and motion. For
                  developers, this translate to a styling bootstrap and web
                  components that can be used throughout Celcom’s applications.
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
                      <p className="text-md/6">UI/UX & Technical Lead</p>
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
                  src="../../images/celcom-business-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Celcom Business"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/celcom-business-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Celcom Business"
                  />
                </div>
                <div className="p-4">
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
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">
                    Celcom Business
                  </p>
                  Celcom Business Cloud Suite started as a proof-of-concept to
                  showcase the ideation and capabilities developed by the
                  in-house team while leveraging the latest technologies
                  available. It made into an actual product with the solution
                  collaboration with Microsoft.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Web Portal</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Angular / Strapi</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">UI/UX & Technical Lead</p>
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
                  src="../../images/celcom-onboardme-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Onboardme"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/celcom-onboardme-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Onboardme"
                  />
                </div>
                <div className="p-4">
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
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">Onboardme</p>
                  Onboardme is an onboarding tool, ideated and innovated by the
                  HIPA-X team members. It started as a proof-of-concept and
                  currently is used by Celcom’s talent acquisition team to
                  onboard new joiner in Celcom.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Web Application</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Angular / Strapi</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Team Lead</p>
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
                  src="../../images/celcom-hipax-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HIPA-X"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/celcom-hipax-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HIPA-X"
                  />
                </div>
                <div className="p-4">
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
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">HIPA-X</p>
                  HIPA-X is a graduate programme in Celcom for technical
                  talents. This project is to showcase the team’s work and as
                  their portfolio. From ideation to development and deployment,
                  all done by the young team in HIPA.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Web Portfolio</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">GatsbyJS / Strapi</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Team Lead</p>
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
                  src="../../images/celcom-we-1.png"
                  placeholder="blurred"
                  width={305}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/celcom-we-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] p-4">
                <StaticImage
                  src="../../images/celcom-we-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Pryce"
                />
              </div>
              <div className="min-w-[270px] p-4">
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
          <aside className="order-first basis-1/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">We@Celcom</p>
                  We@Celcom is a mobile application for Celcom’s employees. This
                  app is used as a daily working tools including check-in
                  capability for Bluecube employees and notifications throughout
                  all Celcom.
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
                      <p className="text-md/6">React Native</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">UI/UX & Technical Lead</p>
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
      </main>
    </Layout>
  )
}

export default CompanyCelcomPage

export const Head = () => (
  <title>Works - Celcom Axiata Berhad : Sabri Maslan</title>
)
