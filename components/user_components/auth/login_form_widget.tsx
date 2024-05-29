import React, { useState, useEffect } from "react";
import { auth } from "../../../db/firebase_init";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginFormWidget = () => {
  const [currentUser, setcurrentUser] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const signInFunc = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (!user) return; // Check if user is valid
      const credential = user as UserCredential;
      const result = credential.user;
      setcurrentUser(result?.email ?? "");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-10/12 md:my-32 my-6 mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-gradient-to-t from-MainYellowColor to-white rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-3xl font-light text-gray-600 sm:text-2xl ">
          تسجيل الدخول
        </div>
        <div className="mt-8">
          <form action="#" autoComplete="off">
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <input
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                  type="text"
                  id="sign-in-email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base  "
                  placeholder="البريد الالكتروني"
                />
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <MdEmail size={25} className=" text-MainBlueColor" />
                </span>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <input
                  onChange={(e) => {
                    setpassword(e.currentTarget.value);
                  }}
                  type="password"
                  id="sign-in-email"
                  className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base "
                  placeholder="كلمه المرور"
                />
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaLock size={25} className=" text-MainBlueColor" />
                </span>
              </div>
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a
                  href="#"
                  className="inline-flex text-xs font-thin text-gray-500 sm:text-sm  hover:text-gray-700 "
                >
                  نسيت كلمه المرور
                </a>
              </div>
            </div>
            <div className="flex w-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signInFunc();
                }}
                type="submit"
                className="py-3 px-4 bg-MainBlueColor hover:bg-MainBlueColor focus:ring-MainBlueColor focus:ring-offset-white-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                تسجيل دخول
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link
            href={"/register"}
            className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 "
          >
            <span className="ml-2">لا امتلك حساب تسجيل حساب جديد</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginFormWidget;
