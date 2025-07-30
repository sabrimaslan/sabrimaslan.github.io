import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const OnWebPage = () => {
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
                    <span className="font-light">On </span>Web
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:basis-2/4">
            <div className="flex h-full flex-col p-6 lg:p-0">
              <div className="flex items-end p-4 lg:basis-2/5 lg:justify-start">
                <StaticImage
                  src="../../images/web-icon.png"
                  placeholder="blurred"
                  height={40}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="On Web"
                />
              </div>
              <div className="p-4 lg:basis-3/5">
                <div className="font-normal">
                  <p className="mb-2">
                    Showcase of my works on the web. This includes design and
                    development, whether from my previous job or from my
                    freelance.
                  </p>
                  <p className="mb-2">
                    Mainly utilising open source technologies such as PHP and
                    Javascript frameworks. Include but not limited to WordPress,
                    Gatsby JS and Strapi CMS.
                  </p>
                  <p className="mb-2">
                    On design, it’s all from Adobe. My most used and abused
                    tools are Photoshop and Illustrator. The best part, it’s all
                    hand made :)
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
                  src="../../images/freelance-exchange-106-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="The Exchange 106"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-exchange-106-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="The Exchange 106"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-exchange-106-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="The Exchange 106"
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
                    The Exchange 106
                  </p>
                  The Exchange 106 is at the core of Tun Razak Exchange TRX in
                  Kuala Lumpur, Malaysia. A city within a city. The client need
                  a responsive website for their marketing of the new building.
                  The website includes a floor-by-floor showcase and and
                  panoramic view of the building and surroundings.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Website</p>
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
                      <p className="text-md/6">Designer / Developer</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Client
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Mulia Group</p>
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
                  src="../../images/freelance-timelapse-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Time Lapse Production"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-timelapse-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Time Lapse Production"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-timelapse-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Time Lapse Production"
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
                    Time Lapse Production
                  </p>
                  Time Lapse Production is a leading provider of time-lapse
                  construction image capture, Time Lapse remains at the industry
                  forefront with over 1 million site progress photographs
                  captured, covering more than 35 projects around the country.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Website</p>
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
                      <p className="text-md/6">Designer / Developer</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Client
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Time Lapse Production</p>
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
                  src="../../images/freelance-chong-kio-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Chong Kio"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-chong-kio-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Chong Kio"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-chong-kio-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Chong Kio"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">Chong Kio</p>
                  Chong Kio is a Taiwanese medicine and herbs company. The
                  client wanted a website to showcase their products in a much
                  exclusive way.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Website</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">WordPress</p>
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
                      <p className="text-md/6">
                        Chong Kio Farmacia Chinesa Co.
                      </p>
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
                  src="../../images/freelance-lords-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Lord's Tailor"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-lords-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Lord's Tailor"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-lords-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Lord's Tailor"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">Lord's Tailor</p>
                  Lord’s Tailor is synonymous with bespoke tailoring. The client
                  wanted a corporate website with a showcase gallery of their
                  collections.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Website</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">WordPress</p>
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
                      <p className="text-md/6">Lord's Tailor Sdn. Bhd.</p>
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
                  src="../../images/freelance-ratu-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="Galeri Ratu"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-ratu-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Galeri Ratu"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/freelance-ratu-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="Galeri Ratu"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="order-first basis-2/5 lg:order-last">
            <div className="flex h-full flex-col p-6 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:basis-2/5">
                <div className="p-4">
                  <p className="mb-2 text-2xl/8 font-semibold">Galeri Ratu</p>
                  Galeri Ratu is a fashion boutique for muslim women. The client
                  wanted a new look to its website plus a gallery to showcase
                  their collections.
                </div>
              </div>
              <div className="hidden lg:flex lg:basis-2/5 lg:flex-row">
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Platform
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">Website</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-light tracking-wide uppercase">
                      Framework
                    </h4>
                    <div className="font-normal">
                      <p className="text-md/6">WordPress</p>
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
                      <p className="text-md/6">De Galeri Ratu (M) Sdn. Bhd.</p>
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

export default OnWebPage

export const Head = () => <title>Freelance - On Web : Sabri Maslan</title>
