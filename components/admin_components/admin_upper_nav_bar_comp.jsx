"use client";

import Image from "next/image";
import { useState } from "react";

export default function AdminUpperNavBarComp({ data }) {
  const [isMobile, setIsMobile] = useState(false);

  const inActiveStyle =
    "text-gray-500 hover:text-gray-800  block px-3 py-2 rounded-md text-base font-medium";
  const activeStyle =
    "text-MainBlueColor font-bold  block px-3 py-2 rounded-md text-base font-medium underline underline-offset-2";

  const navMenuTabs = [
    "Home",
    "Banners",
    "Sections",
    "Categories",
    "Products",
    "Users",
    "Transactions",
    "Settings",
  ];

  return (
    <>
      <div>
        <nav className="bg-white shadow ">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <Image
                    width={64}
                    height={64}
                    src="/logo/logo.png"
                    alt="xo-store"
                  />
                </a>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-0">
                    {navMenuTabs.map((menuTab, index) => (
                      <button
                        key={index}
                        onClick={(event) => {
                          event.preventDefault();
                          data["setIndex"](index);
                        }}
                        className={
                          data["index"] == index ? activeStyle : inActiveStyle
                        }
                        // href="/admin"
                      >
                        {menuTab}
                      </button>
                    ))}
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
            <div className="md:hidden  ">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navMenuTabs.map((menuTab, index) => (
                  <button
                    key={index}
                    onClick={(event) => {
                      event.preventDefault();
                      data["setIndex"](index);
                      setIsMobile(false)
                    }}
                    className={
                      data["index"] == index ? activeStyle : inActiveStyle
                    }
                    // href="/admin"
                  >
                    {menuTab}
                  </button>
                ))}
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
