import React from 'react'

function HeroSection() {
  return (
    <>
      <section className="h-full  bg-[#212529]">
        <section className="py-10  sm:py-16 lg:pt-[110px] lg:pb-[110px] ">
          <div className="px-4 mx-auto  sm:px-6 lg:px-0">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="max-w-[630px] ml-auto ">
                  <h1 className="text-4xl font-bold text-white leading-none lg:text-[65px]">
                    The Most Creatively Designed Template In Current Days
                  </h1>
                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <button className="bg-white border-white border rounded-full py-4 font-bold text-red-500 px-8 text-[1.1rem]">
                    VIEW DEMO
                  </button>
                </div>
              </div>

              <div>
                <img className="w-full bg-cover" src="/banner-img.png" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default HeroSection
