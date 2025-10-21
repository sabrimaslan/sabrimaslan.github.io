import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const CompanyDXCPage = () => {
  return (
    <Layout>
      <main className="snap-container lg:col-span-10">
        <div className="snap-section h-screen content-center gap-6 px-6 lg:grid lg:grid-cols-10 lg:p-0">
          <div className="hidden xl:col-span-1 xl:block"></div>
          <aside className="py-6 lg:col-span-4 lg:pt-22 xl:col-span-3">
            <h4 className="text-md font-light tracking-[.125em] uppercase">
              Information Technology
            </h4>
            <p className="text-xl font-semibold">
              <span className="font-light">For </span>DXC Technology
            </p>
          </aside>
          <section className="lg:col-span-4">
            <div className="py-6 text-right">
              <StaticImage
                src="../../images/dxc-logo.png"
                placeholder="blurred"
                height={40}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="DXC Technology"
              />
            </div>
            <p className="mb-2">
              Showcase of my works for the enterprise solution. This includes
              design and development, for applications on the web.
            </p>
            <p className="mb-2">
              Utilising the latest technologies such as HTML5, CSS3 and
              javascript frameworks, including Vue JS, Angular JS and Node JS.
            </p>
            <p className="mb-2">
              For design, it all starts with pen and paper, to Adobe Creative
              Suite. Equipped with my most used and abused tools, Adobe
              Photoshop and Adobe Illustrator.
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
        {/* DXC LEAP */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/dxc-leap-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="DXC LEAP"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/dxc-leap-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="DXC LEAP"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/dxc-leap-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="DXC LEAP"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">DXC LEAP</p>
                LEAP is a tool for business process automation for the modern
                enterprise which includes web based process explorer and AI
                powered robotic-as-a-service. It is a part of DXC’s Business
                Process Office offerings and was launched in January 2018 with
                the name, DXC Agile Process Automation.
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
                      <p className="text-md">Angular / ExpressJS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">UI/UX Lead</p>
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

export default CompanyDXCPage

export const Head = () => (
  <title>Portfolio for DXC Technology : Sabri Maslan</title>
)
