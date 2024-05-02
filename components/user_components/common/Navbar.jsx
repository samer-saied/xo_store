"use client";
import { TbLogin, TbWorld } from "react-icons/tb";
import { CiLogout, CiShoppingBasket, CiUser } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../db/firebase_init";
import { LuUserPlus2 } from "react-icons/lu";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import MobileMainNavBar from "@/components/user_components/common/mobile_main_navBar";
import { GetAllSections } from "@/repository/sections_repository";

const Navbar = () => {
  const [currentUser, setcurrentUser] = useState(null);
  const [sections, setsections] = useState([]);
  const fetchDataRef = useRef(false);

  useEffect(() => {
    if (!fetchDataRef.current) {
      GetAllSections().then((sections) => {
        setsections(sections);
        // setLoading(false);
      });
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.email ?? "";
          setcurrentUser(uid);
        } else {
          setcurrentUser("");
        }
      });

      fetchDataRef.current = true;
    }
  }, []);



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
          {sections && (
            <ul className="hidden lg:flex lg:flex-row lg:justify-between w-full">
              {/*---------------------    Sections  ------------------*/}

              <div className="flex flex-row justify-center items-center ">
                {sections.map((section, index) => (
                  <li
                    key={section.id}
                    className="nav-links px-1 lg:px-4 cursor-pointer capitalize lg:text-lg md:text-md text-xs font-medium text-gray-500 hover:scale-105 hover:text-MainBlueColor border-b-2 border-white hover:border-MainBlueColor duration-200 link-underline"
                  >
                    <Link
                      href={{
                        pathname: "/sections/" + section.id,
                        query: { name: section.title },
                      }}
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </div>

              {/*---------------------    Login logout user  ------------------*/}

              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                  <div className="text-center text-zinc-400 text-sm font-normal ">
                    Arabic
                  </div>
                  <TbWorld size={25} className="text-zinc-400 mx-1" />
                </div>

                {currentUser && (
                  <Link
                    href={"/profile"}
                    className={` p-1 mx-1 flex flex-row justify-center items-center cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
                  >
                    {currentUser && currentUser.split("@")[0].toUpperCase()}
                    <CiUser size={25} className=" mx-1" />
                  </Link>
                )}
                {!currentUser && (
                  <Link
                    className={` p-1 mx-1 flex flex-row justify-center items-center cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
                    href={"/login"}
                  >
                    <div className="text-center text-sm font-normal ">
                      تسجيل دخول
                    </div>
                    <TbLogin size={25} className=" mx-1" />
                  </Link>
                )}
                {!currentUser && (
                  <Link
                    className={` p-1 mx-1 flex flex-row justify-center items-center cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
                    href={"/register"}
                  >
                    <div className="text-center text-sm font-normal ">
                      مستخدم جديد
                    </div>
                    <LuUserPlus2 size={25} className=" mx-1" />
                  </Link>
                )}

                {currentUser && (
                  <li
                    className={`cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:bg-MainYellowColor  rounded-full`}
                  >
                    <Link href={"/cart"}>
                      <div
                        className={` p-2 mx-1 flex flex-row justify-center items-center cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
                      >
                        <div className="text-center text-sm font-normal ">
                          سله المشتريات
                        </div>
                        <CiShoppingBasket size={25} className=" mx-1" />
                      </div>
                    </Link>
                  </li>
                )}

                {currentUser && (
                  <button
                    className={` p-1 mx-1 flex flex-row justify-center items-center cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
                    onClick={(event) => {
                      event.preventDefault();
                      signOut(auth);
                    }}
                  >
                    <div className="text-center text-sm font-normal ">
                      تسجيل خروج
                    </div>
                    <CiLogout size={25} className=" mx-1" />
                  </button>
                )}
              </div>
            </ul>
          )}

          {/*---------------------    BUTTON  ------------------*/}

          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline">
              <RiMenu2Line size={30} />
            </Button>
          </SheetTrigger>
        </div>
      </nav>

      {/*********** MOBILE NAV BAR *******************/}
      <MobileMainNavBar sections={sections} isLogin={currentUser} />
    </>
  );
};

export default Navbar;
