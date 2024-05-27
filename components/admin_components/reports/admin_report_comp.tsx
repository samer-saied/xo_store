"use client";

import { CollectionCount, CountInfo } from "@/db/firebase_crud";
import { useEffect, useState } from "react";
import { colors } from "@/utils/colors";

export default function AdminReportComp({ navData }: any) {
  const [counts, setcounts] = useState<CollectionCount[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    CountInfo(["banners", "sections", "categories", "products", "users"]).then(
      (results) => {
        console.log(results);
        setcounts(results!);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <>
      {/* //////////////////// Page Title //////////////////// */}

      <div
        dir="ltr"
        className="  container max-w-5xl px-4 mx-auto sm:px-8 pt-5"
      >
        {/* ////////////////// TOP REPORT Transactions //////////////// */}
        <h2 className="text-2xl md:text-4xl leading-tight mb-5">
          {"Transactions"}
        </h2>
        <div className="flex flex-row items-center justify-between">
          <div className="m-1 md:m-4 p-4 bg-white shadow-lg rounded-2xl w-2/6 dark:bg-gray-800 hover:scale-105 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-black rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Total
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                3
              </p>
              <div className="relative h-2 bg-black rounded "></div>
            </div>
          </div>

          <div className="m-1 md:m-4 p-4 bg-white shadow-lg rounded-2xl w-2/6 dark:bg-gray-800 hover:scale-105 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-red-500 rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Pending...
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-red-800 dark:text-white">
                6
              </p>
              <div className="relative h-2 bg-red-500 rounded "></div>
            </div>
          </div>

          <div className="m-1 md:m-4 p-4 bg-white shadow-lg rounded-2xl w-2/6 dark:bg-gray-800 hover:scale-105 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-green-500 rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Completed
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-green-800 dark:text-white">
                8
              </p>
              <div className="relative h-2 bg-green-500 rounded "></div>
            </div>
          </div>
        </div>
        {/* ////////////////// TOP BOTTOM COUNTS //////////////// */}
        <h2 className="text-2xl md:text-4xl leading-tight my-5">{"Reports"}</h2>
        {isLoading && (
          <div
            role="status"
            className="w-full flex flex-row items-center justify-center"
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
        )}
        {!isLoading && (
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 md:gap-4">
            {counts.map((data: CollectionCount, index: number) => (
              <div
                onClick={() => {
                  navData["setIndex"]({ id: index + 1, navId: null });
                }}
                key={index}
                className=" p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-105 duration-500"
              >
                <div className="flex-1 flex items-center">
                  <span
                    className={`relative w-4 h-4 p-2 ${colors[index]} rounded-full`}
                  ></span>
                  <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                    {data.collectionTitle}
                  </p>
                </div>
                <div className=" flex-1 flex flex-col justify-start">
                  <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                    {data.count}
                  </p>
                  <div
                    className={`relative h-2 ${colors[index]} rounded `}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* <div className="flex flex-row items-center justify-between mt-5">
            <div className="m-1 md:m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-105 duration-500">
              <div className="flex items-center">
                <span className="relative w-4 h-4 p-2 bg-green-500 rounded-full"></span>
                <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                  Products
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                  {counts["products"]}
                </p>
                <div className="relative h-2 bg-green-500 rounded "></div>
              </div>
            </div>

            <div className="m-1 md:m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-105 duration-500">
              <div className="flex items-center">
                <span className="relative w-4 h-4 p-2 bg-blue-500 rounded-full"></span>
                <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                  Users
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                  33
                </p>
                <div className="relative h-2 bg-blue-500 rounded "></div>
              </div>
            </div>

            <div className="m-1 md:m-4 p-4 w-full bg-white shadow-lg rounded-2xl dark:bg-gray-800 hover:scale-105 duration-500">
              <div className="flex items-center">
                <span className="relative w-4 h-4 p-2 bg-black rounded-full"></span>
                <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                  Settings
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                  33
                </p>
                <div className="relative h-2 bg-black rounded "></div>
              </div>
            </div>
          </div> */}
      </div>
    </>
  );
}
