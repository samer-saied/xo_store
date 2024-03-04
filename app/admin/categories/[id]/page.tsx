"use client";

import LoadingPage from "@/components/user_components/common/loading";
import { Category } from "@/models/category_model";
import { GetOneCategory } from "@/repository/category_repository";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TbCircleArrowLeft } from "react-icons/tb";

export default function AdminCategoriesPage({ params }: any) {
  const router = useRouter();
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    GetOneCategory(params.id).then((Category) => {
      console.log(Category);
      setCategory(Category);
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
          <h1 className=" w-6/12 text-center text-3xl font-bold">Categories</h1>

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
                    src={category!.image}
                    className="mx-auto object-cover rounded-full h-16 w-16 bg-black"
                  />
                  <h1 className="text-gray-600">{category!.title}</h1>
                </div>
              </div>
            </div>
            <div className="space-y-6 bg-white">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">title</h2>

                <input
                  type="text"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="title"
                  value={category!.title}
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
                  // defaultValue={category!.date}
                />
              </div>
              <hr />

              <div className="flex flex-row items-center w-full p-2 text-gray-500">
                <h2 className="max-w-sm uppercase md:w-3/12 px-2">
                  Primary Color
                </h2>

                <input
                  type="color"
                  id="primary-color"
                  className=" rounded-lg border-gery  border border-gray-300 px-2 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Primary Color"
                  value={category!.primaryColor}
                />
              </div>
              <hr />
              <div className="flex flex-row items-center w-full p-2 text-gray-500">
                <h2 className="max-w-sm uppercase md:w-3/12 px-2">
                  Secand Color
                </h2>

                <input
                  type="color"
                  id="secand-color"
                  className=" rounded-lg border-gery  border border-gray-300 px-2 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Primary Color"
                  value={category!.secandColor}
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
