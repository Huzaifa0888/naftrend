import React from 'react'

function HeroSection() {
  return (
    <>
      <section className="h-full  bg">
        <section className="py-10   sm:py-16 lg:pt-[110px] lg:pb-[110px] ">
          <div className="px-4   sm:px-6 lg:px-0">
            <div className="lg:flex block md:flex  items-center ">
              <img
                src="/bannerv.png"
                alt=""
                className="lg:block hidden vert-move"
              />
              <div className=" lg:ml-10 ">
                <h1 className="text-4xl font-bold text-white leading-none lg:text-[65px]">
                  The Most Creatively Designed Template In Current Days
                </h1>
                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <button className="bg-white border-white border rounded-full py-4 font-bold text-red-500 px-8 text-[1.1rem] hover:text-white hover:bg-red-500">
                    VIEW DEMO
                  </button>
                </div>
              </div>

              <div>
                <img className="w-full bg-cover lg:mt-0 mt-8" src="/banner-img.png" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default HeroSection
