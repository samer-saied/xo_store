import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiBookmark, CiLogin, CiShoppingBasket, CiUser } from "react-icons/ci";
import { LuUserPlus2 } from "react-icons/lu";
import { TbLogin } from "react-icons/tb";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/db/firebase_init";

export function MobileMainNavBar({sections}) {

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

 

  return (
    <SheetContent side={"left"} className=" bg-gradient-to-b from-MainYellowColor to-white">
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
        {/* <SheetDescription>
          Make changes to your profile here. Click save when you re done.bg-gradient-to-b from-amber-800 to-white
        </SheetDescription> */}
      </SheetHeader>
      <ul className="flex flex-col justify-start items-start  text-MainBlueColor">
        {/*--------------- DYNAMIC MENU -------------------*/}
        {sections.map((section) => (
          <li
            key={section.id}
            className={`px-4 cursor-pointer capitalize  py-2 text-lg  hover:scale-105 hover:font-bold`}
          >
            <Link
              className="flex flex-row justify-center items-center"
              href={{
                pathname: "/sections/" + section.id,
                query: { name: section.title },
              }}
            >
              <CiBookmark size={25} className=" text-MainBlueColor mx-2" />
              <p> {section.title}</p>
            </Link>
          </li>
        ))}
        {/*--------------- DIVIDER -------------------*/}

        <span className=" mx-10 w-auto h-1 my-5 px-10 bg-MainBlueColor text-MainBlueColor " />
      </ul>
      <SheetFooter>
        {/* <SheetClose asChild> */}
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
                  <p>{currentUser}</p>
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
        {/* </SheetClose> */}
      </SheetFooter>
    </SheetContent>
  );
}
export default MobileMainNavBar;
