"use client";
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserLandscapeWidget from "@/components/user_components/common/navbar/user_navbar";
import SectionsLandscapeWidge from "../navbar/sections_navbar";
import MobileMainNavBar from "@/components/user_components/common/navbar/mobile_main_navBar";
import { useState } from "react";

export default function Navbar() {
  return (
    <>
      {/*********** LANDSCAPE NAV BAR *******************/}
      <nav className=" top-0 bottom-0 left-0">
        <div className="flex justify-between items-center border-gray-100 border-b-2 bg-white nav px-4 py-2 md:px-10 lg:px-20">
          <h1 className="text-5xl font-signature ml-2">
            <a href="/">
              <Image
                className=" hover:animate-pulse hover:scale-125 hover:ease-in-out"
                width={60}
                height={60}
                src="/logo/logo.svg"
                alt="Logo"
              />
            </a>
          </h1>
          {/*---------------------    LARGE MENU BAR  ------------------*/}

          <ul className="hidden lg:flex lg:flex-row lg:justify-between w-full">
            {/*---------------------    Sections  ------------------*/}
            <SectionsLandscapeWidge />
            {/*---------------------    Login logout user  ------------------*/}
            <UserLandscapeWidget />
          </ul>

          {/*---------------------    BUTTON  ------------------*/}

          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline">
              <RiMenu2Line size={30} />
            </Button>
          </SheetTrigger>
        </div>
      </nav>

      {/*********** MOBILE NAV BAR *******************/}
      <MobileMainNavBar />
    </>
  );
}
