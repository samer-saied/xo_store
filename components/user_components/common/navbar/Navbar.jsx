"use client";
import { RiMenu2Line } from "react-icons/ri";
import Image from "next/image";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserLandscapeWidget from "@/components/user_components/common/navbar/user_navbar";
import SectionsLandscapeWidge from "../navbar/sections_navbar";
import MobileMainNavBar from "@/components/user_components/common/navbar/mobile_main_navBar";
import { AuthContextProvider } from "@/hooks/AuthContext";
import useGetSections from "@/hooks/all_sections_hook";

export default function Navbar() {
  const sections = useGetSections();

  return (
    <>
      <AuthContextProvider>
        {/*********** LANDSCAPE NAV BAR *******************/}
        <nav className=" top-0 bottom-0 left-0 ">
          <div className="flex justify-between items-center border-gray-100 border-b-2 bg-white nav px-4 py-2 md:px-10 lg:px-20">
            <h1 className="text-5xl font-signature ml-2">
              <a href="/">
                <Image
                  priority
                  className="w-8/12 h-auto hover:animate-pulse hover:ease-in-out"
                  width="50"
                  height="50"
                  sizes="50vw"
                  src="/logo/logo.svg"
                  alt="Logo"
                />
              </a>
            </h1>
            {/*---------------------    LARGE MENU BAR  ------------------*/}

            <ul className="hidden lg:flex lg:flex-row lg:justify-between overflow-auto">
              {/*---------------------    Sections  ------------------*/}
              <SectionsLandscapeWidge sections={sections} />
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
        <MobileMainNavBar sections={sections} />
      </AuthContextProvider>
    </>
  );
}
