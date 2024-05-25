"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { auth } from "../../../db/firebase_init";

import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "@/components/ui/use-toast";

const NewLoginFormWidget = () => {
  const [currentUser, setcurrentUser] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const signInFunc = async () => {
    try {
      setIsLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      // if (!user) return; // Check if user is valid
      const credential = user as UserCredential;
      const result = credential.user;
      setcurrentUser(result?.email ?? "");
      setIsLoading(false);
      router.push("/");
    } catch (err: any) {
      if (err.code == "auth/invalid-credential") {
        setError("بيانات البريد الآلكتروني او كلمه المرور خاطئه");
        toast({
          variant: "destructive",
          title: "حدث خطأ",
          description: error == null ? err.code : error.toString(),
        });
      } else if (err.code == "auth/invalid-email") {
        setError("بريد الكتروني خطأ");
        toast({
          variant: "destructive",
          title: "حدث خطأ",
          description: error == null ? err.code : error.toString(),
        });
      } else if (err.code == "auth/missing-password") {
        setError("كلمه المرور مفقوده");
        toast({
          variant: "destructive",
          title: "حدث خطأ",
          description: error == null ? err.code : error.toString(),
        });
      } else if (err.code == "auth/user-disabled") {
        setError("مستخدم محظور اتصل بالدعم الفني");
        toast({
          variant: "destructive",
          title: "حدث خطأ",
          description: error == null ? err.code : error.toString(),
        });
      } else if (err.code == "auth/user-not-found") {
        setError("لا يوجد مستخدم");
        toast({
          variant: "destructive",
          title: "حدث خطأ",
          description: error == null ? err.code : error.toString(),
        });
      } else {
        setError(err.code);
        toast({
          variant: "destructive",
          title: "حدث خطأ",
          description: error == null ? err.code : error.toString(),
        });
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="overflow-hidden h-screen flex flex-col justify-center">
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
                        e.preventDefault();
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
                        e.preventDefault();
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
                    {isLoading ? (
                      <div
                        className="flex flex-row justify-center items-center"
                        role="status"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <p>دخول</p>
                    )}
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
