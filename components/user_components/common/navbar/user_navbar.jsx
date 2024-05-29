"use client";
import { TbLogin, TbWorld } from "react-icons/tb";
import { CiLogout, CiShoppingBasket, CiUser } from "react-icons/ci";
import Link from "next/link";
import { LuUserPlus2 } from "react-icons/lu";
import { signOut } from "firebase/auth";
import { auth } from "@/db/firebase_init";
import { useAuth } from "@/hooks/AuthContext";

export default function UserLandscapeWidget() {
  ////

  const { currentUser, loading } = useAuth();
  ////

  return (
    <div className="lg:flex lg:flex-row lg:justify-center lg:items-center hidden">
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
          {currentUser && currentUser.email.split("@")[0].toUpperCase()}
          <CiUser size={25} className=" mx-1" />
        </Link>
      )}
      {!currentUser && (
        <Link
          className={` p-1 mx-1 flex flex-row cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
          href={"/login"}
        >
          <div className="text-center text-sm font-normal ">تسجيل دخول</div>
          <TbLogin size={25} className=" mx-1" />
        </Link>
      )}
      {!currentUser && (
        <Link
          className={` p-1 mx-1 flex flex-row justify-center items-center cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
          href={"/register"}
        >
          <div className="text-center text-sm font-normal ">مستخدم جديد</div>
          <LuUserPlus2 size={25} className=" mx-1" />
        </Link>
      )}
      {currentUser && (
        // <li
        //   className={`cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:bg-MainYellowColor  rounded-full`}
        // >
        <Link
          className={`cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:bg-MainYellowColor  rounded-full`}
          href={"/cart"}
        >
          <div
            className={` p-2 mx-1 flex flex-row justify-center items-center cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
          >
            <p className="text-center text-sm font-normal block ">سله المشتريات</p>
            <CiShoppingBasket size={25} className=" mx-1" />
          </div>
        </Link>
        // </li>
      )}
      {currentUser && (
        <button
          className={` p-1 mx-1 flex flex-row justify-center items-center cursor-pointer capitalize text-zinc-400 hover:text-MainBlueColor hover:scale-105 hover:shadow-sm hover:bg-MainYellowColor rounded-full`}
          onClick={(event) => {
            event.preventDefault();
            signOut(auth);
          }}
        >
          <div className="text-center text-sm font-normal ">تسجيل خروج</div>
          <CiLogout size={25} className=" mx-1" />
        </button>
      )}
    </div>
  );
}
