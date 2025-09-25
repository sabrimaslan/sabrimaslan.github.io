import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import DownIcon from '../../components/down'
import Layout from '../../components/layout'

const WorksPage = () => {
  return (
    <Layout>
      <main className="snap-container p-6 lg:col-span-10 lg:p-0">
        <div className="snap-section h-screen min-h-fit content-center gap-6 lg:grid lg:grid-cols-10">
          <div className="lg:col-span-10">
            <div className="mb-5 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em] lg:mb-0">
              Digitalized.
            </div>
          </div>
          <section className="lg:col-span-4 lg:content-start">
            <p className="mb-4 text-lg font-bold">
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
          </section>
          <section className="lg:col-span-4">
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
            <div className="text-md flex justify-end py-6 font-semibold">
              <button
                className="cursor-pointer align-text-bottom no-underline underline-offset-4 hover:underline"
                onClick={() => scrollTo('#article1')}
              >
                Case Study{' '}
              </button>
              <span className="animate-bounce px-2">
                <DownIcon />
              </span>
            </div>
          </section>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </div>
        <article
          className="snap-section h-screen min-h-fit gap-6 py-10 lg:grid lg:h-screen lg:grid-cols-10 lg:content-start lg:py-20"
          id="article1"
        >
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Project: Design System Integration
            </h4>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-lg/6 font-bold">
              Role: UI/UX Technical Lead
            </p>
            <h5 className="font-bold">Challenges:</h5>
            <p className="mb-4">
              Integrating two legacy design systems post-merger, aiming for
              unified user experience and development efficiency.
            </p>
            <h5 className="font-bold">Leadership Actions:</h5>
            <p className="mb-4">
              Spearheaded a cross-department task force, facilitated workshops,
              and mentored UI/UX teams on best practices.
            </p>
            <h5 className="font-bold">Results:</h5>
            <p className="mb-4">
              Delivered a harmonized design system in record time, boosting
              cross-team productivity by 40%, enhancing brand consistency, and
              reducing redundant development hours.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="p-4 lg:pl-0">
              <StaticImage
                src="../../images/celcom-prisma-1.png"
                placeholder="blurred"
                width={600}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Celcom Web Portal"
              />
            </div>
            <div className="text-md flex justify-end py-6 font-semibold">
              Scroll{' '}
              <StaticImage
                src="../../images/scroll.png"
                className="rotate-45"
                placeholder="blurred"
                height={24}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Scroll"
              />
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </article>
        <div className="snap-section h-screen min-h-fit gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center">
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Project: HR Onboarding Application – Digital Transformation
            </h4>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-lg/6 font-bold">Role: Innovation Lead</p>
            <h5 className="font-bold">Challenges:</h5>
            <p className="mb-4">
              Manual HR onboarding processes impeding operational scalability
              and employee satisfaction.
            </p>
            <h5 className="font-bold">Leadership Actions:</h5>
            <p className="mb-4">
              Conceptualized and led the development of an automated onboarding
              platform, collaborating with HR, IT, and legal.
            </p>
            <h5 className="font-bold">Results:</h5>
            <p className="mb-4">
              Reduced onboarding time by 50%, improved new hire engagement
              scores, and set the foundation for scalable employee lifecycle
              management.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="p-4 lg:pl-0">
              <StaticImage
                src="../../images/celcom-onboardme-1.png"
                placeholder="blurred"
                width={600}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Celcom Web Portal"
              />
            </div>
            <div className="text-md flex justify-end py-6 font-semibold">
              Scroll{' '}
              <StaticImage
                src="../../images/scroll.png"
                className="rotate-45"
                placeholder="blurred"
                height={24}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Scroll"
              />
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </div>
        <div className="snap-section h-screen min-h-fit gap-6 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center">
          <div className="lg:col-span-10">
            <h4 className="pb-6 text-2xl font-semibold lg:pb-0">
              Enterprise Customer Portal Modernization
            </h4>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-lg/6 font-bold">
              Role: Transformation Program Lead
            </p>
            <p className="mb-4">
              Challenge: Outdated customer portal led to low engagement and
              scalability issues.
            </p>
            <p className="mb-4">
              Leadership Actions: Assembled a diverse team across IT, design,
              and customer success. Ran fortnightly strategy reviews, challenged
              assumptions, and championed rapid prototyping.
            </p>
            <p className="mb-4">
              Results: Launched a cloud-native platform ahead of schedule,
              raising customer satisfaction scores by 35% and reducing
              maintenance costs by 28%.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="p-4 lg:pl-0">
              <StaticImage
                src="../../images/celcom-business-1.png"
                placeholder="blurred"
                width={600}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Celcom Web Portal"
              />
            </div>
            <div className="text-md flex justify-end py-6 font-semibold">
              Scroll{' '}
              <StaticImage
                src="../../images/scroll.png"
                className="rotate-45"
                placeholder="blurred"
                height={24}
                quality={100}
                formats={['auto', 'webp', 'avif']}
                alt="Scroll"
              />
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
        </div>
      </main>
    </Layout>
  )
}

export default WorksPage

export const Head = () => <title>Works : Sabri Maslan</title>
