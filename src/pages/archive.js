import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ArchivePage = () => {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
      <div className="p-6 md:basis-1/4 md:p-0">
        <div className="p-4 text-center">
          <StaticImage
            src="../images/avatar.png"
            className="mt-8 md:mt-16"
            placeholder="blurred"
            width={168}
            quality={100}
            formats={['auto', 'webp', 'avif']}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
        <div className="p-4">
          <h1 className="text-2xl/8 font-semibold">Sabri Maslan</h1>
          <h2 className="text-xl/6 font-normal uppercase">
            Head, Lead
            <br />
            Engineering
            <br />
            UI/UX
          </h2>
          <h3 className="mt-4 text-lg/6 font-light">
            +60 13 277 3880
            <br />
            <a
              className="underline"
              href="mailto:sabri.maslan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sabri.maslan@gmail.com
            </a>
          </h3>
          <h3 className="mt-4 text-lg font-light">
            <a
              className="underline"
              href="https://www.linkedin.com/in/sabrimaslan"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sabrimaslan
            </a>
          </h3>
        </div>
      </div>
      <div className="p-6 md:basis-3/4">
        <div className="p-4">
          <h4 className="text-xs/6 font-normal tracking-[.5em] uppercase">
            Profile
          </h4>
          <div className="font-normal">
            <p className="text-lg font-semibold">
              Creative. Strategic. Versatile.
            </p>
            Engineering strategist with a design edge — 15+ years leading UI/UX,
            frontend, and platform delivery. Skilled in design systems, team
            scaling, and aligning tech execution with product goals. Delivers
            systems that are not just functional, but user-driven and built to
            last.
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-xs/6 font-normal tracking-[.5em] uppercase">
            Experience
          </h4>
          <div className="mb-6">
            <h2 className="mb-1 text-xl/6">
              Head, Engineering / Head of IT{' '}
              <span className="text-sm">May 2024 - Present</span>
            </h2>
            <h3 className="text-xl/6">
              <span className="font-semibold">TIME dotCom Berhad </span>
              <span className="text-sm">Glenmarie</span>
            </h3>
            <div>
              Acted as Head of IT during the company’s spin-off, overseeing
              budgets, team structure, and operational planning in the absence
              of a Chief of IT. Led both UI/UX and engineering teams, with a key
              focus on accelerating delivery of the design system, BSS, and
              middleware platforms. Improved cross-functional collaboration,
              introduced KPI tracking, and integrated SIT earlier in the cycle.
              Advocated a greenfield architecture to resolve legacy
              inefficiencies and secured C-level buy-in for a phased rollout,
              ensuring business continuity and more predictable delivery
              outcomes.
            </div>
          </div>
          <div className="mb-6">
            <h2 className="mb-1 text-xl/6">
              Head of Platform Dev (B2C) / UX Technical Lead{' '}
              <span className="text-sm">Jun 2018 - April 2024</span>
            </h2>
            <h3 className="text-xl/6">
              <span className="font-semibold">
                CelcomDigi Berhad / Celcom Axiata Berhad{' '}
              </span>
              <span className="text-sm">Petaling Jaya</span>
            </h3>
            <div>
              Led a digital team with expertise from UI to AI, overseeing
              delivery across Celcom’s web and mobile products. Served as
              principal for the Celcom Design System, building and maintaining
              reusable components. Executed UI/UX design and development for
              digital initiatives, collaborating with partner developers to
              ensure high-quality delivery.
            </div>
          </div>
          <div className="mb-6">
            <h2 className="mb-1 text-xl/6">
              Team Lead / Specialist / Engineer{' '}
              <span className="text-sm">Dec 2012 - May 2018</span>
            </h2>
            <h3 className="text-xl/6">
              <span className="font-semibold">
                DXC Technology / Hewlett Packard Enterprise / HP Inc.{' '}
              </span>
              <span className="text-sm">Cyberjaya</span>
            </h3>
            <div>
              Led a UI/UX team in Cyberjaya collaborating with global teams
              across China, Europe, and the US to develop BPO service offerings.
              Managed support teams in Malaysia (Asia) and Mexico (Americas)
              during HP’s corporate separation, ensuring business continuity.
              Delivered UI/UX solutions for web and mobile across HP, HPE, and
              DXC projects, working closely with Java and .NET backend
              developers.
            </div>
          </div>
          <div>
            <h2 className="mb-1 text-xl/6">
              Developer / Consultant{' '}
              <span className="text-sm">2007 - Nov 2012</span>
            </h2>
            <h3 className="text-xl/6">
              <span className="font-semibold">
                Masbih Technologies Sdn. Bhd. / Flexter Technology{' '}
              </span>
              <span className="text-sm">Kuala Lumpur</span>
            </h3>
            <div>
              Delivered and maintained web applications for clients including
              Tabung Haji, MARA, and HUKM. Collaborated with client-side
              developers to implement and support custom web solutions.
              Customized designs, structured layouts, and developed websites
              using both proprietary and open-source platforms. Conducted
              hands-on training for clients on CMS tools, and the company’s
              in-house Instant Web Development Platform.
            </div>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-xs/6 font-normal tracking-[.5em] uppercase">
            Education
          </h4>
          <div className="mb-6">
            <h2 className="mb-1 text-xl/6">
              Mechatronic Engineering{' '}
              <span className="text-sm">2003 - 2005</span>
            </h2>
            <h3 className="text-xl/6">
              <span className="font-semibold">
                DaimlerChrysler (M) Training Centre{' '}
              </span>
              <span className="text-sm">Shah Alam</span>
            </h3>
          </div>
          <div className="mb-6">
            <h2 className="mb-1 text-xl/6">
              Faculty of Civil Engineering{' '}
              <span className="text-sm">1999 - 2002</span>
            </h2>
            <h3 className="text-xl/6">
              <span className="font-semibold">Universiti Teknologi MARA </span>
              <span className="text-sm">Shah Alam</span>
            </h3>
          </div>
          <div>
            <h2 className="mb-1 text-xl/6">
              Sijil Pelajaran Malaysia <span className="text-sm">1998</span>
            </h2>
            <h3 className="text-xl/6">
              <span className="font-semibold">
                Sekolah Menengah Teknik Setapak{' '}
              </span>
              <span className="text-sm">Kuala Lumpur</span>
            </h3>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-xs/6 font-normal tracking-[.5em] uppercase">
            Reference
          </h4>
          <h3 className="text-xl/6">
            <span className="font-semibold">
              References available upon request
            </span>
          </h3>
        </div>
      </div>
    </main>
  )
}

export default ArchivePage

export const Head = () => <title>Sabri Maslan</title>
