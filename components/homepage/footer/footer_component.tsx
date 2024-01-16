import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterComponent = () => {
  return (
    <div className=" relative w-full overflow-hidden h-auto bg-blue-950">
      {/*----------- CIRCLE BG -------------------*/}
      <div className=" absolute -bottom-48 -right-48 w-96 h-96 opacity-30 bg-sky-500 rounded-full blur-3xl" />
      {/*----------- TEXTURE BG -------------------*/}
      <div className=" absolute bottom-0 top-0 right-0 left-0 object-cover h-full w-full flex flex-col justify-center items-center">
        <img className=" h-full w-full" src="/most/Vector.png" alt="" />
      </div>
      {/*----------- CIRCLE BG -------------------*/}
      <div className=" absolute -top-48 -left-48 w-96 h-96 opacity-30 bg-sky-500 rounded-full blur-3xl" />
      {/*----------- EMAIL SUBSCRIBE -------------------*/}
      <div className=" py-16 mx-auto sm:w-3/4 px-5 flex flex-col justify-center items-center">
        <div className=" w-full h-14 pr-4 pl-2 py-2 rounded-full border border-neutral-200 justify-start items-center">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center">
              <FontAwesomeIcon className="text-white h-4" icon={faEnvelope} />
              <div className="px-2 text-center text-zinc-100 md:text-base text-sm font-normal font-['Open Sans']">
                ادخل الايميل الخاص بك
              </div>
            </div>
            <div className=" w-28 h-10 px-3 bg-zinc-100 rounded-3xl flex flex-col justify-center items-center ">
              <div className="text-center text-blue-950 text-sm font-bold font-['Open Sans']">
                تقديم
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0 border border-neutral-200"></div>
      <div className="flex flex-col lg:flex-row lg:w-3/4 lg:mx-auto">
        {/*----------- COMPANY INFO -------------------*/}
        <div className="w-3/4 mx-auto py-5">
          <img
            className=" w-16 z-10 opacity-100 py-5"
            src="/logo/logo.svg"
            alt=""
          />
          <div className="w-full text-right text-zinc-100 text-sm font-normal font-['Open Sans'] leading-normal">
            شركة متخصصه بتوفير بطاقات الهدايا الرقمية تابعه لشركة اكس.او
            المحدودة نعمل منذ 3 سنوات بتقديم افضل الخدمات والمنتجات على مستوى
            الوطن العربي..
          </div>
          {/*----------- SOCIAL LOGOS -------------------*/}
          <div className="flex flex-row">
            <img
              className="px-2 h-10 w-10 object-fit"
              src="/social/facebook.svg"
              alt=""
            />
            <img
              className="px-2 h-10 w-10 object-fit"
              src="/social/whatsapp.svg"
              alt=""
            />
            <img
              className="px-2 h-10 w-10 object-fit"
              src="/social/youtube.svg"
              alt=""
            />
          </div>
        </div>
        {/*----------- IMPORTNT LINKS -------------------*/}
        <div className="w-3/4 mx-auto py-5 lg:flex lg:flex-col lg:justify-start lg:items-center">
          <div className="text-zinc-100 text-lg font-bold font-['Open Sans'] capitalize">
            الروابط المهمة
          </div>
          <div className="py-3 text-zinc-100 text-sm font-normal font-['Open Sans']">
            عن الشركة
          </div>
          <div className="text-zinc-100 text-sm font-normal font-['Open Sans']">
            تواصل معنا
          </div>
        </div>
        {/*----------- IMPORTNT LINKS -------------------*/}
        <div className="w-3/4 mx-auto py-5">
          <div className="text-zinc-100 text-lg font-bold font-['Open Sans'] capitalize">
            الدعم الفني
          </div>
          <div className="py-3 text-zinc-100 text-lg font-normal font-['Open Sans'] capitalize">
            X.oStore@gmail.com
          </div>
          <div className="py-3 text-zinc-100 text-sm font-normal font-['Open Sans']">
            096********
          </div>
          <div className="py-3 text-zinc-100 text-sm font-normal font-['Open Sans']">
            096********
          </div>
          <div className="py-3 text-zinc-100 text-sm font-normal font-['Open Sans']">
            096********
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center py-14">
        <p className="text-zinc-100 text-sm font-normal font-['Open Sans']">
          © 2024 - 2025 , All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
