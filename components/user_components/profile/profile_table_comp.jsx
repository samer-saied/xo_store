"use client";

import Image from "next/image";
import LoadingPage from "@/components/user_components/common/loading";
import { useRouter } from "next/navigation";

export default function ProfielTableComp({ data }) {
  const router = useRouter();

  return (
    <>
      <div dir="ltr" class="container max-w-3xl px-4 mx-auto sm:px-8 ">
        <div class="py-2">
          <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table class="min-w-full leading-normal">
                <thead className=" text-white bg-MainBlueColor">
                  <tr>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-normal text-left  uppercase  border-b border-gray-200"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-normal text-left  uppercase  border-b border-gray-200"
                    >
                      Items
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-normal text-left  uppercase  border-b border-gray-200"
                    >
                      Total
                    </th>

                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-normal text-left  uppercase  border-b border-gray-200"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <a href="#" class="relative block">
                            <img
                              alt="profil"
                              src="https://images.unsplash.com/photo-1713430360082-2efa39089532?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              class="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </a>
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Jean marc
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">100 EGP</p>
                    </td>

                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                        ></span>
                        <span class="relative">active</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <a href="#" class="relative block">
                            <img
                              alt="profil"
                              src="https://images.unsplash.com/photo-1713430360082-2efa39089532?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              class="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </a>
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Jean marc
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">100 EGP</p>
                    </td>

                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                        ></span>
                        <span class="relative">active</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <a href="#" class="relative block">
                            <img
                              alt="profil"
                              src="https://images.unsplash.com/photo-1713430360082-2efa39089532?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              class="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </a>
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Jean marc
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">100 EGP</p>
                    </td>

                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                        ></span>
                        <span class="relative">active</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
