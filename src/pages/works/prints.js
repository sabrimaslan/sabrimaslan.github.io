import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const OnPrintsPage = () => {
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
                    <span className="font-light">On </span>Prints
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:basis-2/4">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="flex items-end p-4 lg:basis-2/5 lg:justify-start">
                <StaticImage
                  src="../../images/prints-icon.png"
                  placeholder="blurred"
                  height={56}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="On Web"
                />
              </div>
              <div className="p-4 lg:basis-3/5">
                <div className="font-normal">
                  <p className="mb-2">
                    Part of my work that involves other media. This includes designing for advertisements on newspaper and magazines, brochures, name cards, wedding invitations and other prints.
                  </p>
                  <p className="mb-2">
                    The tools used for most of these works are vector graphic editors (Adobe Illustrator, CorelDRAW and Inkscape) and IMAGINATION :)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <hr className="mx-auto my-4 h-1 w-48 border-0 bg-gray-100 lg:my-10 dark:bg-gray-300"></hr>
        <div className="flex h-dvh flex-col lg:w-full lg:justify-items-center">
          <section className="w-full basis-3/5">
            <div className="flex h-full max-w-full flex-col md:flex-row items-center overflow-x-auto p-6 lg:p-0">
              <div className="p-4">
                <StaticImage
                  src="../../images/hp-pc-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HPE DnA"
                />
              </div>
              <div className='flex flex-col'>
                <div className="p-4">
                  <StaticImage
                    src="../../images/hp-pc-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HPE DnA"
                  />
                </div>
                <div className=" p-4">
                  <StaticImage
                    src="../../images/hp-pc-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HPE DnA"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">HP Prototype Center</p>
                  HP Prototype Center is an innovation idea for HP TechDay ‘14. The idea is to have a one-stop center for cloud community which offers capabilities to provide prototype catalog, collaboration, knowledge and prototype sharing with approved workflow among community members.
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
                      <p className="text-md/6">Javascript</p>
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

export default OnPrintsPage

export const Head = () => (
  <title>Freelance - On Prints : Sabri Maslan</title>
)
