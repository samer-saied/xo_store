import Link from "next/link";
import React, { useState, useEffect } from "react";
import { auth } from "../../../db/firebase_init";

import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

import { useRouter } from "next/navigation";
import Image from "next/image";

const NewLoginFormWidget = () => {
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
    <div className="w-screen overflow-hidden py-3 ">
      <div className="lg:w-6/12 md:w-8/12 w-11/12 mx-auto py-5">
        <div className="relative p-5 mx-auto">
          <div className="absolute inset-4 bg-gradient-to-r from-blue-300 to-MainBlueColor shadow-lg transform -rotate-3 rounded-3xl"></div>
          <div className="relative p-2 bg-white shadow-lg rounded-3xl">
            <div className=" mx-auto px-5 py-10">
              {/* /////////////////////// IMAGE //////////////////// */}
              <div className=" flex flex-row w-full justify-center items-center mb-10">
                <Image
                  width={120}
                  height={120}
                  src="/logo/logo.svg"
                  alt="XO store Logo"
                />
              </div>
              {/* /////////////////////// SIGN IN //////////////////// */}
              <div className=" flex flex-row justify-center items-center">
                <h1 className="md:text-3xl text-xl font-semibold text-MainBlueColor">
                  تسجيل الدخول
                </h1>
              </div>
              {/* /////////////////////// MAIL & PAASWORD //////////////////// */}
              <div className="divide-y divide-gray-200">
                <div className="py-8 space-y-4 text-gray-700 text-lg leading-7">
                  <div className="relative pt-2 mb-10">
                    <input
                      onChange={(e) => {
                        setEmail(e.currentTarget.value);
                      }}
                      type="text"
                      id="sign-in-email"
                      className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base  "
                      placeholder="البريد الالكتروني"
                    />
                    <label
                      // htmlFor="email"
                      className="absolute right-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      البريد الالكتروني
                    </label>
                  </div>
                  <div className="relative pt-2">
                    <input
                      onChange={(e) => {
                        setpassword(e.currentTarget.value);
                      }}
                      type="password"
                      id="sign-in-password"
                      className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base "
                      placeholder="كلمه المرور"
                    />
                    <label
                      // htmlFor="password"
                      className="absolute right-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      كلمه المرور
                    </label>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      signInFunc();
                    }}
                    className="w-full px-4 py-3 font-bold text-white bg-MainBlueColor rounded-full hover:bg-DarkBlueColor focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    دخول
                  </button>

                  <div className="flex items-center justify-center mt-6">
                    <Link
                      href={"/register"}
                      className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 "
                    >
                      <span className="ml-2">
                        لا امتلك حساب تسجيل حساب جديد
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewLoginFormWidget;
