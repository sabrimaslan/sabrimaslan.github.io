import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const WorksPage = () => {
  return (
    <Layout>
      <main className="flex w-full flex-col items-start lg:basis-5/6 lg:flex-row">
        <section className="flex w-full flex-col p-6 lg:h-screen lg:basis-3/5 lg:justify-center lg:p-0">
          <div className="p-4 font-[Sometype_Mono] text-6xl/12 font-bold -tracking-[.175em]">
            Portfolio.
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="p-4 lg:basis-1/2">
              <h4 className="mb-4 text-lg/6 font-semibold tracking-[.25em] uppercase">
                Company
              </h4>
              <div className="flex flex-col font-normal">
                <Link
                  className="pb-1 text-2xl/8 font-semibold hover:underline hover:underline-offset-4"
                  to="time"
                >
                  TIME dotCom Berhad
                </Link>
                <Link
                  className="pb-1 text-2xl/8 font-semibold hover:underline hover:underline-offset-4"
                  to="celcomdigi"
                >
                  CelcomDigi Berhad
                </Link>
                <Link
                  className="pb-1 text-2xl/8 font-semibold hover:underline hover:underline-offset-4"
                  to="celcom"
                >
                  Celcom Axiata Berhad
                </Link>
                <Link
                  className="pb-1 text-2xl/8 font-semibold hover:underline hover:underline-offset-4"
                  to="dxc"
                >
                  DXC Technology
                </Link>
                <Link
                  className="pb-1 text-2xl/8 font-semibold hover:underline hover:underline-offset-4"
                  to="hpe"
                >
                  Hewlett Packard Enterprise
                </Link>
                <Link
                  className="pb-1 text-2xl/8 font-semibold hover:underline hover:underline-offset-4"
                  to="hp"
                >
                  Hewlett-Packard Inc.
                </Link>
              </div>
            </div>
            <div className="p-4 lg:basis-1/2">
              <h4 className="mb-4 text-lg/6 font-semibold tracking-[.25em] uppercase">
                Freelance
              </h4>
              <div className="flex flex-col font-normal">
                <Link
                  className="pb-1 text-2xl/8 font-semibold hover:underline hover:underline-offset-4"
                  to="web"
                >
                  <span className="font-light">On </span>Web
                </Link>
                <Link
                  className="pb-1 text-2xl/8 font-semibold hover:underline hover:underline-offset-4"
                  to="app"
                >
                  <span className="font-light">On </span>App
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default WorksPage

export const Head = () => <title>Works : Sabri Maslan</title>
