"use client";

import Image from "next/image";

export default function TableComp({ data }) {
  return (
    <>
      <div dir="ltr" className="container max-w-5xl px-4 mx-auto sm:px-8">
        <div className="py-8">
          {/* //////////////////// Page Title //////////////////// */}
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">{data["tableTitle"]}</h2>
            <div className="text-end">
              <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Filter'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-MainBlueColor-600 focus:border-transparent"
                    placeholder="name"
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-MainBlueColor rounded-lg shadow-md hover:bg-MainBlueColor-700 focus:outline-none focus:ring-2 focus:ring-MainBlueColor-500 focus:ring-offset-2 focus:ring-offset-MainBlueColor-200"
                  type="submit"
                >
                  Filter
                </button>
              </form>
            </div>
          </div>
          {/* //////////////////// Table //////////////////// */}
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className=" min-w-full leading-normal text-red">
                {/* //////////////////// TABLE HEAD //////////////////// */}
                <thead className=" bg-gray-300 text-red">
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase  border-b border-gray-200"
                    >
                      {data["tableTitle"]}
                    </th>
                    {data["tableColumns"].map((column, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase  border-b border-gray-200"
                      >
                        {column}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase  border-b border-gray-200"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                {/* //////////////////// TABLE BODY //////////////////// */}
                <tbody>
                  {data["tableData"].map((data, index) => (
                    <tr key={index}>
                      <td className="px-5 py-2 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block">
                              <Image
                                width={30}
                                height={30}
                                alt="profil"
                                src={data["image"]}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="px-1 py-2 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data["title"]}
                        </p>
                      </td>
                      <td className="px-1 py-2 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {data["date"]}
                        </p>
                      </td>
                      <td className="px-1 py-2 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
                          <span
                            aria-hidden="true"
                            className={
                              data["status"] == true
                                ? "absolute inset-0 bg-green-600 rounded-full"
                                : "absolute inset-0 bg-red-600 rounded-full"
                            }
                          ></span>
                          <span className="relative">
                            {data["status"] == true ? "active" : "Inactive"}
                          </span>
                        </span>
                      </td>
                      <td className="px-1 py-2 text-sm bg-white border-b border-gray-200">
                        <button
                          href="#"
                          className=" bg-MainBlueColor text-white hover:text-MainYellowColor rounded-md py-2 px-3 m-3"
                        >
                          Edit
                        </button>
                        <button
                          href="#"
                          className=" bg-red-600 text-white hover:text-MainYellowColor rounded-md py-2 px-3 m2-3"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* //////////////////// PAGINATIONS //////////////////// */}
              <div className="flex flex-col items-center px-5 py-2 bg-white xs:flex-row xs:justify-between">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
