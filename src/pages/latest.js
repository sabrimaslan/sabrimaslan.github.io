import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const LatestPage = () => {
  return (
    <>
      <aside className="relative mx-auto flex max-w-4xl flex-row md:mt-4">
        <div className="p-6">
          <a
            className="text-sm font-semibold uppercase underline underline-offset-4"
            href="/Sabri_Maslan_-_2025_-_Head_IT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download PDF{' '}
            <StaticImage
              src="../images/scroll.png"
              className="rotate-90"
              placeholder="blurred"
              height={24}
              quality={100}
              formats={['auto', 'webp', 'avif']}
              alt="Download"
            />
          </a>
        </div>
      </aside>
      <header className="relative mx-auto flex max-w-4xl flex-col md:mt-10 md:flex-row">
        <div className="basis-4/5 p-6">
          <div className="items-center">
            <h1 className="text-2xl font-semibold">Sabri Maslan</h1>
            <h2 className="text-xl font-normal">
              Lead, IT Engineering & UI/UX
            </h2>
            <div className="md:flex md:flex-row">
              <div className="mt-4 flex max-w-7xl flex-col md:basis-1/2">
                <div className="text-md/6 mr-8 font-light">+60 13 277 3880</div>
                <div className="mr-8">
                  <a
                    className="text-md/6 font-light underline underline-offset-4"
                    href="mailto:sabri.maslan@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sabri.maslan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex max-w-7xl flex-col md:mt-4 md:basis-1/2">
                <div>
                  <a
                    className="text-md/6 font-light underline underline-offset-4"
                    href="https://www.linkedin.com/in/sabrimaslan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/sabrimaslan
                  </a>
                </div>
                <div>
                  <a
                    className="text-md/6 font-light underline underline-offset-4"
                    href="https://sabrimaslan.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sabrimaslan.github.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-first basis-1/5 p-6 md:order-last">
          <div className="flex justify-end">
            <StaticImage
              src="../images/avatar.png"
              placeholder="blurred"
              width={128}
              quality={100}
              formats={['auto', 'webp', 'avif']}
              alt="Sabri Maslan"
            />
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex min-h-screen max-w-4xl flex-col md:mb-10">
        <section className="p-6 md:py-3">
          <h4 className="text-md font-[Open_Sans] font-semibold tracking-[.25em] uppercase">
            Professional Summary
          </h4>
          <hr className="my-2 w-full border-t-2"></hr>
          <div className="flex flex-col">
            Results-driven IT leader with over 15 years of experience spanning
            engineering, digital platforms, and enterprise systems. Proven
            success in leading IT strategy, governance, and large-scale digital
            transformations in highly regulated industries. Adept at building
            and scaling cross-functional teams, driving compliance-aligned
            technology roadmaps, and optimizing IT assets to reduce costs and
            enhance resilience. Hands-on leader with a track record of
            delivering mission-critical systems (BSS, middleware, payment
            gateways, and digital identity platforms) under high-stakes,
            fast-moving environments.
          </div>
        </section>
        <section className="p-6 md:py-3">
          <h4 className="text-md font-[Open_Sans] font-semibold tracking-[.25em] uppercase">
            Core Competencies
          </h4>
          <hr className="my-2 w-full border-t-2"></hr>
          <div className="flex flex-col">
            Digital Transformation • Agile Delivery • Enterprise Architecture •
            Payment Systems • Middleware & APIs • BSS Platforms • eKYC & Digital
            Identity • Cloud Migration • Product Development • IT Strategy &
            Roadmap • Customer-Centric Applications • Vendor & Stakeholder
            Management
          </div>
        </section>
        <section className="p-6 md:py-3">
          <h4 className="text-md font-[Open_Sans] font-semibold tracking-[.25em] uppercase">
            Professional Experience
          </h4>
          <hr className="my-2 w-full border-t-2"></hr>
          <div className="flex flex-col">
            <h2 className="mb-1 text-lg/6 font-normal">Head, Engineering</h2>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-lg/6 font-semibold">TIME dotCom Berhad</h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Glenmarie</span>
                <span className="text-sm">May 2024 - Present</span>
              </div>
            </div>
            <div className="mt-2">
              As the Head of Engineering
              <ul className="ml-6 list-disc">
                <li>
                  Leading end-to-end BSS development (billing, CRM, order
                  management) to support new product launches and digital
                  scalability.
                </li>
                <li>
                  Oversaw delivery of mobile apps, kiosks, dealer app, and
                  WhatsApp acquisition bots, boosting customer acquisition
                  conversion by 30%.
                </li>
                <li>
                  Built and mentored a cross-functional Agile team, driving
                  sprint velocity improvement and reducing delivery lead time by
                  25%.
                </li>
                <li>
                  Introduced digital payment gateway and eKYC solutions, aligned
                  with financial industry authentication standards to enhance
                  customer onboarding.
                </li>
                <li>
                  Implemented IT Asset Management (ITAM) for applications and
                  infrastructure, reducing operational costs by double-digit
                  percentages.
                </li>
              </ul>
            </div>
            <div className="mt-2">
              As the Head of IT (Interim) — Due to departure of Chief IT Officer
              <ul className="ml-6 list-disc">
                <li>
                  Defined target architecture for digital-first operations,
                  enabling the spin-off company to build modern customer
                  platforms independent of legacy systems.
                </li>
                <li>
                  Guided customer 360° data unification initiative, enabling
                  analytics-driven personalization and revenue protection.
                </li>
                <li>
                  Championed Agile portfolio delivery, ensuring mission-critical
                  projects progressed despite limited resources.
                </li>
                <li>
                  Acted as bridge between Group IT and Retail IT, balancing
                  innovation speed with compliance.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <span className="font-semibold">Key Achievements</span>
              <ul className="ml-6 list-disc">
                <li>
                  Implemented compliance-first middleware to ensure audit trails
                  across all customer transactions.
                </li>
                <li>
                  Successfully launched customer self-care apps and kiosks,
                  cutting onboarding time by 40%.
                </li>
                <li>
                  Delivered WhatsApp acquisition and review bots, achieving
                  faster sign-ups and higher engagement.
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
          <div className="flex flex-col">
            <h2 className="mb-1 text-lg/6 font-normal">
              Head of Platform Dev (B2C) / UX Technical Lead
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-lg/6 font-semibold">
                CelcomDigi Berhad / Celcom Axiata Berhad
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Petaling Jaya</span>
                <span className="text-sm">Jun 2018 - April 2024</span>
              </div>
            </div>
            <div className="mt-2">
              <ul className="ml-6 list-disc">
                <li>
                  Led a digital team with expertise from UI to AI, overseeing
                  delivery across CelcomDigi’s post-merger consumer mobile app
                  and Celcom’s web and mobile products.
                </li>
                <li>
                  Served as principal for the Celcom Design System, building and
                  maintaining reusable components.
                </li>
                <li>
                  Executed UI/UX design and development for digital initiatives,
                  collaborating with partner developers to ensure high-quality
                  delivery.
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
          <div className="flex flex-col">
            <h2 className="mb-1 text-lg/6 font-normal">
              Team Lead / Specialist / Engineer
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-lg/6 font-semibold">
                DXC Technology / Hewlett Packard Enterprise / HP Inc.
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Cyberjaya</span>
                <span className="text-sm">Dec 2012 - May 2018</span>
              </div>
            </div>
            <div className="mt-2">
              <ul className="ml-6 list-disc">
                <li>
                  Led a UI/UX team in Cyberjaya collaborating with global teams
                  across China, Europe, and the US to develop BPO service
                  offerings.
                </li>
                <li>
                  Managed support teams in Malaysia (Asia) and Mexico (Americas)
                  during HP’s corporate separation, ensuring business
                  continuity.
                </li>
                <li>
                  Delivered UI/UX solutions for web and mobile across HP, HPE,
                  and DXC projects, working closely with Java and .NET backend
                  developers.
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
          <div className="flex flex-col">
            <h2 className="mb-1 text-lg/6 font-normal">
              Developer / Consultant
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-lg/6 font-semibold">
                Masbih Technologies Sdn. Bhd. / Flexter Technology
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Kuala Lumpur</span>
                <span className="text-sm">2007 - Nov 2012</span>
              </div>
            </div>
            <div className="mt-2">
              <ul className="ml-6 list-disc">
                <li>
                  Delivered and maintained web applications for clients
                  including Tabung Haji, MARA, and HUKM.{' '}
                </li>
                <li>
                  Collaborated with client-side developers to implement and
                  support custom web solutions.
                </li>
                <li>
                  Customized designs, structured layouts, and developed websites
                  using both proprietary and open-source platforms.{' '}
                </li>
                <li>
                  Conducted hands-on training for clients on CMS tools, and the
                  company’s in-house Instant Web Development Platform.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="p-6 md:py-3">
          <h4 className="text-md font-[Open_Sans] font-semibold tracking-[.25em] uppercase">
            Education
          </h4>
          <hr className="my-2 w-full border-t-2"></hr>
          <div className="flex flex-col">
            <h2 className="mb-1 text-lg/6 font-normal">
              Mechatronic Engineering
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-lg/6 font-semibold">
                DaimlerChrysler (M) Training Centre
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Shah Alam</span>
                <span className="text-sm">2003 - 2005</span>
              </div>
            </div>
          </div>
          <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
          <div className="flex flex-col">
            <h2 className="mb-1 text-lg/6 font-normal">
              Faculty of Civil Engineering
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-lg/6 font-semibold">
                Universiti Teknology MARA
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Shah Alam</span>
                <span className="text-sm">1999 - 2002</span>
              </div>
            </div>
          </div>
          <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
          <div className="flex flex-col">
            <h2 className="mb-1 text-lg/6 font-normal">
              Sijil Pelajaran Malaysia
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-lg/6 font-semibold">
                Sekolah Menengah Teknik Setapak
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Kuala Lumpur</span>
                <span className="text-sm">1998</span>
              </div>
            </div>
          </div>
        </section>
        <section className="p-6 md:pt-3">
          <h4 className="text-md font-[Open_Sans] font-semibold tracking-[.25em] uppercase">
            Reference
          </h4>
          <hr className="my-2 w-full border-t-2"></hr>
          <div className="flex flex-col">References available upon request</div>
        </section>
      </main>
    </>
  )
}

export default LatestPage

export const Head = () => <title>Sabri Maslan</title>
