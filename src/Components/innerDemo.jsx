import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <section className=" pb-10 sm:pb-16  bg-white ">
        <div className="px-4 mx-auto max-w-[1200px] sm:px-6 lg:px-8 ">
          <h1 className="text-2xl text-center font-extrabold text-gray-700   pb-5 lg:text-[40px]">
            Inner Demo
          </h1>
          <h1 className="text-2xl text-center font-normal text-gray-700 mx-auto lg:w-[50%] pb-5 lg:text-[20px]">
            Choose one of styles or cutomize easily your site following your
            ideas. More demos are coming soon.
          </h1>
          {/* <div className="grid max-w-full md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-6 mx-auto mt-8   lg:max-w-full lg:gap-6">
            <div className="flex flex-col overflow-hidden  shadow-md rounded-md">
              <div className="flex flex-col justify-center flex-1 px-6 py-8">
                <img src="/home1.png" alt="" className="" />

                <h1 className="text-2xl text-center mt-8 font-semibold text-gray-700   pb-5 lg:text-[25px]">
                  Home1
                </h1>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden  shadow-md rounded-md">
              <div className="flex flex-col justify-center flex-1 px-6 py-8">
                <img src="/home1.png" alt="" className="" />

                <h1 className="text-2xl text-center mt-8 font-semibold text-gray-700   pb-5 lg:text-[25px]">
                  Home1
                </h1>
              </div>
            </div>
          </div> */}
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              425: {
                width: 425,
                slidesPerView: 1,
              },
              320: {
                width: 320,
                slidesPerView: 1,
              },
            }}
            modules={[Pagination]}
            className="mySwiper mt-3 lg:h-[530px]   border border-slate-50 shadow-2xl "
          >
            <SwiperSlide className="">
              <div className="flex flex-col justify-center flex-1 px-6 py-8 border border-slate-50 shadow-md  ">
                <img src="/home1.png" alt="" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center flex-1 px-6 py-8 border border-slate-50 shadow-md ">
                <img src="/home1.png" alt="" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center flex-1 px-6 py-8 border border-slate-50 shadow-md">
                <img src="/home1.png" alt="" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center flex-1 px-6 py-8 border border-slate-50 shadow-md">
                <img src="/home1.png" alt="" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center flex-1 px-6 py-8 border border-slate-50 shadow-md">
                <img src="/home1.png" alt="" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center flex-1 px-6 py-8 border border-slate-50 shadow-md">
                <img src="/home1.png" alt="" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center flex-1 px-6 py-8 border border-slate-50 shadow-md">
                <img src="/home1.png" alt="" className="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
