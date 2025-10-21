import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/layout'

const CompanyHPPage = () => {
  return (
    <Layout>
      <main className="snap-container lg:col-span-10">
        <div className="snap-section h-screen content-center gap-6 px-6 lg:grid lg:grid-cols-10 lg:p-0">
          <div className="hidden xl:col-span-1 xl:block"></div>
          <aside className="py-6 lg:col-span-4 lg:pt-24.5 xl:col-span-3">
            <h4 className="text-md font-light tracking-[.125em] uppercase">
              Information Technology
            </h4>
            <p className="text-xl font-semibold">
              <span className="font-light">For </span>Hewlett-Packard Inc.
            </p>
          </aside>
          <section className="lg:col-span-4">
            <div className="py-6">
              <StaticImage
                src="../../images/hp-logo.png"
                placeholder="blurred"
                height={50}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Hewlett-Packard Inc."
              />
            </div>
            <p className="mb-2">
              Showcase of my works for the enterprise solution. This includes
              design and development for applications on the web, HP network and
              mobile.
            </p>
            <p className="mb-2">
              Utilising the latest technologies such as HTML5, CSS3 and
              javascript frameworks, including Angular JS, Node JS and Express
              JS.
            </p>
            <p className="mb-2">
              On the design, it all starts with pen and paper, to Invision app
              and Adobe Creative Suite, which my most used and abused tools,
              Adobe Photoshop and Adobe Illustrator.
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
        {/* The Exchange */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/hp-ex-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="The Exchange"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-ex-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="The Exchange"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-ex-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="The Exchange"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">The Exchange</p>
                The Exchange is a web portal to gather all HP’s competency
                centers in one place.
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
                      <p className="text-md">Designer / Developer</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-md/6 font-semibold tracking-wide uppercase">
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
        {/* HP Prototype Center */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/hp-pc-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP Prototype Center"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-pc-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HP Prototype Center"
                  />
                </div>
                <div className="p-4">
                  <StaticImage
                    src="../../images/hp-pc-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HP Prototype Center"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">
                  HP Prototype Center
                </p>
                HP Prototype Center is an innovation idea for HP TechDay ‘14.
                The idea is to have a one-stop center for cloud community which
                offers capabilities to provide prototype catalog, collaboration,
                knowledge and prototype sharing with approved workflow among
                community members.
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
                      <p className="text-md">Designer / Developer</p>
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
        {/* HP InstaEvent */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/hp-ie-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP InstaEvent"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-ie-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HP InstaEvent"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-ie-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HP InstaEvent"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">HP InstaEvent</p>
                HP InstaEvent is a web application for HP Malaysia to manage and
                view internal HP global events.
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
                      <p className="text-md">Angular / NodeJS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Designer / Developer</p>
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
        {/* HP InstaEvent App */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex flex-row overflow-x-auto">
              <div className="min-w-[299px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/hp-iem-1.png"
                  placeholder="blurred"
                  width={299}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP InstaEvent App"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/hp-iem-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP InstaEvent App"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/hp-iem-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP InstaEvent App"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/hp-iem-4.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP InstaEvent App"
                />
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">HP InstaEvent App</p>
                HP InstaEvent mobile app is a cross platform mobile application
                for HP Malaysia to manage and view internal HP global events.
                Main features includes event list, event details (location,
                session and schedule), search events, GPS and map view
                integration, QR code scanner, user feedback and event
                notifications.
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
                      <p className="text-md">Phonegap / Apache Cordova</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Designer / Developer</p>
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
        {/* HP ReachOut */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex flex-row overflow-x-auto">
              <div className="min-w-[299px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/hp-reachout-1.png"
                  placeholder="blurred"
                  width={299}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP ReachOut"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/hp-reachout-2.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP ReachOut"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/hp-reachout-3.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP ReachOut"
                />
              </div>
              <div className="min-w-[270px] content-center p-4">
                <StaticImage
                  src="../../images/hp-reachout-4.png"
                  placeholder="blurred"
                  width={270}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP ReachOut"
                />
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">HP ReachOut</p>
                HP ReachOut is a messaging application for internal HP use. It
                includes chat and survey type messaging and broadcast for
                management to give the latest updates out to the entire HP.
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
                      <p className="text-md">Phonegap / Apache Cordova</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Designer / Developer</p>
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
        {/* HP Order Maintenance : Viper */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/hp-viper-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP Order Maintenance"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-viper-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HP Order Maintenance"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-viper-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HP Order Maintenance"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">
                  HP Order Maintenance : Viper
                </p>
                Viper is an intelligent sales order management and maintenance,
                which handle complex scenarios include bundling, multi-config,
                and multi-point order fulfillment. It supports global internal
                business organization and external business partners/customers.
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
                      <p className="text-md">Angular / NodeJS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Designer / Developer</p>
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
        {/* HP Reseller Portal */}
        <div className="snap-section flex min-h-screen flex-col content-center justify-center gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:flex-row">
          <section className="order-last lg:order-first lg:col-span-10">
            <div className="no-scrollbar flex h-full max-w-full flex-row overflow-x-auto">
              <div className="min-w-[600px] p-4 lg:pl-0">
                <StaticImage
                  src="../../images/hp-rp-1.png"
                  placeholder="blurred"
                  width={600}
                  quality={100}
                  formats={['auto', 'webp', 'avif']}
                  alt="HP Reseller Portal"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-rp-2.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HP Reseller Portal"
                  />
                </div>
                <div className="min-w-[560px] p-4">
                  <StaticImage
                    src="../../images/hp-rp-3.png"
                    placeholder="blurred"
                    width={560}
                    quality={100}
                    formats={['auto', 'webp', 'avif']}
                    alt="HP Reseller Portal"
                  />
                </div>
              </div>
            </div>
          </section>
          <aside className="gap-6 lg:col-span-10 lg:grid lg:grid-cols-10">
            <div className="flex flex-col gap-6 px-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:flex-row lg:p-0">
              <div className="flex flex-col lg:col-span-4">
                <p className="mb-2 text-2xl font-semibold">
                  HP Reseller Portal
                </p>
                HP Reseller Portal is a system connecting Viper Order
                Maintenance to enable a better communication between external
                partners and HP. It allows HP external partners to manage the
                product inventory, view order related informantion and accept,
                reject and reassign the order.
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
                      <p className="text-md">Angular / NodeJS</p>
                    </div>
                  </div>
                </div>
                <div className="lg:basis-1/2">
                  <div className="p-4">
                    <h4 className="text-md font-semibold tracking-wide uppercase">
                      Role
                    </h4>
                    <div className="font-normal">
                      <p className="text-md">Designer / Developer</p>
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

export default CompanyHPPage

export const Head = () => (
  <title>Portfolio for Hewlett-Packard Inc. : Sabri Maslan</title>
)
