import * as React from 'react'

import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <main className="flex w-full flex-row items-center justify-center p-6">
        <h1 className="font-[Sometype_Mono] text-8xl/12 font-bold -tracking-[.175em]">
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
