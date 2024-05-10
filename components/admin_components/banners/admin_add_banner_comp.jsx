"use client";

import { useForm } from "react-hook-form";
import { TbCircleArrowLeft } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";
import { AddOneBanner } from "@/repository/banners_repository";
import { Banner } from "@/models/banner_model";

export default function AdminAddBannerComp({ data }) {
  const [isChecked, setIsChecked] = useState(false); // Initial state (optional)
  // const [banner, setbanner] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setValue("state", event.target.checked);
  };

  // useEffect(() => {
  //   GetOneBan().then((banner) => {
  //     setbanner(banner);
  //     setLoading(false);
  //   });
  // }, []);

  const AddFunc = handleSubmit((data) => {
    AddOneBanner(
      new Banner(
        null,
        data["title"],
        "https://images.unsplash.com/photo-1712439449183-9fd0bb892a37?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        data["descrption"],
        Date.now(),
        data["reference"],

        isChecked
      )
    );
  });

  return (
    <>
      <div className="w-full p-3  flex flex-row justify-start items-center">
        <button
          onClick={() => {
            data["setIndex"](1);
          }}
        >
          <TbCircleArrowLeft className="text-MainBlueColor" size={40} />
        </button>
      </div>
      <form
        onSubmit={AddFunc}
        className="container max-w-2xl mx-auto shadow-md md:w-3/4"
      >
        <div className="p-4 border-t-2 border-blue-400 rounded-lg bg-gray-100 ">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <Image
                width={30}
                height={30}
                alt="icon"
                src={
                  "https://plus.unsplash.com/premium_photo-1692049122940-9ed87ceee9a4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                className="mx-auto object-cover rounded-full h-16 w-16 bg-black"
              />
              <h1 className="text-gray-600">{"banner!.title"}</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

            <input
              {...register("title", { required: true })}
              type="text"
              id="title"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="title"
              // value={banner!.title}
            />
          </div>
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">descrption</h2>

            <textarea
              {...register("descrption", { required: true })}
              // type="textarea"
              id="title"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="title"
              // value={banner!.descrption}
            />
          </div>

          <div className="flex flex-row items-center w-full p-2 text-gray-500">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2">Reference</h2>
            <input
              {...register("reference", { required: true })}
              type="text"
              id="title"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="title"
              // value={banner!.refProductId}
            />
          </div>

          <div className="flex flex-row items-center w-full p-2 text-gray-500">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2">State</h2>

            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                checked={isChecked} // Set initial checked state (optional)
                name="toggle"
                id="Blue"
                className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="Blue"
                className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
              ></label>
            </div>
          </div>

          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="py-2 px-4  bg-MainBlueColor hover:bg-MainBlueColor focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
