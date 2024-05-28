import React, { useEffect, useState } from "react";
import { GetOneUserData } from "@/repository/users_repository";
import { TbCircleArrowLeft } from "react-icons/tb";

const AdminUserShowComp = ({ navData }) => {
  const [userData, setuserData] = useState();

  useEffect(() => {
    GetOneUserData(navData["index"]["navId"]).then((user) => {
      console.log(user);
      setuserData(user);
    });
  }, []);

  return (
    <div className="container overflow-scroll">
      <div
        onClick={() => {
          navData["setIndex"]({ id: 5, navId: null });
        }}
        className=" cursor-pointer p-3 flex flex-row justify-start items-center"
      >
        <TbCircleArrowLeft className="text-black" size={40} />
      </div>

      {/*========================= User INFORMATION =========================*/}
      {userData && (
        <div className="my-5 w-full overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-green-100">
            <h3 className="text-3xl font-bold leading-6 text-gray-900 capitalize py-5">
              {userData.lastName.toString() +
                " " +
                userData.lastName.toString()}
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">First Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="name-with-label"
                    disabled
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="firstName"
                    placeholder="firstName Text"
                    value={userData.firstName ?? ""}
                  />
                </dd>
              </div>

              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">Last Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="name-with-label"
                    disabled
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="firstName"
                    placeholder="firstName Text"
                    value={userData.lastName ?? ""}
                  />
                </dd>
              </div>

              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">Email :</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="name-with-label"
                    disabled
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="firstName"
                    placeholder="firstName Text"
                    value={userData.email ?? ""}
                  />
                </dd>
              </div>

              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">Mobile :</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    id="name-with-label"
                    disabled
                    className=" rounded-lg border-transparent  appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                    name="Mobile"
                    placeholder="phone Text"
                    value={userData.phone ?? ""}
                  />
                </dd>
              </div>

              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">
                  Created Date and Time
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {new Date(userData.createdDate).toLocaleString()}
                </dd>
              </div>

              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-bold text-gray-900">
                  {userData.id}
                </dt>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserShowComp;
