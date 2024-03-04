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

export default function AdminBannersPage({ params }: any) {
  console.log(params.id);
  const router = useRouter();
  const [banner, setBanner] = useState<Banner | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    GetOneBanner(params.id).then((Banner) => {
      console.log(Banner);
      setBanner(Banner);
      setLoading(false);
    });
  }, [params.id]);

  return (
    <>
        <Link dir="ltr" href={"/admin"} className=" p-1">
        <div className="flex flex-row justify-start items-center p-1">

          <div className="w-3/12">
            {" "}
            <TbCircleArrowLeft size={40} />
          </div>
          <h1 className=" w-6/12 text-center text-3xl font-bold">Banners</h1>

        </div>
      </Link>
      {isLoading == true || isLoading == null ? (
        <LoadingPage />
      ) : (
        <section dir="ltr" className="h-screen bg-gray-100/50 p-10">
          <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">
            <div className="p-4 border-t-2 border-blue-400 rounded-lg bg-gray-100/5 ">
              <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                  <Image
                    width={30}
                    height={30}
                    alt="icon"
                    src={banner!.image}
                    className="mx-auto object-cover rounded-full h-16 w-16 bg-black"
                  />
                  <h1 className="text-gray-600">{banner!.title}</h1>
                </div>
              </div>
            </div>
            <div className="space-y-6 bg-white">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

                <input
                  type="text"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="title"
                  value={banner!.title}
                />
              </div>
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">descrption</h2>

                <textarea
                  // type="textarea"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="title"
                  value={banner!.descrption}
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
                  // defaultValue={banner!.date}
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
                  value={banner!.status.toString()}
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
                  value={banner!.refProductId}
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
