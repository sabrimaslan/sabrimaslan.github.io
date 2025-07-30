import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const CompanyHPEPage = () => {
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
                  Information Technology
                </h4>
                <div className="font-normal">
                  <p className="text-2xl/8 font-semibold">
                    <span className="font-light">For </span>Hewlett Packard
                    Enterprise
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:basis-2/4">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="flex items-end p-4 lg:basis-2/5 lg:justify-start">
                <StaticImage
                  src="../../images/hpe-logo.png"
                  placeholder="blurred"
                  height={106}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Celcom"
                />
              </div>
              <div className="p-4 lg:basis-3/5">
                <div className="font-normal">
                  <p className="mb-2">
                    Showcase of my works for the enterprise solution. This
                    includes design and development, for applications on the web
                    and internal HPE.
                  </p>
                  <p className="mb-2">
                    Utilising the latest technologies such as HTML5, CSS3 and
                    javascript frameworks, including Vue JS, Angular JS and Node
                    JS.
                  </p>
                  <p className="mb-2">
                    For design, it all starts with pen and paper, to Invision
                    app and Adobe Creative Suite, with my most used and abused
                    tools, Adobe Photoshop and Adobe Illustrator.
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
                  src="../../images/hpe-dna-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HPE DnA"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/hpe-dna-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HPE DnA"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/hpe-dna-3.png"
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
                  <p className="mb-2 text-2xl/8 font-semibold">HPE DnA</p>
                  DnA is a collective of web based tools for merger,
                  acquisitions and divestitures for enterprises and used to
                  accelerate and manage the overall processess involved.
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
                      <p className="text-md/6">Angular / ExpressJS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">UI/UX Lead</p>
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
                  src="../../images/hpe-ecpq-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HPE eCPQ"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/hpe-ecpq-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HPE eCPQ"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/hpe-ecpq-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HPE eCPQ"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">HPE eCPQ</p>
                  eCPQ is a marketplace for agents and resellers to configure
                  price quote. It is integrated with SAP, Salesforce and HPE
                  legacy applications.
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
                      <p className="text-md/6">Angular / ExpressJS</p>
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
        <hr className="mx-auto my-4 h-1 w-48 border-0 bg-gray-100 lg:my-10 dark:bg-gray-300"></hr>
        <div className="flex h-dvh flex-col lg:w-full lg:justify-items-center">
          <section className="w-full basis-3/5">
            <div className="flex h-full max-w-full flex-col items-center overflow-x-auto p-6 md:flex-row lg:p-0">
              <div className="p-4">
                <StaticImage
                  src="../../images/hpe-kmp-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HPE Knowledge Management Portal"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/hpe-kmp-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HPE Knowledge Management Portal"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/hpe-kmp-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HPE Knowledge Management Portal"
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
                    HPE Knowledge Management Portal
                  </p>
                  Knowledge Management Portal is a web portal for all HPE
                  competency centers to collaborate and discuss.
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
                      <p className="text-md/6">Angular / ExpressJS</p>
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

export default CompanyHPEPage

export const Head = () => (
  <title>Works - Hewlett Packard Enterprise : Sabri Maslan</title>
)
