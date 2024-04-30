"use client";
import { auth } from "../../db/firebase_init";
import Link from "next/link";
import Image from "next/image";
import { AddOneUser } from "@/repository/users_repository";
import { User } from "@/models/user_model";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import AlertDialogComp from "@/components/user_components/common/alert_msg";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-number-input";

const RegisterPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const RegisterFunc = handleSubmit((data) => {
    const email = data["email"].toLowerCase();
    const password = data["password"].toLowerCase();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
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
        AddOneUser(user)
          .then((newUser) => {
            setIsError(false);
            setMsg("Account Created ....");
            setIsOpen(true);

            // router.push("/");
          })
          .catch((error) => {
            setIsError(true);
            setMsg(error);
            setIsOpen(true);
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setIsError(true);
          setMsg("Email already in use");
          setIsOpen(true);
        } else {
          setIsError(true);
          setMsg("An error occurred during signup. Please try again later.");
        }
      });
  });

  return (
    <>
      <div className="w-screen overflow-hidden py-3 ">
        <div className="lg:w-6/12 md:w-8/12 w-11/12 mx-auto py-5">
          <div className="relative p-5 mx-auto">
            <div className="absolute inset-4 bg-gradient-to-r from-blue-300 to-MainBlueColor shadow-lg transform -rotate-3 rounded-3xl"></div>{" "}
            <div className="relative p-5 bg-white shadow-lg rounded-3xl">
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
                className="px-3 pt-6 pb-8 mb-4 border border-gray-50 bg-white rounded "
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
                  <div className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    <PhoneInput
                      type="tel"
                      id="phone"
                      name="phone"
                      // pattern="(0|1|2|3|4|5|6|7|8|9)\d{10}"
                      placeholder="Enter phone number"
                      value={getValues["phone"]}
                      onChange={(event) => {
                        setValue("phone", event);
                      }}
                      className={"input-phone-number"}
                      rules={{ required: true }}
                      addInternationalOption={false}
                      defaultCountry="EG" // Set a default country (optional)
                    />
                  </div>
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
                        validate: (value) => {
                          return (
                            getValues("password") === value ||
                            "Passwords do not match - passwords should be at least eight (8) characters."
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

        {isOpen && isError && (
          <AlertDialogComp
            title={"Message"}
            msg={msg}
            isError={true}
            setIsOpen={setIsOpen}
          />
        )}
        {isOpen && !isError && (
          <AlertDialogComp
            title={"Congratulations"}
            msg={"Account created successfully"}
            isError={false}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
};

export default RegisterPage;
