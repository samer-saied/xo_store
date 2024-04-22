"use client";
import { auth } from "../../db/firebase_init";
import Link from "next/link";
import Image from "next/image";
import { AddOneUser } from "@/repository/users_repository";
import { User } from "@/models/user_model";
import { useForm } from "react-hook-form";
import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import AlertDialogComp from "@/components/user_components/common/alert_msg";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const RegisterFunc = handleSubmit((data) => {
    const email = data["email"].toLowerCase();
    const password = data["password"].toLowerCase();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user!.uid);
        console.log(result.user);
        let user = new User(
          result.user.uid,
          data["firstName"],
          data["lastName"],
          data["email"],
          data["phone"],
          data["password"],
          Date.now(),
          true
        );
        AddOneUser(user).then((newUser) => {
          router.push("/");
          console.log(newUser);
        }).catch((error)=>{
          console.log(error);

        })
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrorMsg("Email already in use");
          setIsOpen(true);
        } else {
          setErrorMsg(
            "An error occurred during signup. Please try again later."
          );
          setIsOpen(true);
        }
      });
  });

  return (
    <>
      <div className="w-screen overflow-hidden py-16 px-8">
        <div className="lg:w-6/12 md:w-8/12 w-10/12 mx-auto py-5">
          <div className="bg-gradient-to-r from-blue-300 to-MainBlueColor shadow-lg transform -rotate-6 rounded-3xl">
            <div className=" bg-white p-3 transform rotate-6 shadow-lg rounded-3xl">
              {/* /////////////////////// IMAGE //////////////////// */}
              <div className=" flex flex-row w-full justify-center items-center mb-10 mt-8">
                <Image
                  width={120}
                  height={120}
                  src="/logo/logo.svg"
                  alt="XO store Logo"
                />
              </div>
              {/* /////////////////////// SIGNIN WORD //////////////////// */}
              <div className=" flex flex-row justify-center items-center">
                <h1 className="text-3xl font-semibold text-MainBlueColor">
                  تسجيل حساب جديد
                </h1>
              </div>
              {/* /////////////////////// FORM //////////////////// */}
              <form
                onSubmit={RegisterFunc}
                className="px-8 pt-6 pb-8 mb-4 border border-gray-50 bg-white rounded "
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:w-5/12 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      الاسم الاول
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="text-md italic rounded text-red-500 p-1 ">
                        * Please insert your firstName
                      </p>
                    )}
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
                      {...register("lastName", { required: true })}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-md italic rounded text-red-500 p-1 ">
                        * Please insert your lastName
                      </p>
                    )}
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
                    {...register("email", {
                      required: true,
                      pattern:
                        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                    })}
                  />
                  {errors.email && (
                    <p className="text-md italic rounded text-red-500 p-1 ">
                      * Please insert correct email
                    </p>
                  )}
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
                    {...register("phone", {
                      required: true,
                      pattern: /(0|1|2|3|4|5|6|7|8|9)\d{10}/,
                    })}
                  />
                  {errors.phone && (
                    <p className="text-md italic rounded text-red-500 p-1 ">
                      * Please insert correct phone number
                    </p>
                  )}
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
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                      placeholder="Password"
                    />
                  </div>
                  <div className=" md:w-5/12">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="confirmPassword"
                    >
                      تاكيد كلمه السر
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value: any) => {
                          return (
                            getValues("password") === value ||
                            "Passwords do not match"
                          );
                        },
                      })}
                      placeholder="Confirm Password"
                    />
                    {(errors.confirmPassword || errors.password) && (
                      <p className="text-md italic rounded text-red-500 p-1 ">
                        * Password Not matched
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-3 font-bold text-white bg-MainBlueColor rounded-full hover:bg-DarkBlueColor focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    انشاء حساب
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                {/* /////////////////////// DONT HAVE ACCOUNT //////////////////// */}
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-MainBlueColor align-baseline hover:text-DarkBlueColor"
                    href={"/login"}
                  >
                    لدي حساب بالفعل... تسجيل دخول
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        {isOpen && (
          <AlertDialogComp errorMsg={errorMsg} setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
};

export default RegisterPage;
