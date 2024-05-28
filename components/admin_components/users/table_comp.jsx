"use client";

import LoadingPage from "@/components/user_components/common/loading";
import Image from "next/image";

export default function UserTableComp({ tableData, addFunc }) {
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
                        #
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
                              id: 51,
                              navSection: "users",
                              navId: oneRow.id,
                            });
                          }}
                        >
                          <td className="px-5 py-2 text-sm border-b border-gray-100">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <p>{index + 1}</p>
                              </div>
                            </div>
                          </td>
                          {tableData["tableColumns"].map(
                            (tableColumn, index) => (
                              <>
                                <td
                                  key={index}
                                  className=" px-1 py-2 text-sm border-b border-gray-200"
                                >
                                  {tableColumn != "status" &&
                                    tableColumn != "createdDate" && (
                                      <p className="text-gray-900 whitespace-no-wrap text-center">
                                        {oneRow[tableColumn]}
                                      </p>
                                    )}
                                  {tableColumn == "status" && (
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
                                  {tableColumn == "createdDate" && (
                                    <p className="text-gray-900 whitespace-no-wrap text-center">
                                      {new Date(
                                        oneRow[tableColumn]
                                      ).toLocaleString()}
                                    </p>
                                  )}
                                </td>
                              </>
                            )
                          )}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
