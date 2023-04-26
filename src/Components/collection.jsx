import React from 'react'

function Collection() {
  return (
    <>
      <section className="py-10 sm:py-16 lg:pt-20  bg-[#09080d] ">
        <div className="px-4 mx-auto max-w-[1150px] sm:px-6 lg:px-8 ">
          <div className=" flex justify-between">
            <h1 className="text-2xl text-center font-normal text-white   pb-5 lg:text-[30px]">
              Popular Collections
            </h1>
            <div className="flex">
              <h1 className="text-2xl mr-2 font-medium text-center text-white   lg:text-[18px]">
                Explore More
              </h1>
              <svg
                className="w-4 mb-4 "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <g id="Complete">
                    <g id="arrow-right">
                      <g>
                        <polyline
                          data-name="Right"
                          fill="none"
                          id="Right-2"
                          points="16.4 7 21.5 12 16.4 17"
                          stroke="#FFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polyline>
                        <line
                          fill="none"
                          stroke="#FFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="2.5"
                          x2="19.2"
                          y1="12"
                          y2="12"
                        ></line>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="grid max-w-full md:grid-cols-2 grid-cols-1  gap-6 mx-auto mt-8  lg:grid-cols-4 lg:max-w-full lg:gap-6">
            <div className="flex h-fit flex-col overflow-hidden bg-[#16151a] shadow-md rounded-md">
              <div className="flex flex-col justify-center  px-6 py-8">
                <img src="/nft4.jpg" alt="" className="" />
                <div className="    pb-0 mb-0  relative lg:left-[38%] left-[41%] bottom-8">
                  <img
                    class="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                    alt=""
                  />
                </div>

                <h1 className="text-2xl text-center font-bold  text-white   mt-0 pt-0 lg:text-[18px]">
                  Digital Arts
                </h1>
                <h1 className="text-2xl text-center font-bold  text-gray-400  mt-1 pt-0 lg:text-[13px]">
                  ERC-729
                </h1>
              </div>
            </div>
            <div className="flex h-fit flex-col overflow-hidden bg-[#16151a] shadow-md rounded-md">
              <div className="flex flex-col justify-center  px-6 py-8">
                <img src="/nft3.jpg" alt="" className="" />
                <div className="    pb-0 mb-0  relative lg:left-[38%] left-[41%] bottom-8">
                  <img
                    class="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                    alt=""
                  />
                </div>

                <h1 className="text-2xl text-center font-bold  text-white   mt-0 pt-0 lg:text-[18px]">
                  Digital Arts
                </h1>
                <h1 className="text-2xl text-center font-bold  text-gray-400  mt-1 pt-0 lg:text-[13px]">
                  ERC-729
                </h1>
              </div>
            </div>{" "}
            <div className="flex h-fit flex-col overflow-hidden bg-[#16151a] shadow-md rounded-md">
              <div className="flex flex-col justify-center  px-6 py-8">
                <img src="/nft4.jpg" alt="" className="" />
                <div className="    pb-0 mb-0  relative lg:left-[38%] left-[41%] bottom-8">
                  <img
                    class="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                    alt=""
                  />
                </div>

                <h1 className="text-2xl text-center font-bold  text-white   mt-0 pt-0 lg:text-[18px]">
                  Digital Arts
                </h1>
                <h1 className="text-2xl text-center font-bold  text-gray-400  mt-1 pt-0 lg:text-[13px]">
                  ERC-729
                </h1>
              </div>
            </div>{" "}
            <div className="flex h-fit flex-col overflow-hidden bg-[#16151a] shadow-md rounded-md">
              <div className="flex flex-col justify-center  px-6 py-8">
                <img src="/nft3.jpg" alt="" className="" />
                <div className="    pb-0 mb-0  relative lg:left-[38%] left-[41%] bottom-8">
                  <img
                    class="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                    alt=""
                  />
                </div>

                <h1 className="text-2xl text-center font-bold  text-white   mt-0 pt-0 lg:text-[18px]">
                  Digital Arts
                </h1>
                <h1 className="text-2xl text-center font-bold  text-gray-400  mt-1 pt-0 lg:text-[13px]">
                  ERC-729
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Collection