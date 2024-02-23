"use client";

import Image from "next/image";
import { useState } from "react";

export default function AdminUpperNavBarComp({ data }) {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>

      <div>
        <nav className="bg-white shadow ">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img
                    className="w-8 h-8"
                    src="/logo/logo.png"
                    alt="Workflow"
                  />
                </a>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <a
                      className=" text-MainBlueColor  hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                      href="/admin"
                    >
                      Home
                    </a>
                    <a
                      className="text-MainBlueColor-800  hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                      href="/admin/banners"
                    >
                      Banner
                    </a>
                    <a
                      className="text-MainBlueColor  hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                      href="/admin/categories"
                    >
                      Categories
                    </a>
                    <a
                      className="text-MainBlueColor  hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                      href="/admin/products"
                    >
                      Products
                    </a>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="flex items-center ml-4 md:ml-6"></div>
              </div>
              <div className="flex -mr-2 md:hidden">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setIsMobile(!isMobile);
                  }}
                  className="text-gray-800 hover:text-MainBlueColor inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isMobile ? (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  className="text-MainBlueColor hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium"
                  href="/admin"
                >
                  Home
                </a>
                <a
                  className="text-gray-800  block px-3 py-2 rounded-md text-base font-medium"
                  href="/admin/banners"
                >
                  Banners
                </a>
                <a
                  className="text-MainBlueColor hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                  href="/admin/categories"
                >
                  Categories
                </a>
                <a
                  className="text-MainBlueColor hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                  href="/admin/products"
                >
                  Products
                </a>
              </div>
            </div>
          ) : (
            <></>
          )}
        </nav>
      </div>
    </>
  );
}
