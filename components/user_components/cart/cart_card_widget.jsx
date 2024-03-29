import {
  AddOneSection,
  GetAllSections,
} from "@/repository/sections_repository";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const CartCardWidget = () => {
  return (
    <>
      <div className=" my-2 relative h-auto bg-white rounded-3xl shadow">
        <div
          onClick={async () => {
            const data= await GetAllSections();
            await AddOneSection(data[0]);
          }}
          className=" absolute top-0 left-0 h-auto p-3 bg-red-400 rounded-tl-3xl rounded-br-2xl justify-center items-center gap-4 inline-flex cursor-pointer hover:shadow-md"
        >
          <RiDeleteBinLine
            className="hover:animate-bounce"
            color="white"
            size={22}
          />
        </div>
        <div className="flex flex-row justify-center items-center  h-full ">
          <div className=" w-11/12 flex flex-col justify-center">
            <div className="flex flex-row py-3">
              {/*------------------ IMAGE ------------------*/}
              <div className=" p-2.5 rounded border border-amber-300 flex-col justify-start items-start gap-2.5 inline-flex">
                <img
                  className=" md:w-36 md:h-36 rounded"
                  src="https://via.placeholder.com/168x152"
                />
              </div>
              {/*------------------ DETAILS ------------------*/}
              <div className="w-8/12 flex flex-col justify-center items-start px-2 py-5">
                <div className="md:py-5 py-2 text-MainBlueColor md:text-2xl text-lg font-bold">
                  شحن شدات بابجي
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap">
                  <div className="text-amber-500 md:text-xl text-lg font-bold font-['Almarai']">
                    ج.م976.33
                  </div>
                  <div className="px-3 text-neutral-400 md:text-base text-sm font-normal font-['Almarai'] line-through">
                    ج.م1,020.99
                  </div>
                  <div className="px-2 md:text-base text-sm text-white bg-green-600 rounded-md">
                    20%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCardWidget;
