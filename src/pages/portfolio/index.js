import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const PortfolioPage = () => {
  return (
    <Layout>
      <main className="h-screen content-center gap-6 p-6 lg:col-span-10 lg:grid lg:h-screen lg:grid-cols-10 lg:content-center lg:p-0">
        <div className="hidden lg:col-span-1 lg:block"></div>
        <div className="lg:col-span-8">
          <div className="mb-5 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em] lg:mb-0">
            Portfolio
          </div>
        </div>
        <div className="hidden lg:col-span-1 lg:block"></div>
        <div className="hidden lg:col-span-1 lg:block"></div>
        <section className="lg:col-span-4 lg:content-center">
          <h5 className="text-md mb-2 font-light tracking-[.125em] uppercase">
            Company
          </h5>
          <div className="mb-8 flex flex-col font-normal">
            <Link
              className="pb-1 text-xl font-semibold hover:underline hover:underline-offset-4"
              to="time"
            >
              TIME dotCom Berhad
            </Link>
            <Link
              className="pb-1 text-xl font-semibold hover:underline hover:underline-offset-4"
              to="celcomdigi"
            >
              CelcomDigi Berhad
            </Link>
            <Link
              className="pb-1 text-xl font-semibold hover:underline hover:underline-offset-4"
              to="celcom"
            >
              Celcom Axiata Berhad
            </Link>
            <Link
              className="pb-1 text-xl font-semibold hover:underline hover:underline-offset-4"
              to="dxc"
            >
              DXC Technology
            </Link>
            <Link
              className="pb-1 text-xl font-semibold hover:underline hover:underline-offset-4"
              to="hpe"
            >
              Hewlett Packard Enterprise
            </Link>
            <Link
              className="pb-1 text-xl font-semibold hover:underline hover:underline-offset-4"
              to="hp"
            >
              Hewlett-Packard Inc.
            </Link>
          </div>
        </section>
        <section className="lg:col-span-4">
          <h5 className="text-md mb-2 font-light tracking-[.125em] uppercase">
            Freelance
          </h5>
          <div className="flex flex-col font-normal">
            <Link
              className="pb-1 text-xl font-semibold hover:underline hover:underline-offset-4"
              to="web"
            >
              <span className="font-light">On </span>Web
            </Link>
            <Link
              className="pb-1 text-xl font-semibold hover:underline hover:underline-offset-4"
              to="app"
            >
              <span className="font-light">On </span>App
            </Link>
          </div>
        </section>
        <div className="hidden lg:col-span-1 lg:block"></div>
      </main>
    </Layout>
  )
}

export default PortfolioPage

export const Head = () => <title>Portfolio : Sabri Maslan</title>
