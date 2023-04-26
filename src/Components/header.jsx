import { BiMinus, BiCaretDown, BiEnvelope, BiCaretUp } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "FB", href: "#", current: true },
  { name: "TW", href: "#", current: true },
  { name: "IN", href: "#", current: true },
  { name: "PR", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);
  const [openn, setOpenn] = useState(false);
  const handleOpenDialog = () => {
    setOpenn(true);
  };
    const handleCloseDialog = () => {
      setOpenn(false);
    };
  const handleMobileDialog = () => {
    setOpen(true);
  };
  return (
    <Disclosure
      as="nav"
      className="bg-[#212529] md:overflow-x-hidden lg:overflow-x-visible "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8  ">
            <div className="relative flex justify-between items-center py-8">
              <div className=" flex   items-center    ">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className=" inline-flex  px-0.5 bg-gray-600 items-center rounded-full  text-white mr-5 "
                  onClick={handleOpenDialog}
                >
                  <Bars3Icon
                    className="block h-8 w-6"
                    aria-hidden="true"
                    onClick={handleCloseDialog}
                  />
                  <span className="sr-only">Open main menu</span>
                </Disclosure.Button>
                <img
                  className="block h-12 w-auto ml-2"
                  src="/naftrend.png"
                  alt="Your Company"
                />
              </div>

              <div className=" flex   items-center     ">
                <div className="hidden sm:ml-6 x:block lg:block     ">
                  <div className="flex mr-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? " text-white" : "text-white ",
                          "rounded-md px-3 py-2 text-[1.1rem] font-semibold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <svg
                  className="w-4 h-4 mr-5 xxl:block lg:hidden hidden"
                  style={{ fill: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
                <button className="bg-white flex border-white border rounded-full py-3  text-black px-7 text-[1rem] ">
                  <img src="/envato1.png" alt="" className="mr-1" /> BUY NOW
                </button>
              </div>
            </div>
          </div>

          <Transition.Root show={openn} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={handleCloseDialog}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="-translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-[470px] overflow-y-scroll">
                        <div className="flex h-fit flex-col  bg-[#212529] shadow-xl">
                          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between">
                              <img
                                className="block h-12 w-auto "
                                src="/naftrend.png"
                                alt="Your Company"
                              />
                              <Disclosure.Button
                                className="h-8 inline-flex  px-2 bg-gray-800 items-center rounded-md  text-white hover:bg-gray-700   "
                                onClick={handleCloseDialog}
                              >
                                <XMarkIcon
                                  className="block h-6 w-6 text-white "
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                            </div>
                            <p className="mt-10 text-[1rem] text-[#e5e5e5] font-normal">
                              We’re west coast change-makers, in a complex
                              world. The brands we support are positioned to be
                              purposeful and powerful while also fluid.
                            </p>
                            <button className="bg-white flex border-white border rounded-full py-3 mt-2 text-black px-10 text-[1.1rem] ">
                              <img src="/envato1.png" alt="" className="mr-1" />
                              BUY NOW
                            </button>
                            <div className="mt-20">
                              <p className="font-normal text-[30px] text-white">
                                Our More Themes
                              </p>
                            </div>
                            <div className="grid max-w-full md:grid-cols-2 grid-cols-1 mt-4 gap-6 mx-auto   lg:grid-cols-3 lg:max-w-full lg:gap-6">
                              <div className="flex flex-col justify-center  ">
                                <img src="/auction.png" alt="" className="" />
                              </div>
                              <div className="flex flex-col justify-center  ">
                                <img src="/auction.png" alt="" className="" />
                              </div>
                              <div className="flex flex-col justify-center  ">
                                <img src="/auction.png" alt="" className="" />
                              </div>
                              <div className="flex flex-col justify-center  ">
                                <img src="/auction.png" alt="" className="" />
                              </div>
                              <div className="flex flex-col justify-center   ">
                                <img src="/auction.png" alt="" className="" />
                              </div>
                              <div className="flex flex-col justify-center   ">
                                <img src="/auction.png" alt="" className="" />
                              </div>
                            </div>
                            <div className="mt-20">
                              <p className="font-normal text-[30px] text-white">
                                Join Our Community
                              </p>
                              <ul className="flex items-center space-x-3 mt-6">
                                <li>
                                  <a
                                    href="#"
                                    title=""
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#212529] border-white border w-9 h-9 "
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                                    </svg>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    title=""
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#212529] border-white border w-9 h-9 "
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    title=""
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#212529] border-white border w-9 h-9 "
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                      <circle
                                        cx="16.806"
                                        cy="7.207"
                                        r="1.078"
                                      ></circle>
                                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                                    </svg>
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    title=""
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#212529] border-white border w-9 h-9 "
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                      ></path>
                                    </svg>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title=""
                                    className="flex items-center justify-center text-white transition-all duration-200 bg-[#212529] border-white border w-9 h-9 "
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                    >
                                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      )}
    </Disclosure>
  );
}
