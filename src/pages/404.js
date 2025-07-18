import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="mx-auto max-w-7xl flex flex-row relative min-h-screen">
      <div className="basis-1/4">
        <div className="p-4">
          <h1 className="text-2xl/8 font-semibold my-6">Page not found</h1>
        </div>
      </div>
      <div className="basis-3/4 p-6">
        <div className="p-4">
          <h4 className="text-xs/6 font-normal uppercase tracking-[.5em]">Error</h4>
          <div className="font-normal">
            <p className="text-lg font-semibold">Sorry 😔, I couldn’t find what you were looking for.</p>
            <br />
            {process.env.NODE_ENV === "development" ? (
              <>
                <br />
                Try creating a page in <code className="font-mono">src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
            <Link className="underline" to="/">Return home</Link>?
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
