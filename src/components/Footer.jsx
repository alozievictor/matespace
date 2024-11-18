import React from "react";

const Footer = () => {
  return (
    <section class="pt-16 pb-7 bg-black">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-12 pb-12 border-b-2 border-gray-700 max-lg:gap-7">
          <div class="col-span-12 lg:col-span-7">
            <h2 class="font-manrope font-bold text-3xl leading-tight text-white mb-2 max-lg:text-center">
              Sign up to our webpage
            </h2>
            <p class="text-base text-gray-400 font-normal max-lg:text-center">
              Stay up to date with the latest update and announcement.
            </p>
          </div>
          <div class="col-span-12 lg:col-span-5 flex flex-col gap-4 items-center">
            <div class="flex items-center justify-between bg-gray-800 w-full max-w-md mx-auto lg:mr-0 rounded-xl p-2.5 min-[470px]:p-1.5 pl-5 min-[470px]:pl-7 border border-gray-700 transition-all duration-300 hover:border-gray-400 focus-within:border-gray-400">
              <input
                type="text"
                class="bg-transparent text-base font-normal text-white placeholder:text-gray-500 focus-within:outline-0"
                placeholder="Your email here..."
              />
              <button class="py-3 px-7 hidden min-[470px]:block rounded-md bg-[#36A398] text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0">
                Submit
              </button>
            </div>
            <button class="py-3 px-7 min-[470px]:hidden rounded-full bg-[#36A398] text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0">
              Submit
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-y-8 py-14 border-b-2 border-gray-700">
          <div class="">
            <h6 class="text-xl font-bold text-white mb-7">Mate Space</h6>
            <ul class="flex flex-col gap-6">
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>

          <div class="">
            <h6 class="text-xl font-bold text-white mb-7">Products</h6>
            <ul class="flex flex-col gap-6">
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Icons Assets
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Responsive Blocks
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Components Library
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Plugin Guide
                </a>
              </li>
            </ul>
          </div>

          <div class="">
            <h6 class="text-xl font-bold text-white mb-7">Resources</h6>
            <ul class="flex flex-col gap-6">
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Quick Start
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  User Guide
                </a>
              </li>
            </ul>
          </div>

          <div class="">
            <h6 class="text-xl font-bold text-white mb-7">Support</h6>
            <ul class="flex flex-col gap-6">
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  License
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  class="text-lg font-normal text-gray-400 transition-all duration-300 hover:text-[#36A398] focus-within:outline-0 focus-within:text-[#36A398]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pt-7 flex flex-col min-[500px]:flex-row items-center justify-between ">
          <div className="flex items-center text-black md:pt-3.5">
            <h2 className="ml-2 text-xl font-medium text-[#fff] ">
              Mate
              <span className="text-white pr-4 pb-2 pt-1 rounded-sm bg-[#36A398] ml-1">
                Space
              </span>
            </h2>
          </div>
          <p class="text-base font-normal text-gray-400">
            ©<a href="https://pagedone.io/">pagedone</a>2023, All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
