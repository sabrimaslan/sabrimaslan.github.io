import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <main className="flex w-full flex-col lg:basis-5/6 lg:flex-row">
        <aside className="flex flex-col p-6 lg:h-screen lg:basis-1/5 lg:p-0">
          <div className="hidden items-end p-4 lg:flex lg:basis-2/5">
            &nbsp;
          </div>
          <div className="p-4 lg:basis-3/5">
            <div className="font-[Sometype_Mono] text-6xl/12 font-bold -tracking-[.175em]">
              Hey again.
            </div>
          </div>
        </aside>
        <section className="flex w-full flex-col p-6 lg:basis-2/5 lg:justify-center lg:p-0">
          <div className="flex flex-col p-4 lg:basis-2/5 lg:justify-end">
            <h4 className="text-lg/6 font-semibold tracking-[.25em] uppercase">
              About
            </h4>
          </div>
          <div className="p-4 lg:basis-3/5">
            <div className="font-normal">
              <p className="mb-4">
                As a strategist with over 15+ years in UI/UX, IT engineering and
                delivery, I excel in creating user-driven systems that align
                tech execution with product goals. I have a proven track record
                of leading teams through significant transitions and delivering
                effective design systems, ensuring enhanced collaboration,
                operational improvements, and sustained business outcomes.
              </p>
              <p className="mb-4">
                <Link
                  className="text-md/6 no-underline underline-offset-4 hover:underline"
                  to="/latest"
                >
                  View my latest resume here
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About : Sabri Maslan</title>
