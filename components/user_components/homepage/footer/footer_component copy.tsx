// "use server"
import { SetingsInfo } from "@/models/settingsInfo_model";
import { GetOneSetingsInfo } from "@/repository/settings_repository";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";

export default async function FooterComponent() {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // const data= res.json();
  const infoData: SetingsInfo = await GetOneSetingsInfo("storeinformation");

  return (
    <div className=" relative w-full overflow-hidden bg-blue-950 h-screen">
      
      
      {/*----------- TEXTURE BG -------------------*/}
      <div className=" z-0 absolute bottom-0 top-0 right-0 left-0 object-cover h-full w-full flex flex-col justify-center items-center">
        <img className=" h-full w-full" src="/footer/Vector.png" alt="" />
      </div>

     
      {/*----------- EMAIL SUBSCRIBE -------------------*/}
      <div className=" py-16 mx-auto sm:w-3/4 px-5 flex flex-col justify-center items-center">
        <div className=" w-full h-14 pr-4 pl-2 py-2 rounded-full border border-neutral-200 justify-start items-center">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center">
              <FaEnvelope size={25} className="text-white h-4" />
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
      <div className=" absolute left-0 right-0  z-50 flex flex-col lg:flex-row lg:w-3/4 lg:mx-auto">
        {/*----------- COMPANY INFO -------------------*/}
        <div className="w-3/4 mx-auto py-5">
          <Image
            width={10}
            height={10}
            className=" w-16 z-10 opacity-100 py-5"
            src="/logo/logo.svg"
            alt=""
          />
          <div className="w-full text-right text-zinc-100 text-sm font-normal font-['Open Sans'] leading-normal">
            {infoData.about}
          </div>
          {/*----------- SOCIAL LOGOS -------------------*/}
          <div className="flex flex-row">
            <Image
              width={10}
              height={10}
              className="px-2 h-10 w-10 object-fit"
              src="/social/facebook.svg"
              alt="facebook link"
            />
            <Image
              width={10}
              height={10}
              className="px-2 h-10 w-10 object-fit"
              src="/social/whatsapp.svg"
              alt="whatsapp link"
            />
            <Image
              width={10}
              height={10}
              className="px-2 h-10 w-10 object-fit"
              src="/social/youtube.svg"
              alt="youtube link"
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
          {infoData.emails.map((email, index) => (
            <div
              key={index}
              className="py-3 text-zinc-100 text-lg font-normal font-['Open Sans'] capitalize"
            >
              {email}
            </div>
          ))}
          {infoData.telephone.map((phone, index) => (
            <div key={index} className="flex flex-row cursor-pointer">
              <a
                key={index}
                href={"tel:" + phone}
                className="py-3 text-zinc-100 text-sm font-normal font-['Open Sans'] cursor-pointer"
              >
                {phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/*----------- CopyRigths-------------------*/}
      <div className="absolute bottom-0 left-0 right-0 overlay flex flex-row justify-center items-center py-14">
        <p className="text-zinc-100 text-sm font-normal font-['Open Sans']">
          © 2024 - 2025 , All Rights Reserved
        </p>
      </div>
    </div>
  );
}
