import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NoItemComp = () => {
  const router = useRouter()
  return (
    <div className="py-10 flex flex-col justify-center items-center h-full container">
      <Image
        alt="no item found"
        width={"36"}
        height={"36"}
        className="w-36 h-36 rounded"
        src={"/assets/out-of-stock.png"}
      />
      <h3 className=" p-5 text-3xl font-bold text-red-700">لا يوجد منتجات</h3>
      <button onClick={(event)=>{
        event.preventDefault()
        router.push("/")
      }} className=" m-5 h-12 py-5 px-5 rounded-lg border border-black justify-center items-center inline-flex cursor-pointer scale-100 hover:scale-105 ease-in-out transition">
        <div className="text-black text-base font-normal  leading-normal">
          العودة إلى المتجر وبدا التسوق
        </div>
      </button>
    </div>
  );
};

export default NoItemComp;
