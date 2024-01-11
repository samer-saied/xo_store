import Image from "next/image";
import React from "react";

const TopBarComponent = () => {
  return <div className="w-full bg-amber-50 h-14 flex flex-row justify-center items-center">
    <p className=" font-bold text-MainBlueColor text-sm text-left tracking-[0] leading-[normal] whitespace-nowrap [direction:rtl]">
        خصم 50% يوم الجمعة السوداء
      </p>
  </div>;
};

export default TopBarComponent;
