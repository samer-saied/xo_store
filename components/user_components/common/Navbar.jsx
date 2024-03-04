import { TbLogin, TbWorld } from "react-icons/tb";
import {
  CiBookmark,
  CiLogin,
  CiLogout,
  CiShoppingBasket,
  CiUser,
} from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GetAllSections } from "@/repository/sections_repository";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../db/firebase_init";
import { FaUserPlus } from "react-icons/fa";
import { LuUserPlus2 } from "react-icons/lu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sections, setsections] = useState([]);
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.email ?? "";
        setcurrentUser(uid);
      } else {
        setcurrentUser("");
        console.log("user is logged out");
      }
    });
  }, [currentUser]);

  ////
  /////////
  ////////////    REMOVE CODE AND PASS PARAMAS FROM PREVIOUS PAGE
  //////////////////
  ////////////////////////

  useEffect(() => {
    GetAllSections().then((sections) => {
      setsections(sections);
      setLoading(false);
    });
  }, []);

  return (
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

          <div className="flex flex-row justify-center items-center ">
            {sections.map((section, index) => (
              <li
                key={section.id}
                className="nav-links px-1 lg:px-4 cursor-pointer capitalize lg:text-lg md:text-lg text-xs font-medium text-gray-500 hover:scale-105 hover:text-MainBlueColor border-b-2 border-white hover:border-MainBlueColor duration-200 link-underline"
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
                      سله التسوق
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

        {/*---------------------    BUTTON  ------------------*/}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-50 text-gray-500 lg:hidden"
        >
          {nav ? <IoClose size={30} /> : <RiMenu2Line size={30} />}
        </div>

        {/*---------------------    MOBILE MENU  ------------------*/}
        {
          <ul
            className={
              nav
                ? ` transition-all ease-in-out duration-500 delay-150 lg:hidden flex flex-col justify-start items-start mt-14 absolute top-0 left-0 z-40 w-8/12 shadow-md shadow-slate-200 bg-gradient-to-b from-MainYellowColor to-white text-MainBlueColor rounded-lg opacity-95`
                : ` transition-all ease-in-out duration-300 delay-0 opacity-0 w-0 h-full absolute top-0 left-0`
            }
          >
            {nav && (
              <div className="w-full flex flex-row justify-center items-center p-5">
                <Image
                  className=" hover:animate-pulse hover:ease-in-out pt-10"
                  width={100}
                  height={100}
                  src="/logo/logo.svg"
                  alt="Logo"
                />
              </div>
            )}
            {/*--------------- DYNAMIC MENU -------------------*/}
            {nav &&
              sections.map((section) => (
                <li
                  key={section.id}
                  className={
                    nav
                      ? `px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`
                      : `hidden`
                  }
                >
                  <Link
                    className="flex flex-row justify-center items-center"
                    onClick={() => setNav(!nav)}
                    href={{
                      pathname: "/sections/" + section.id,
                      query: { name: section.title },
                    }}
                  >
                    <CiBookmark
                      size={25}
                      className=" text-MainBlueColor mx-2"
                    />
                    <p> {section.title}</p>
                  </Link>
                </li>
              ))}
            {/*--------------- DIVIDER -------------------*/}

            {nav && (
              <span className=" mx-10 w-auto h-1 my-5 px-10 bg-MainBlueColor text-MainBlueColor" />
            )}
            {/*--------------- STATIC MENU -------------------*/}
            {nav && (
              <div className="pb-10">
                {currentUser && (
                  <li
                    className={`px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`}
                  >
                    <Link
                      href={"/profile"}
                      className="flex flex-row justify-center items-center"
                    >
                      <CiUser size={25} className=" text-MainBlueColor mx-2" />
                      <p>{currentUser}</p>
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li
                    className={`px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`}
                  >
                    <Link
                      className="flex flex-row justify-start items-center"
                      href={"/cart"}
                    >
                      <CiShoppingBasket
                        size={25}
                        className=" text-MainBlueColor mx-2"
                      />
                      <p>سله التسوق</p>
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li
                    className={`px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`}
                  >
                    <button
                      className="flex flex-row justify-center items-center"
                      onClick={(event) => {
                        event.preventDefault();
                        signOut(auth);
                      }}
                    >
                      <CiLogin size={25} className=" text-MainBlueColor mx-2" />
                      <p>تسجيل خروج</p>
                    </button>
                  </li>
                )}
                {!currentUser && (
                  <li
                    className={`px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`}
                  >
                    <Link
                      href={"/login"}
                      className="flex flex-row justify-start items-center"
                    >
                      <TbLogin size={25} className=" text-MainBlueColor mx-2" />
                      <p>تسجيل دخول</p>
                    </Link>
                  </li>
                )}

                {!currentUser && (
                  <li
                    className={`px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`}
                  >
                    <Link
                      className="flex flex-row justify-start items-center"
                      href={"/cart"}
                    >
                      <LuUserPlus2
                        size={25}
                        className=" text-MainBlueColor mx-2"
                      />
                      <p>مستخدم جديد</p>
                    </Link>
                  </li>
                )}
              </div>
            )}
          </ul>
        }
      </div>
    </nav>
  );
};

export default Navbar;
