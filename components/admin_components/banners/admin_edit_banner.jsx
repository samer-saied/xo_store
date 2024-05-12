"use client";

import AdminUpperNavBarComp from "@/components/admin_components/admin_upper_nav_bar_comp";
import LoadingPage from "@/components/user_components/common/loading";
import { Banner } from "@/models/banner_model";
import { GetOneBanner } from "@/repository/banners_repository";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { TbCircleArrowLeft } from "react-icons/tb";

export default function AdminEditBannersComp({ data }) {
  console.log(data);
  const router = useRouter();
  const [banner, setBanner] = useState(null);
  const [isLoading, setLoading] = useState(true);

  console.log(data["index"]["navId"]);

  useEffect(() => {
    GetOneBanner(data["index"]["navId"]).then((Banner) => {
      console.log(Banner);
      setBanner(Banner);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className=" container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            data["setIndex"]({ id: 1, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">{"Banners"}</h2>
      </div>

      {isLoading == true || isLoading == null ? (
        <LoadingPage />
      ) : (
        <section dir="ltr" className=" container max-w-5xl px-4 mx-auto sm:px-8 rounded-lg mb-6">
          <form className=" mx-auto shadow-md ">
            <div className=" flex flex-row justify-center items-center p-3 bg-gray-100 ">
            <Image
                    width={120}
                    height={120}
                    alt="icon"
                    src={banner.image}
                    className="mx-auto object-cover rounded-full h-32 w-32  bg-black"
                  />
            </div>
            <div className="space-y-4 bg-white">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

                <input
                  type="text"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="title"
                  value={banner.title}
                />
              </div>
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">descrption</h2>

                <textarea
                  // type="textarea"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="title"
                  value={banner.descrption}
                />
              </div>
              <hr />

              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">Date</h2>

                <input
                  type="date"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="title"
                  // defaultValue={banner.date}
                />
              </div>
              <hr />

              <div className="flex flex-row items-center w-full p-2 text-gray-500">
                <h2 className="max-w-sm uppercase md:w-3/12 px-2">State</h2>

                <input
                  type="text"
                  id="status"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Primary Color"
                  value={banner.status.toString()}
                />
              </div>
              <hr />

              <div className="flex flex-row items-center w-full p-2 text-gray-500">
                <h2 className="max-w-sm uppercase md:w-3/12 px-2">Refrence</h2>
                <input
                  type="text"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="title"
                  value={banner.refProductId}
                />
              </div>
              <hr />

              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  type="submit"
                  className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
