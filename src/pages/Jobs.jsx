"use client"

import { Link } from "react-router-dom"
import { useAuth } from "../contexts/authContext"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import Navbar from "../components/Navbar/Navbar"
import SignupBanner from "../components/SignupBanner/SignupBanner"
import JobCard from "../components/JobCard/JobCard"
import Footer from "../components/Footer/Footer"

function Jobs() {
  const { jobsList } = useAuth()
  const activeJobs = jobsList.filter(job => job.status === "active")

  return (
    <>
      <Navbar />
      <main>
        <div className="relative lg:h-[280px] md:h-[240px] sm:h-[220px] h-[180px]">
          <div className="bg-[url(/images/jobs-cover.jpg)] bg-cover bg-center h-full"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute top-1/2 left-[10%] -translate-y-1/2">
            <h1 className="text-4xl text-white">Jobs</h1>
            <nav aria-label="Breadcrumb">
              <ol className="flex justify-start items-center gap-1 mt-1 text-sm text-gray-300">
                <li>
                  <Link to={"/"} className="block transition hover:text-lightOrange">
                    <span className="sr-only"> Home </span>
                    <Home className="h-4 w-4" />
                  </Link>
                </li>
                <li className="rtl:rotate-180">
                  <ChevronRight className="h-4 w-4" />
                </li>
                <li>
                  <p className="block transition hover:text-lightOrange"> Jobs </p>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="customContainer my-10">
          <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-center md:items-center items-start mb-4">
            <h2 className="text-xl font-semibold">Jobs near you</h2>
            <p className="text-xs text-gray-500">
              Showing {activeJobs.length} {activeJobs.length === 1 ? "result" : "results"}
            </p>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 place-items-center gap-4 mb-8">
            {activeJobs.length > 0 ? (
              activeJobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No active job listings available at the moment</p>
              </div>
            )}
          </div>
          {activeJobs.length > 0 && (
            <div className="flex justify-center">
              <div className="inline-flex justify-center gap-1">
                <button className="inline-flex size-8 items-center justify-center rounded border bg-white hover:bg-lightOrange hover:text-white text-gray-900 rtl:rotate-180 duration-200">
                  <span className="sr-only">Prev Page</span>
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div>
                  <label htmlFor="PaginationPage" className="sr-only">
                    Page
                  </label>

                  <input
                    type="number"
                    className="h-8 w-12 rounded border bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    min="1"
                    value="1"
                    id="PaginationPage"
                  />
                </div>

                <button className="inline-flex size-8 items-center justify-center rounded border bg-white hover:bg-lightOrange hover:text-white text-gray-900 rtl:rotate-180 duration-200">
                  <span className="sr-only">Next Page</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
        <SignupBanner />
      </main>
      <Footer />
    </>
  )
}

export default Jobs