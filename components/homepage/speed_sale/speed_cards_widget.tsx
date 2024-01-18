import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SpeedSaleCardWidget = () => {
  return (
    <div className=" h-auto flex flex-col mx-1 my-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition delay-150 duration-300 ease-in-out">
      <img
        className=" h-52 md:h-64 rounded-2xl"
        src="https://via.placeholder.com/244x210"
      />
      <div className="flex flex-row items-center justify-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="text-blue-900 md:text-base text-xs font-bold">
            شحن يلا لودو
          </div>
          <div className="text-stone-500 md:text-sm text-xs font-normal">
            {" "}
            50,000 جوهرة
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <span className="text-orange-400 md:text-base text-xs font-bold font-['Inter'] tracking-tight">
              ج.م
            </span>
            <span className="text-orange-400 md:text-base text-xs font-semibold font-['Inter'] tracking-tight">
              44.00
            </span>
          </div>
          <div className="flex flex-row">
            <div>
              <span className="text-slate-400 text-xs font-bold font-['Inter'] line-through tracking-tight">
                ج.م
              </span>
              <span className="text-slate-400 text-xs font-normal font-['Inter'] line-through tracking-tight">
                88.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between m-2">
        <button className=" hover:bg-blue-950 hover:text-zinc-100 bg-white rounded-md border border-blue-950 px-2 py-1">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <div className="lg:mx-1 mx-1"></div>
        <button className="w-full py-2 bg-blue-950 hover:bg-zinc-100 hover:text-blue-950 border hover:border-blue-950 border-zinc-50 rounded text-center text-zinc-100 text-sm font-medium font-['Roboto'] leading-tight">
          اشترى الان
        </button>
      </div>
    </div>
  );
};
