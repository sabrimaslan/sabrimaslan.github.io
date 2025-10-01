import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import TopIcon from '../../components/top'
import UpIcon from '../../components/up'
import DownIcon from '../../components/down'
import Layout from '../../components/layout'
import PageNav from '../../components/pagenav'
import scrollTo from 'gatsby-plugin-smoothscroll'

const anchors = [
  {
    name: 'Introduction',
    link: 'introduction',
  },
  {
    name: 'Innovation',
    link: 'innovation',
  },
  {
    name: 'Integration',
    link: 'integration',
  },
  {
    name: 'Transformation',
    link: 'transformation',
  },
]

const WorksPage = () => {
  return (
    <Layout>
      <main className="snap-container p-6 lg:col-span-10 lg:p-0">
        <PageNav anchors={anchors} />
        <section
          className="snap-section h-screen min-h-fit content-center gap-6 lg:grid lg:grid-cols-10"
          id="introduction"
        >
          <div className="lg:col-span-8">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Driving transformation, innovation, and exceptional teams.
            </h4>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
          <article className="lg:col-span-4 lg:content-start">
            <p className="mb-4 text-lg/6 font-bold">
              Behind every successful digital transformation lies a story — of
              vision, challenge, collaboration and delivery.
            </p>
            <p className="mb-4">
              This collection shares some of those stories from my career, where
              leadership met hands-on engineering to build solutions that
              matter.
            </p>
            <p className="mb-4">
              From navigating complex regulatory landscapes to architecting
              scalable systems and empowering cross-functional teams, each case
              offers a glimpse into how strategy and execution intertwine.
            </p>
          </article>
          <article className="lg:col-span-4">
            <p className="mb-4">
              These highlights are more than just projects; they are journeys of
              innovation, resilience, and impact — brought to life by passionate
              teams working toward a common goal.
            </p>
            <p className="mb-4 text-xl font-semibold">
              Bridging strategy and engineering to accelerate digital
              innovation.
            </p>
            <p className="mb-4">
              Take a look to see how I approach technology and leadership to
              create meaningful outcomes, one challenge at a time.
            </p>
            <div className="text-md animate__animated animate__fadeInUp animate__slower flex justify-end font-semibold">
              <button
                className="animate-bounce cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#innovation')}
              >
                <DownIcon />
              </button>
            </div>
          </article>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit content-center gap-6 lg:grid lg:grid-cols-10"
          id="innovation"
        >
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Innovation: HR Onboarding
            </h4>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-lg/6 font-bold">Role: Innovation Lead</p>
            <h5 className="font-bold">Challenges:</h5>
            <p className="mb-4">
              Manual people onboarding processes impeding operational
              scalability and employee satisfaction.
            </p>
            <h5 className="font-bold">Leadership Actions:</h5>
            <p className="mb-4">
              Conceptualized and led the development of an automated onboarding
              platform, collaborating with HR, IT and legal.
            </p>
            <h5 className="font-bold">Results:</h5>
            <p className="mb-4">
              Reduced onboarding time by 50%, improved new hire engagement
              scores, and set the foundation for scalable employee lifecycle
              management.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="mb-4">
              <StaticImage
                src="../../images/celcom-onboardme-1.png"
                placeholder="blurred"
                width={600}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Celcom Onboardme"
              />
            </div>
            <div className="text-md flex justify-end gap-2 font-semibold">
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#introduction')}
              >
                <UpIcon />
              </button>
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#integration')}
              >
                <DownIcon />
              </button>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit content-center gap-6 lg:grid lg:grid-cols-10"
          id="integration"
        >
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Integration: Design System
            </h4>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-lg/6 font-bold">
              Role: UI/UX Technical Lead
            </p>
            <h5 className="font-bold">Challenges:</h5>
            <p className="mb-4">
              Integrating legacy web and mobile application with the design
              system, aiming for unified user experience and development
              efficiency.
            </p>
            <h5 className="font-bold">Leadership Actions:</h5>
            <p className="mb-4">
              Spearheaded a cross-department task force, facilitated workshops and mentored UI/UX teams on best practices.
            </p>
            <h5 className="font-bold">Results:</h5>
            <p className="mb-4">
              Delivered a harmonized design system in record time, boosting
              cross-team productivity by 40%, enhancing brand consistency and
              reducing redundant development hours.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="mb-4">
              <StaticImage
                src="../../images/celcom-prisma-1.png"
                placeholder="blurred"
                width={600}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Celcom Prisma"
              />
            </div>
            <div className="text-md flex justify-end gap-2 font-semibold">
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#innovation')}
              >
                <UpIcon />
              </button>
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#transformation')}
              >
                <DownIcon />
              </button>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
        <section
          className="snap-section h-screen min-h-fit gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center"
          id="transformation"
        >
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Transformation Enterprise Customer Portal Modernization
            </h4>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-lg/6 font-bold">
              Role: Transformation Program Lead
            </p>
            <h5 className="font-bold">Challenge: </h5>
            <p className="mb-4">
              Outdated customer portal led to low engagement and
              scalability issues.
            </p>
            <h5 className="font-bold">Leadership Actions: </h5>
            <p className="mb-4">
              Assembled a diverse team across IT, design,
              and customer success. Ran fortnightly strategy reviews, challenged
              assumptions, and championed rapid prototyping.
            </p>
            <h5 className="font-bold">Results: </h5>
            <p className="mb-4">
              Launched a cloud-native platform ahead of schedule,
              raising customer satisfaction scores by 35% and reducing
              maintenance costs by 28%.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="mb-4">
              <StaticImage
                src="../../images/celcom-business-1.png"
                placeholder="blurred"
                width={600}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Celcom Web Portal"
              />
            </div>
            <div className="text-md flex justify-end gap-2 font-semibold">
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#introduction')}
              >
                <TopIcon />
              </button>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </section>
      </main>
    </Layout>
  )
}

export default WorksPage

export const Head = () => <title>Works : Sabri Maslan</title>
