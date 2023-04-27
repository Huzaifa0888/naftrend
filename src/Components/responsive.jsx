import React, { useState } from "react";

function ImageSwitcher() {
    const [currentImage, setCurrentImage] = useState(1);
    
    const handleBtn1Click = () => {
        setCurrentImage(1);
    };
    
    const handleBtn2Click = () => {
        setCurrentImage(2);
    };
    
    const handleBtn3Click = () => {
        setCurrentImage(3);
    };
    
    
 
 
    return (
      <>
        <section className="h-full  ">
          <section className="py-10 w-[1200px] mx-auto max-w-7xl sm:py-16 lg:pt-[110px] lg:pb-[110px] ">
            <div className="px-4   sm:px-6 lg:px-0">
              <div className="grid  grid-cols-1 md:grid-cols-2 gap-x-20">
                <div className="">
                  {currentImage === 1 && (
                    <img src="/mobile.png" alt="Image 1" />
                  )}
                  {currentImage === 2 && (
                    <img src="/tablate.png" alt="Image 2" />
                  )}
                  {currentImage === 3 && (
                    <img src="/dextop.png" alt="Image 3" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-normal   text-gray-600  lg:text-lg">
                    100% RESPONSIVE
                  </p>

                  <span className="text-2xl leading-tight font-extrabold text-gray-700    lg:text-[38px]">
                    Fully Responsive & Perfectly fit to all Screens.
                  </span>

                  <p className="text-sm font-normal pt-2  text-gray-600  lg:text-lg">
                    Responsive Web Design Or Responsive Design Is An Approach To
                    Web Design That Aims To Make Web Pages Render Well On A
                    Variety Of Devices And Window Or Screen Sizes From Minimum
                    To Maximum Display Size To Ensure Usability And Satisfaction
                  </p>

                  <div className="grid grid-cols-3 gap-x-7 w-[60%] mt-4">
                    <button
                      onClick={handleBtn1Click}
                      className="mt-3 border-2 rounded-md border-gray-400 p-4"
                    >
                      <img src="/tab1.svg" alt="" />
                    </button>
                    <button
                      onClick={handleBtn2Click}
                      className="mt-3  border-2 rounded-md border-gray-400 p-4"
                    >
                      {" "}
                      <img src="/tab2.svg" alt="" />
                    </button>
                    <button
                      onClick={handleBtn3Click}
                      className="mt-3  border-2 rounded-md border-gray-400 p-4"
                    >
                      <img src="/tab3.svg" alt="" />
                    </button>
                    <p className="text-sm text-center font-bold pt-5  text-gray-600  lg:text-lg">
                      Mobile
                    </p>
                    <p className="text-sm text-center font-bold pt-5  text-gray-600  lg:text-lg">
                      Tablet
                    </p>{" "}
                    <p className="text-sm text-center font-bold pt-5  text-gray-600  lg:text-lg">
                      Desktop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <div></div>
      </>
    );
}

export default ImageSwitcher;
