import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navBarLinks } from "@/components/common/navbar_strings";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { CiShoppingBasket,CiUser } from "react-icons/ci";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-auto border-box  border-gray-100 border-b-2 bg-white nav px-4 py-2 md:px-10 lg:px-20">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a href="/">
            <Image
              className=" hover:animate-pulse hover:scale-125 hover:ease-in-out"
              width={60}
              height={60}
              src="/logo/logo.svg"
              alt="Logo"
              //   layout="fixed"
            />
          </a>
        </h1>
        {/* <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={60}
              height={60}
              src="/logo/logo.svg"
              alt="Logo"
              layout="fixed"
            />
          </a>
        </h1> */}
      </div>

      <ul className="hidden  md:flex md:flex-row md:justify-between w-full">
        <div className="flex flex-row">
          {navBarLinks.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-MainBlueColor hover:border-b-2 borde hover:border-MainBlueColor py-2 duration-200 link-underline"
            >
              <Link href={link}>
                {/* <h1 className="text-blue-950 text-sm font-normal font-['Almarai'] capitalize"> */}
                  {link}
                {/* </h1> */}
              </Link>
            </li>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="text-center text-zinc-400 text-sm font-normal font-['Almarai']">
              Arabic
            </div>
            <TbWorld size={35} className="px-2 text-zinc-400" />
          </div>
          {/* <FontAwesomeIcon className="px-2 text-DarkBlueColor" icon={faUser} /> */}
          <CiUser size={35} className="px-2 text-zinc-400" />

          <CiShoppingBasket size={35} className="px-2 text-zinc-400" />

        </div>
      </ul>

      {/*---------------------    BUTTON  ------------------*/}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/*---------------------    MOBILE MENU  ------------------*/}

      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center mt-14 absolute top-0 bottom-0 left-0 z-40 w-3/4 h-screen bg-gradient-to-b from-MainYellowColor to-white text-MainBlueColor">
          {navBarLinks.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
