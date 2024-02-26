"use client";
import { auth } from "../../db/firebase_init";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import Navbar from "@/components/user_components/common/Navbar";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen overflow-hidden py-10 px-8">
        <div className="lg:w-6/12 md:w-9/12 w-11/12 mx-auto">
          <div className=" my-12">
            <div className="bg-gradient-to-r from-blue-300 to-MainBlueColor shadow-lg transform -rotate-6 rounded-3xl">
              <div className=" bg-white py-5 transform rotate-6 shadow-lg rounded-3xl">
                <h3 className="pt-4 text-2xl text-center text-MainBlueColor">
                  تسجيل حساب جديد
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 border border-gray-50 bg-white rounded ">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:w-5/12 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="firstName"
                      >
                        الاسم الاول
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="md:w-5/12">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="lastName"
                      >
                        الاسم الاخير
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      البريد الالكتروني
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="phone"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mb-0 md:w-5/12">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        كلمه المرور
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                      <p className="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                    <div className=" md:w-5/12">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="c_password"
                      >
                        تاكيد كلمه السر
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-MainBlueColor rounded-full hover:bg-DarkBlueColor focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      انشاء حساب
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-MainBlueColor align-baseline hover:text-DarkBlueColor"
                      href={"/login"}
                    >
                      لدي حساب بالفعل تسجيل دخول
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default RegisterPage;
