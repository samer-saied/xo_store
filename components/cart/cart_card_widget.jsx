import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const CartCardWidget = () => {
  return (
    <>
      <div className=" my-2 relative h-auto bg-white rounded-3xl shadow">
        <div className=" absolute top-0 left-0 h-auto p-4 bg-red-400 rounded-tl-3xl rounded-br-2xl justify-center items-center gap-4 inline-flex cursor-pointer hover:shadow-md">
          <RiDeleteBinLine className="hover:animate-bounce" color="white" size={22} />
        </div>
        <div className="flex flex-row justify-center items-center  h-full ">
          <div className=" w-11/12 flex flex-col justify-center">
            <div className="flex flex-row py-3">
              <div className="p-2.5 rounded border border-amber-300 flex-col justify-start items-start gap-2.5 inline-flex">
                <img
                  className=" w-36 h-36 rounded"
                  src="https://via.placeholder.com/168x152"
                />
              </div>
              <div className="flex flex-col justify-center items-start px-3">
                <div className="py-5 text-MainBlueColor md:text-2xl text-xl font-bold">
                  شحن شدات بابجي
                </div>
                <div className="flex flex-row justify-center items-center">
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

export default CartCardWidget