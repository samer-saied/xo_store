"use client";

import LoadingPage from "@/components/user_components/common/loading";
import Image from "next/image";

export default function TableComp({ tableData, addFunc }) {
  return (
    <>
      <div dir="ltr" className="container max-w-5xl px-4 mx-auto sm:px-8">
        <div className="py-1">
          {/* //////////////////// Table //////////////////// */}
          {tableData["data"] == null && <LoadingPage />}

          {tableData["data"] != null && (
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className=" min-w-full leading-normal text-red">
                  {/* //////////////////// TABLE HEAD //////////////////// */}
                  <thead className=" bg-gray-300 text-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase  border-b border-gray-200"
                      >
                        {tableData["tableTitle"]}
                      </th>
                      {tableData["tableHeaders"].map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase  border-b border-gray-200"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {/* //////////////////// TABLE BODY //////////////////// */}
                  <tbody>
                    {tableData["data"].length == 0 && <h1>No Data </h1>}

                    {tableData["data"].length > 0 &&
                      tableData["data"].map((oneRow, index) => (
                        <tr
                          key={index}
                          className=" cursor-pointer  hover:bg-blue-100"
                          onClick={() => {
                            addFunc({
                              id: 12,
                              navSection: "banners",
                              navId: oneRow.id,
                            });
                          }}
                        >
                          <td className="px-5 py-2 text-sm border-b border-gray-100">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                {oneRow["image"] == null &&
                                oneRow["icon"] == null ? (
                                  <Image
                                    width={30}
                                    height={30}
                                    alt="profile"
                                    src={"/logo/logo.png"}
                                    className="mx-auto object-cover rounded-md h-10 w-10  bg-black"
                                  />
                                ) : (
                                  <Image
                                    width={30}
                                    height={30}
                                    alt="profile"
                                    src={oneRow["image"] ?? oneRow["icon"]}
                                    className="mx-auto object-contain rounded-md h-10 w-10  bg-white border-2"
                                  />
                                )}
                              </div>
                            </div>
                          </td>
                          {tableData["tableColumns"].map(
                            (tableColumn, index) => (
                              <td
                                key={index}
                                className=" px-1 py-2 text-sm border-b border-gray-200"
                              >
                                {tableColumn != "state" &&
                                  tableColumn != "date" && (
                                    <p className="text-gray-900 whitespace-no-wrap text-center">
                                      {oneRow[tableColumn]}
                                    </p>
                                  )}
                                {tableColumn == "state" && (
                                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
                                    <span
                                      aria-hidden="true"
                                      className={
                                        oneRow[tableColumn] == true
                                          ? "absolute inset-0 bg-green-600 rounded-full"
                                          : "absolute inset-0 bg-pink-500 rounded-full"
                                      }
                                    ></span>
                                    <span className="relative">
                                      {oneRow[tableColumn] == true
                                        ? "active"
                                        : "Inactive"}
                                    </span>
                                  </span>
                                )}
                                {tableColumn == "date" && (
                                  <p className="text-gray-900 whitespace-no-wrap text-center">
                                    {new Date(
                                      oneRow[tableColumn]
                                    ).toLocaleString()}
                                  </p>
                                )}
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* //////////////////// PAGINATIONS //////////////////// */}
                {/* <div className="flex flex-col items-center px-5 py-2 bg-white xs:flex-row xs:justify-between">
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
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
