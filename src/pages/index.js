import * as React from 'react'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <main className="flex w-full flex-col lg:basis-5/6 lg:flex-row">
        <div className="hidden flex-col lg:flex lg:h-screen lg:basis-1/10"></div>
        <aside className="flex flex-col px-6 lg:h-screen lg:basis-1/5 lg:p-0">
          <div className="hidden items-end p-4 lg:flex lg:basis-2/5">
            &nbsp;
          </div>
          <div className="p-4 lg:basis-3/5">
            <div className="font-[Sometype_Mono] text-6xl/12 font-bold -tracking-[.175em]">
              Hello.
            </div>
            <div className="mt-4 text-2xl/8 font-semibold lg:-ml-10">
              <span className="font-light">I'm </span>Sabri Maslan
            </div>
            <div className="text-xl/6 font-normal uppercase">
              Lead, IT & UI/UX
            </div>
          </div>
        </aside>
        <section className="flex w-full flex-col px-6 lg:basis-3/5 lg:justify-center lg:p-0 xl:basis-2/5">
          <div className="flex flex-col p-4 lg:basis-2/5 lg:justify-end">
            <h4 className="text-lg/6 font-semibold tracking-[.25em] uppercase">
              Prologue
            </h4>
          </div>
          <div className="p-4 lg:basis-3/5">
            <div className="font-normal">
              <p className="mb-4">
                This portfolio features a curated selection of my work,
                reflecting over 15 years of experience across design,
                engineering, and digital leadership.
              </p>
              <p className="mb-4">
                For more than a decade, I’ve led teams with a hands-on,
                sleeves-rolled-up approach — collaborative, grounded, and deeply
                involved in the day-to-day.
              </p>
              <p className="mb-4">
                If you’re building something ambitious — I’m in.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Sabri Maslan</title>
