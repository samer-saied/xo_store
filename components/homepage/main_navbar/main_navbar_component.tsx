import {
  faBasketShopping,
  faCartShopping,
  faGlobe,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const MainNavBarComponent = () => {
  return (
    <div className="w-full h-14 flex flex-row justify-evenly items-center ">
      <Image
        width={60}
        height={60}
        src="/logo/logo.svg"
        alt="Logo"
        layout="fixed"
      />
      <div className="flex flex-row">
        <h1 className="text-blue-950 text-sm font-normal font-['Almarai'] capitalize">
          الصفحة الرئيسية
        </h1>
        <h1 className="text-zinc-400 text-sm font-normal font-['Almarai'] capitalize">
          شحن منتجات الالعاب
        </h1>
        <h1 className="text-zinc-400 text-sm font-normal font-['Almarai'] capitalize">
          شحن البطاقات الرقمية
        </h1>
        <h1 className="text-zinc-400 text-sm font-normal font-['Almarai'] capitalize">
          شحن التطبيقات
        </h1>
        <h1 className="text-zinc-400 text-sm font-normal font-['Almarai'] capitalize">
          عن X.O
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <div className="text-center text-zinc-400 text-sm font-normal font-['Almarai']">
            Arabic
          </div>
          <FontAwesomeIcon className="px-2 text-zinc-400" icon={faGlobe} />
        </div>
        <FontAwesomeIcon className="px-2 text-DarkBlueColor" icon={faUser} />
        <FontAwesomeIcon
          className="px-2 text-DarkBlueColor"
          icon={faBasketShopping}
        />
      </div>
    </div>
  );
};

export default MainNavBarComponent;
