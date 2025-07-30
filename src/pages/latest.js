import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const LatestPage = () => {
  return (
    <>
      <header className="relative mx-auto flex max-w-6xl flex-row">
        <div className="mt-8 basis-3/5 p-6 md:mt-12 md:basis-4/5 md:p-0">
          <div className="p-4">
            <h1 className="text-2xl/8 font-semibold">Sabri Maslan</h1>
            <h2 className="text-xl/6 font-normal uppercase">
              Lead, IT & UI/UX
            </h2>
            <div className="mt-6 flex max-w-7xl flex-col md:flex-row">
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
            </div>
          </div>
        </div>
        <div className="basis-2/5 md:basis-1/5">
          <div className="flex justify-center p-0 md:p-4">
            <StaticImage
              src="../images/avatar.png"
              className="absolute top-4 -left-4 md:top-0 md:-left-0"
              placeholder="blurred"
              width={168}
              quality={100}
              formats={['auto', 'webp', 'avif']}
              alt="Sabri Maslan"
            />
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col md:flex-row">
        <div className="px-6 md:basis-2/3 md:p-0">
          <div className="block p-4 md:hidden">
            <h4 className="text-lg/6 font-semibold tracking-[.25em] uppercase">
              Profile
            </h4>
            <hr className="my-2 w-full border-t-2"></hr>
            <div className="font-normal">
              As a strategist with over 15+ years in UI/UX, IT engineering and
              delivery, I excel in creating user-driven systems that align tech
              execution with product goals. I have a proven track record of
              leading teams through significant transitions and delivering
              effective design systems, ensuring enhanced collaboration,
              operational improvements, and sustained business outcomes.
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg/6 font-semibold tracking-[.25em] uppercase">
              Experience
            </h4>
            <hr className="my-2 w-full border-t-2"></hr>
            <div className="flex flex-col">
              <h2 className="mb-1 text-lg/6 font-normal">
                Head, Engineering / Head of IT
              </h2>
              <h3 className="text-lg/6 font-semibold">TIME dotCom Berhad</h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">May 2024 - Present</span>
                <span className="text-sm">Glenmarie</span>
              </div>
              <div className="mt-2">
                Telecommunications company focusing on broadband services
                <ul className="ml-6 list-disc">
                  <li>
                    Oversaw budgets, team structure, and operational planning
                    during the company’s spin-off as Acting Head of IT
                  </li>
                  <li>
                    Led both UI/UX and engineering teams with focus on
                    accelerating delivery of the design system and middleware
                    platforms
                  </li>
                  <li>
                    Improved cross-functional collaboration, introduced KPI
                    tracking, and integrated SIT earlier in the cycle
                  </li>
                  <li>
                    Advocated a greenfield architecture to resolve legacy
                    inefficiencies and secured C-level buy-in for phased rollout
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
            <div className="flex flex-col">
              <h2 className="mb-1 text-lg/6 font-normal">
                Head of Platform Dev (B2C) / UX Technical Lead
              </h2>
              <h3 className="text-lg/6 font-semibold">
                CelcomDigi Berhad / Celcom Axiata Berhad
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Jun 2018 - April 2024</span>
                <span className="text-sm">Petaling Jaya</span>
              </div>
              <div className="mt-2">
                Leading telecommunications company in Malaysia
                <ul className="ml-6 list-disc">
                  <li>
                    Led a digital team overseeing delivery across web and mobile
                    products
                  </li>
                  <li>
                    Served as principal for the Celcom Design System, building
                    and maintaining reusable components
                  </li>
                  <li>
                    Executed UI/UX design and development for digital
                    initiatives and collaborated with partner developers to
                    ensure high-quality delivery
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
            <div className="flex flex-col">
              <h2 className="mb-1 text-lg/6 font-normal">
                Team Lead / Specialist / Engineer
              </h2>
              <h3 className="text-lg/6 font-semibold">
                DXC Technology / Hewlett Packard Enterprise / HP Inc.
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">Dec 2012 - May 2018</span>
                <span className="text-sm">Cyberjaya</span>
              </div>
              <div className="mt-2">
                Global leader in IT services and solutions
                <ul className="ml-6 list-disc">
                  <li>
                    Led a UI/UX team collaborating with global teams across
                    China, Europe, and the US to develop BPO service offerings
                  </li>
                  <li>
                    Managed support teams in Malaysia and Mexico during HP’s
                    corporate separation, ensuring business continuity
                  </li>
                  <li>Delivered UI/UX solutions for web and mobile projects</li>
                </ul>
              </div>
            </div>
            <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
            <div className="flex flex-col">
              <h2 className="mb-1 text-lg/6 font-normal">
                Developer / Consultant
              </h2>
              <h3 className="text-lg/6 font-semibold">
                Masbih Technologies Sdn. Bhd. / Flexter Technology
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">2007 - Nov 2012</span>
                <span className="text-sm">Kuala Lumpur</span>
              </div>
              <div className="mt-2">
                Consulting and development company specializing in web solutions
                <ul className="ml-6 list-disc">
                  <li>Delivered and maintained web applications for clients</li>
                  <li>
                    Collaborated with client-side developers to implement custom
                    web solutions
                  </li>
                  <li>Conducted hands-on training for clients on CMS tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-0 md:basis-1/3 md:p-0">
          <div className="hidden p-4 md:block">
            <h4 className="text-lg/6 font-semibold tracking-[.25em] uppercase">
              Profile
            </h4>
            <hr className="my-2 w-full border-t-2"></hr>
            <div className="font-normal">
              As a strategist with over 15+ years in UI/UX, IT engineering and
              delivery, I excel in creating user-driven systems that align tech
              execution with product goals. I have a proven track record of
              leading teams through significant transitions and delivering
              effective design systems, ensuring enhanced collaboration,
              operational improvements, and sustained business outcomes.
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg/6 font-semibold tracking-[.25em] uppercase">
              Education
            </h4>
            <hr className="my-2 w-full border-t-2"></hr>
            <div className="flex flex-col">
              <h2 className="mb-1 text-lg/6 font-normal">
                Mechatronic Engineering
              </h2>
              <h3 className="text-lg/6 font-semibold">
                DaimlerChrysler (M) Training Centre
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">2003 - 2005</span>
                <span className="text-sm">Shah Alam</span>
              </div>
            </div>
            <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
            <div className="flex flex-col">
              <h2 className="mb-1 text-lg/6 font-normal">
                Faculty of Civil Engineering
              </h2>
              <h3 className="text-lg/6 font-semibold">
                Universiti Teknologi MARA
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">1999 - 2002</span>
                <span className="text-sm">Shah Alam</span>
              </div>
            </div>
            <hr className="my-4 w-full border-t-2 border-dashed border-gray-300"></hr>
            <div className="flex flex-col">
              <h2 className="mb-1 text-lg/6 font-normal">
                Sijil Pelajaran Malaysia
              </h2>
              <h3 className="text-lg/6 font-semibold">
                Sekolah Menengah Teknik Setapak
              </h3>
              <div className="mt-1 flex flex-row font-normal text-gray-500">
                <span className="mr-4 text-sm">1998</span>
                <span className="text-sm">Kuala Lumpur</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg/6 font-semibold tracking-[.25em] uppercase">
              Reference
            </h4>
            <hr className="my-2 w-full border-t-2"></hr>
            <h3 className="text-lg/6 font-semibold">
              References available upon request
            </h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default LatestPage

export const Head = () => <title>Sabri Maslan</title>
