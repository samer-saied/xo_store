"use client";

import {
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { CiLogin, CiShoppingBasket, CiUser } from "react-icons/ci";
import { LuUserPlus2 } from "react-icons/lu";
import { TbLogin } from "react-icons/tb";
import { signOut } from "firebase/auth";
import MobileSectionsNavBar from "@/components/user_components/common/navbar/mobile_navBar_sections";
import { auth } from "@/db/firebase_init";
import { useAuth } from "../../../../hooks/AuthContext";

export function MobileMainNavBar({sections}) {
  const { currentUser, loading } = useAuth();

  return (
    <SheetContent
      side={"left"}
      className=" overflow-x-auto bg-gradient-to-b from-MainYellowColor to-white"
    >
      {/* ////////////////////// SHOW SECTIONS ////////////////////// */}
      <SheetHeader>
        <SheetTitle>
          {/* ************** Image ***************/}
          <div className=" w-full p-2 flex flex-row items-center justify-center">
            <Image
              className=" hover:animate-pulse hover:ease-in-out pt-10"
              width={100}
              height={100}
              src="/logo/logo.svg"
              alt="Logo"
            />
          </div>
        </SheetTitle>
      </SheetHeader>

      {/* ////////////////////// MOBILE SECTION ////////////////////// */}
      <MobileSectionsNavBar sections={sections} />

      {/* ////////////////////// USER ////////////////////// */}
      <SheetFooter>
        <ul className="w-full flex flex-col justify-start items-start text-MainBlueColor ">
          {/*--------------- USER MENU -------------------*/}

          <div className="pb-10">
            {currentUser && (
              <li className="px-4 cursor-pointer capitalize py-2 text-md text-lg  hover:scale-105 hover:font-bold">
                <Link
                  href={"/profile"}
                  className="flex flex-row justify-center items-center"
                >
                  <CiUser size={25} className=" text-MainBlueColor mx-2" />
                  <p>
                    {currentUser &&
                      currentUser.email.split("@")[0].toUpperCase() +
                        "'s Profile"}
                  </p>
                </Link>
              </li>
            )}
            {currentUser && (
              <li
                className={`px-4 cursor-pointer capitalize py-2 text-md text-lg hover:scale-105 hover:font-bold`}
              >
                <Link
                  className="flex flex-row justify-start items-center"
                  href={"/cart"}
                >
                  <CiShoppingBasket
                    size={25}
                    className=" text-MainBlueColor mx-2"
                  />
                  <p>سله المشتريات</p>
                </Link>
              </li>
            )}
            {currentUser && (
              <li
                className={`px-4 cursor-pointer capitalize py-2 text-md text-lg hover:scale-105 hover:font-bold`}
              >
                <button
                  className="flex flex-row justify-center items-center hover:text-MainCoralColor"
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
                className={`px-4 cursor-pointer capitalize py-2 text-md text-lg hover:scale-105`}
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
                className={`px-4 cursor-pointer capitalize py-2 text-md text-lg  hover:scale-105`}
              >
                <Link
                  className="flex flex-row justify-start items-center"
                  href={"/register"}
                >
                  <LuUserPlus2 size={25} className=" text-MainBlueColor mx-2" />
                  <p>مستخدم جديد</p>
                </Link>
              </li>
            )}
          </div>
        </ul>
      </SheetFooter>
    </SheetContent>
  );
}
export default MobileMainNavBar;
