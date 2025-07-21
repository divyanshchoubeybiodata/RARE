import React from 'react'

function Section({type, title, description, image}) {
  return (
    <>
    {type === "right" && <section className='flex flex-col px-5 lg:flex-row h-fit items-center justify-center w-full my-48 lg:my-32'>
    
    <div className="md:w-[50%]  flex flex-col items-start max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
       
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        {title}
         
        </h2>
        <p className="pr-5 mb-5 text-base text-gray-700 md:text-xl">
        {description}
        </p>
        <div className="flex w-full justify-center">
            <a
              href="#ContactUs"
              className="mx-20 text-center inline-flex p-2 text-white capitalize transition-colors duration-300 transform  rounded-full rtl:-scale-x-100  bg-[#001f4b] w-fit"
            >
              <span className="mx-2">Know more </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
      </div>
    </div>
    <div className='flex md:w-[50%] h-[100%] justify-center items-end'>
    <img
        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src={image}
        alt="service-image"
      />
    </div>
    </section>}

  {type === "left" && <section className='flex flex-col-reverse items-center justify-center h-[80vh]  px-5 lg:flex-row w-full my-48 lg:my-32'>
    <div className='flex h-[100%] md:w-[50%] justify-center items-center'>
    <img
        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src={image}
        alt="service-image"
      />
    </div>
    <div className="  flex flex-col items-start md:w-[50%] max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
       
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        {title}
         
        </h2>
        <p className="md:pr-5 mb-5 text-base text-gray-700 md:text-xl">
        {description}
        </p>
        <div className="flex w-full justify-center">
            <a
              href="#ContactUs"
              className="mx-20 text-center inline-flex p-2 text-white capitalize transition-colors duration-300 transform  rounded-full rtl:-scale-x-100  bg-[#001f4b] w-fit"
            >
              <span className="mx-2">Know more </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
      </div>
    </div>
    </section>}
    </>
  )
}

export default Section