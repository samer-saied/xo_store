import { navBarLinks } from "@/components/common/navbar_strings";
import { TbWorld } from "react-icons/tb";
import { CiBookmark, CiShoppingBasket, CiUser } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full border-gray-100 border-b-2 bg-white nav px-4 py-2 md:px-10 lg:px-20">
      <div>
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
      </div>

      <ul className="hidden  md:flex md:flex-row md:justify-between w-full">
        <div className="flex flex-row">
          {navBarLinks.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-2 lg:px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-MainBlueColor border-b-2 border-white hover:border-MainBlueColor py-2 duration-200 link-underline"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="text-center text-zinc-400 text-sm font-normal ">
              Arabic
            </div>
            <TbWorld size={25} className="text-zinc-400 mx-1" />
          </div>

          <li className={`cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:bg-MainYellowColor  rounded-full`}>
            <Link href={"/login"}>
              <CiUser size={25} className=" m-2" />
            </Link>
          </li>


          <li className={`cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:bg-MainYellowColor  rounded-full`}>
            <Link
             
              href={"/cart"}
            >
              <CiShoppingBasket size={25} className=" m-2" />
            </Link>
          </li>


        </div>
      </ul>

      {/*---------------------    BUTTON  ------------------*/}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? <IoClose size={30} /> : <RiMenu2Line size={30} />}
      </div>

      {/*---------------------    MOBILE MENU  ------------------*/}
      {
        <ul
          className={
            nav
              ? ` transition-all ease-in-out duration-500 delay-150 md:hidden flex flex-col justify-center items-start mt-14 absolute top-0 bottom-0 left-0 z-40 w-8/12 h-full bg-gradient-to-b from-MainYellowColor to-white text-MainBlueColor rounded-lg opacity-95`
              : ` transition-all ease-in-out duration-300 delay-0 opacity-0 w-0 h-full absolute top-0 left-0`
          }
        >
          {nav && (
            <div className="w-full flex flex-row justify-center items-center p-5">
              <Image
                className=" hover:animate-pulse hover:ease-in-out"
                width={100}
                height={100}
                src="/logo/logo.svg"
                alt="Logo"
              />
            </div>
          )}
          {/*--------------- DYNAMIC MENU -------------------*/}
          {nav &&
            navBarLinks.map(({ id, link }) => (
              <li
                key={id}
                className={
                  nav
                    ? `px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`
                    : `hidden`
                }
              >
                <Link
                  className="flex flex-row justify-center items-center"
                  onClick={() => setNav(!nav)}
                  href={link}
                >
                  <CiBookmark size={25} className=" text-MainBlueColor mx-2" />
                  <p> {link}</p>
                </Link>
              </li>
            ))}
          {/*--------------- DIVIDER -------------------*/}

          {nav && (
            <span className=" mx-10 w-auto h-1 my-5 px-10 bg-MainBlueColor text-MainBlueColor" />
          )}
          {/*--------------- STATIC MENU -------------------*/}
          {nav && (
            <>
              <li
                className={`px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`}
              >
                <Link
                  className="flex flex-row justify-center items-center"
                  href={"/login"}
                >
                  <CiUser size={25} className=" text-MainBlueColor mx-2" />
                  <p>تسجيل الدخول</p>
                </Link>
              </li>
              <li
                className={`px-4 cursor-pointer capitalize md:py-6 py-2 sm:text-md text-lg md:text-2xl hover:scale-105`}
              >
                <Link
                  className="flex flex-row justify-center items-center"
                  href={"/cart"}
                >
                  <CiShoppingBasket
                    size={25}
                    className=" text-MainBlueColor mx-2"
                  />
                  <p>سله التسوق</p>
                </Link>
              </li>
            </>
          )}
     

        </ul>
      }
    </div>
  );
};

export default Navbar;
