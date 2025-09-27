import * as React from 'react'
import { Link } from 'gatsby'
import DownRightIcon from '../../components/downright'
import Layout from '../../components/layout'

const WorksPage = () => {
  return (
    <Layout>
      <main className="h-screen content-center gap-6 p-6 lg:col-span-10 lg:grid lg:grid-cols-10 lg:content-center lg:p-0">
        <div className="hidden lg:col-span-2 lg:block"></div>
        <div className="lg:col-span-8">
          <div className="mb-5 font-[Sometype_Mono] text-6xl font-bold -tracking-[.175em] lg:mb-0">
            Whoops
          </div>
        </div>
        <div className="hidden lg:col-span-2 lg:block"></div>
        <section className="lg:col-span-4 lg:content-start">
          <p className="mb-4 text-xl font-bold">
            Still working on finalizing this page.
          </p>
          <p className="mb-4">
            Meanwhile, do explore what I have created thus far in the links
            below. These projects show my hands-on engineering to build
            impactful solutions.
          </p>
          <div className="flex justify-end pt-8">
            <Link
              className="text-md align-text-bottom font-semibold no-underline underline-offset-4 hover:underline"
              to="/portfolio"
            >
              View my portfolio{' '}
            </Link>
            <DownRightIcon />
          </div>
        </section>
        <div className="hidden lg:col-span-2 lg:block"></div>
      </main>
    </Layout>
  )
}

export default WorksPage

export const Head = () => <title>Works : Sabri Maslan</title>
