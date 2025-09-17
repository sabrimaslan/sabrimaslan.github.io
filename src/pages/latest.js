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
      <header className="relative mx-auto flex max-w-4xl flex-col md:flex-row">
        <div className="basis-4/5 p-6">
          <div className="items-center">
            <h1 className="text-2xl font-semibold">Sabri Maslan</h1>
            <h2 className="text-xl font-normal">
              Head, Digital Engineering & Innovation
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
            Experienced IT leader with 15+ years driving digital transformation,
            enterprise architecture, and technology innovation in highly
            regulated industries. Skilled in leading secure and scalable digital
            platforms including telco BSS, middleware, payment gateways, and
            digital identity systems. Proven ability to develop digital
            innovation strategies, architect mission-critical systems, and lead
            agile, cross-functional teams to deliver compliant, customer-centric
            solutions aligned with national digital economy goals.
          </div>
        </section>
        <section className="p-6 md:py-3">
          <h4 className="text-md font-[Open_Sans] font-semibold tracking-[.25em] uppercase">
            Core Competencies
          </h4>
          <hr className="my-2 w-full border-t-2"></hr>
          <div className="flex flex-col">
            <ul className="ml-6 list-disc">
              <li>Digital Innovation Strategy & Technology Roadmaps</li>
              <li>Enterprise Architecture & Scalable System Design</li>
              <li>
                Secure-by-Design Software Development & DevOps (CI/CD,
                Automation, Containers)
              </li>
              <li>Cloud Infrastructure Migration & Management</li>
              <li>Middleware, API Management & BSS Platforms</li>
              <li>eKYC, Digital Identity & Customer Data Unification</li>
              <li>Agile Delivery & Cross-Functional Team Leadership</li>
              <li>Vendor & Stakeholder Management</li>
              <li>Customer-Centric Application & Platform Development</li>
            </ul>
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
                  Lead architecture and delivery of end-to-end Business Support
                  System (BSS) platforms (billing, CRM, order management) to
                  support new product launches and digital scalability.
                </li>
                <li>
                  Directed digital transformation initiatives including mobile
                  apps, kiosks, dealer apps, and WhatsApp acquisition bots,
                  increasing customer acquisition by 30%.
                </li>
                <li>
                  Built and led agile, cross-functional teams (Project
                  Management, Development, DevOps, UI/UX and Quality Assurance),
                  driving a 25% improvement in sprint velocity and reducing
                  delivery lead times.
                </li>
                <li>
                  Implemented a digital payment gateway and eKYC solutions
                  compliant with financial authentication standards to
                  streamline customer onboarding.
                </li>
                <li>
                  Spearheaded IT Asset Management (ITAM) strategy for
                  applications and infrastructure, reducing operational costs.
                </li>
              </ul>
            </div>
            <div className="mt-2">
              As the Head of IT (Interim) — Due to departure of Chief IT Officer
              <ul className="ml-6 list-disc">
                <li>
                  Defined target digital architecture for modern,
                  legacy-independent customer platforms aligned with national
                  digital transformation goals.
                </li>
                <li>
                  Led customer 360° data unification driving analytics-driven
                  personalization and revenue protection across platforms.
                </li>
                <li>
                  Championed Agile portfolio delivery to maintain
                  mission-critical project milestones despite resource
                  constraints.
                </li>
                <li>
                  Balanced innovation speed with regulatory compliance between
                  Group IT and Retail IT functions.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <span className="font-semibold">Key Achievements</span>
              <ul className="ml-6 list-disc">
                <li>
                  Rolled out a compliance-first middleware solution ensuring
                  audit trails for all transactions, meeting regulatory
                  requirements.
                </li>
                <li>
                  Launched customer self-care applications and kiosks, reducing
                  onboarding time by 40%.
                </li>
                <li>
                  Delivered WhatsApp bots for acquisition and customer
                  engagement, significantly improving sign-up velocity.
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
                  Led multidisciplinary product development teams integrating
                  UI/UX design, AI, and backend solutions across consumer mobile
                  and web platforms.
                </li>
                <li>
                  Principal architect and maintainer of the Celcom Design
                  System, driving reusable components and accessible digital
                  design standards.
                </li>
                <li>
                  Ensured high-quality delivery through continuous collaboration
                  with partner development teams and adherence to Agile
                  methodologies.
                </li>
                <li>
                  Facilitated cloud platform migration and incremental
                  scalability in alignment with organizational digital
                  strategies.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <span className="font-semibold">Key Achievements</span>
              <ul className="ml-6 list-disc">
                <li>
                  Spearheaded integration of the Design System across major
                  platforms, establishing a unified, scalable, reusable
                  component framework that served as the foundational framework
                  during the merger which significantly reducing development
                  effort and accelerating time-to-market.
                </li>
                <li>
                  Innovated and deployed a web-based onboarding solution
                  integrated with HR systems, transforming and streamlining
                  onboarding processes to enhance operational efficiency and
                  user experience.
                </li>
                <li>
                  Fostered a live documentation culture, enhancing collaboration
                  and boosting organizational knowledge sharing across teams and
                  departments.
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
                  Managed global UI/UX teams delivering web and mobile solutions
                  for business process outsourcing (BPO) clients in Asia,
                  Europe, and the Americas.
                </li>
                <li>
                  Oversaw business continuity and support during corporate
                  separation efforts, ensuring uninterrupted service delivery.
                </li>
                <li>
                  Developed user-centric design solutions in collaboration with
                  backend teams using Java and .NET technologies.
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
                  Delivered customized and scalable web applications for
                  government and corporate clients including Tabung Haji, MARA,
                  and HUKM.
                </li>
                <li>
                  Provided client training on CMS tools and proprietary Instant
                  Web Development platforms to enhance client self-sufficiency.
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
