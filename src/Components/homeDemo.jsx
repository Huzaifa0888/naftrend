import React from 'react'

function HomeDemo() {
  return (
    <>
      <section className="py-10 sm:py-16 lg:pt-20  bg-white ">
        <div className="px-4 mx-auto max-w-[1200px] sm:px-6 lg:px-8 ">
          <h1 className="text-2xl text-center font-extrabold text-gray-700   pb-5 lg:text-[40px]">
            Home Demo
          </h1>
          <h1 className="text-2xl text-center font-normal text-gray-700 mx-auto lg:w-[50%] pb-5 lg:text-[20px]">
            Choose one of styles or cutomize easily your site following your
            ideas. More demos are coming soon.
          </h1>
          <div className="grid max-w-full md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-6 mx-auto mt-8   lg:max-w-full lg:gap-6">
            <div className="flex flex-col overflow-hidden  shadow-md rounded-md">
              <div className="flex flex-col justify-center flex-1 px-6 py-8">
                <img src="/home1.png" alt="" className="" />

                <h1 className="text-2xl text-center mt-8 font-semibold text-gray-700   pb-5 lg:text-[25px]">
                  Home1
                </h1>
              </div>
            </div>{" "}
            <div className="flex flex-col overflow-hidden  shadow-md rounded-md">
              <div className="flex flex-col justify-center flex-1 px-6 py-8">
                <img src="/home1.png" alt="" className="" />

                <h1 className="text-2xl text-center mt-8 font-semibold text-gray-700   pb-5 lg:text-[25px]">
                  Home1
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center flex-1 px-6 mt-20 py-8 lg:w-[40%] mx-auto">
          <img src="/coming.png" alt="" className="" />
          <h1 className="text-2xl text-center mt-8 font-semibold text-gray-700   pb-5 lg:text-[25px]">
            Coming Soon
          </h1>
        </div>
      </section>
    </>
  );
}

export default HomeDemo