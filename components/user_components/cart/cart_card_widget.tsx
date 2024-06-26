import CurrencySymbolComp from "@/components/user_components/common/currency_symbol";
import { CartItem } from "@/models/cartItem_model";
import Image from "next/image";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const CartCardWidget = ({
  index,
  cartItem,
  clickFunc,
}: {
  index: number;
  cartItem: CartItem;
  clickFunc: any;
}) => {
  return (
    <div
      key={cartItem.productId + index}
      className=" my-2 relative h-auto bg-white rounded-3xl shadow"
    >
      <div
        onClick={clickFunc}
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
              <Image
                width={36}
                height={36}
                className=" max-w-36 max-h-36 md:w-36 md:h-36 w-24 h-24 rounded"
                src={cartItem.productImage ?? "/logo/logo.png"}
                alt={cartItem.productName + " image"}
              />
            </div>
            {/*------------------ DETAILS ------------------*/}
            <div className="w-8/12 flex flex-col justify-center items-start px-2 py-5">
              <div className="md:py-5 py-2 text-MainBlueColor md:text-2xl text-lg font-bold">
                {cartItem.productName}
              </div>
              <div className="flex flex-row justify-center items-center flex-wrap">
                <div className="text-amber-500 md:text-xl text-lg font-bold font-['Almarai']">
                  {cartItem.price}
                  <CurrencySymbolComp />
                </div>
                <div className="px-3 text-neutral-400 md:text-base text-sm font-normal font-['Almarai'] line-through">
                  {cartItem.prePrice}
                  <CurrencySymbolComp />
                </div>
                {cartItem.prePrice != cartItem.price && (
                  <div className="px-2 md:text-base text-sm text-white bg-green-600 rounded-md">
                    <span>SALE </span>

                    {(
                      ((cartItem.prePrice - cartItem.price) /
                      cartItem.price) *
                      100
                    ).toFixed()}
                    <span>%</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCardWidget;
