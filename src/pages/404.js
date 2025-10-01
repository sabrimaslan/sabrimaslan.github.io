import * as React from 'react'

import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="flex h-screen w-full flex-row items-center justify-center lg:col-span-10 lg:row-span-12">
        <h1 className="text-center font-[Sometype_Mono] text-8xl font-bold -tracking-[.175em]">
          Sorry.
        </h1>
        <div className="absolute mt-4 rotate-8 bg-[#FF6A3D] px-2 text-sm">
          Page Not Found
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
