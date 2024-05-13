"use client";

import CheckBoxComp from "@/components/user_components/common/checkbox_comp";
import LoadingPage from "@/components/user_components/common/loading";
import { GetOneBanner } from "@/repository/banners_repository";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TbCircleArrowLeft } from "react-icons/tb";

export default function AdminEditBannersComp({ navData }) {
  const [banner, setBanner] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    GetOneBanner(navData["index"]["navId"]).then((Banner) => {
      setBanner(Banner);
      setLoading(false);
    });
  }, [navData]);

  return (
    <>
      <div className=" container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            navData["setIndex"]({ id: 1, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">{"Edit Banner"}</h2>
      </div>

      {isLoading == true || isLoading == null ? (
        <LoadingPage />
      ) : (
        <section
          dir="ltr"
          className=" container max-w-5xl px-4 mx-auto sm:px-8 rounded-lg mb-6"
        >
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
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  value={banner.title}
                  onChange={(event) => {
                    setBanner({ ...banner, title: event.target.value });
                  }}
                />
              </div>
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">descrption</h2>

                <textarea
                  // type="textarea"
                  id="descrption"
                  onChange={(event) => {
                    setBanner({ ...banner, descrption: event.target.value });
                  }}
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  value={banner.descrption}
                />
              </div>
              <hr />

              <CheckBoxComp val={banner} setVal={setBanner} />

              <hr />

              <div className="flex flex-row items-center justify-center w-full p-2 text-gray-500">
                <h2 className="max-w-sm uppercase md:w-3/12 px-2">Refrence</h2>
                <input
                  type="text"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  value={banner.refProductId}
                  onChange={(event) => {
                    setBanner({ ...banner, refProductId: event.target.value });
                  }}
                />
              </div>
              <hr />

              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  type="submit"
                  className="py-2 px-4  bg-gray-600 hover:bg-black focus:ring-black focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
