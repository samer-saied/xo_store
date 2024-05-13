"use client";

export default function AdminReportComp({ navData }) {
  return (
    <>
      {/* //////////////////// Page Title //////////////////// */}
      <div dir="ltr" className=" container max-w-5xl px-4 mx-auto sm:px-8 pt-5">
        <h2 className="text-2xl md:text-4xl leading-tight mb-5">
          {"Transactions"}
        </h2>
        <div className="flex flex-row items-center justify-between">
          <div className="m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-110 duration-500">
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

          <div className="m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-110 duration-500">
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

          <div className="m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-110 duration-500">
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

        <h2 className="text-2xl md:text-4xl leading-tight my-5">{"Reports"}</h2>
        <div className="flex flex-row items-center justify-between">
          <div className="m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-110 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-red-600 rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Banners
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                3
              </p>
              <div className="relative h-2 bg-red-600 rounded "></div>
            </div>
          </div>

          <div className="m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-110 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-orange-500 rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Sections
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                6
              </p>
              <div className="relative h-2 bg-orange-500 rounded "></div>
            </div>
          </div>

          <div className="m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-110 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-yellow-500 rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Categories
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                8
              </p>
              <div className="relative h-2 bg-yellow-500 rounded "></div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mt-5">
          <div className="m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-110 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-green-500 rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Products
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                26
              </p>
              <div className="relative h-2 bg-green-500 rounded "></div>
            </div>
          </div>

          <div className="m-4 p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 hover:scale-110 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-blue-500 rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Users
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                10
              </p>
              <div className="relative h-2 bg-blue-500 rounded "></div>
            </div>
          </div>

          <div className="m-4 p-4 w-full bg-white shadow-lg rounded-2xl dark:bg-gray-800 hover:scale-110 duration-500">
            <div className="flex items-center">
              <span className="relative w-4 h-4 p-2 bg-black rounded-full"></span>
              <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
                Settings
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
                0
              </p>
              <div className="relative h-2 bg-black rounded "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
