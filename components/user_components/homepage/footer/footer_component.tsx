// "use server"
import { SetingsInfo } from "@/models/settingsInfo_model";
import { GetOneSetingsInfo } from "@/repository/settings_repository";
import { GetSocialIcon } from "@/utils/social_icon";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

export default async function FooterComponent() {
  const infoData: SetingsInfo = await GetOneSetingsInfo("storeinformation");

  return (
    <div className=" bg-[url('/footer/Vector.png')] h-full relative w-full bg-blue-950 overflow-hidden max-h-full">
      {/*----------- TEXTURE BG -------------------*/}
      {/* <Image
        width={512}
        height={512}
        priority={true}
        className=" h-screen w-full object-cover my-24 md:my-5"
        src="/footer/Vector.png"
        alt=""
      /> */}

      {/*----------- CIRCLE BG -------------------*/}
      <div className=" absolute -bottom-48 -right-48 w-96 h-96 opacity-30 bg-sky-500 rounded-full blur-3xl" />

      {/*----------- CIRCLE BG -------------------*/}
      <div className=" absolute -top-48 -left-48 w-96 h-96 opacity-30 bg-sky-500 rounded-full blur-3xl" />

      <div className=" w-full h-full">
        {/*----------- EMAIL SUBSCRIBE -------------------*/}
        <div className=" py-12 mx-auto sm:w-3/4 px-5 flex flex-col justify-center items-center">
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
        <div className=" w-full mx-auto h-0 border border-neutral-200 mb-5"></div>
        <div className="flex flex-col lg:flex-row lg:w-3/4 lg:mx-auto pb-16">
          {/*----------- COMPANY INFO -------------------*/}
          <div className="w-3/4 mx-auto py-5">
            <Image
              width={10}
              height={10}
              className=" w-16 z-10 opacity-100 py-5"
              src="/logo/logo.svg"
              alt="Xo store logo"
            />
            <div className="w-full text-right text-zinc-100 text-sm font-normal font-['Open Sans'] leading-normal">
              {infoData.about}
            </div>
            {/*----------- SOCIAL LOGOS -------------------*/}
            <div className="flex flex-row mt-3">
              {infoData.socials.map((socialData: any, index: any) => (
                <a
                  key={index}
                  href={socialData["value"]}
                  target="_blank"
                  className=" cursor-pointer hover:scale-125 duration-500"
                >
                  <Image
                    key={index}
                    width={10}
                    height={10}
                    className="px-2 h-10 w-10 object-fit"
                    src={GetSocialIcon(socialData["title"])}
                    alt={socialData["title"] + " link"}
                  />
                </a>
              ))}
            </div>
          </div>
          {/*----------- IMPORTNT LINKS -------------------*/}
          <div className="w-3/4 mx-auto py-5 flex flex-col ">
            <div className="mb-3 text-zinc-100 text-lg font-bold font-['Open Sans'] capitalize">
              الروابط المهمة
            </div>
            <Link
              href="/about"
              className=" inline cursor-pointer py-3 text-zinc-100 text-sm font-normal font-['Open Sans']"
            >
              عن الشركه
            </Link>
            <Link
              href="/sections"
              className=" inline cursor-pointer py-3 text-zinc-100 text-sm font-normal font-['Open Sans']"
            >
              جميع الاقسام
            </Link>
            <Link
              href="/"
              className=" inline cursor-pointer py-3 text-zinc-100 text-sm font-normal font-['Open Sans']"
            >
              خصومات حصريه
            </Link>
            <Link
              href="/today"
              className=" inline cursor-pointer py-3 text-zinc-100 text-sm font-normal font-['Open Sans']"
            >
              صفقات اليوم
            </Link>
          </div>
          {/*----------- Emails LINKS -------------------*/}
          <div className="w-3/4 mx-auto py-5 flex flex-col justify-center">
            <div className="text-zinc-100 text-lg font-bold font-['Open Sans'] capitalize">
              الدعم الفني
            </div>
            {infoData.emails.map((email, index) => (
              <a
                key={index}
                href={"mailto:" + email}
                className="py-3 text-zinc-100 text-lg font-normal font-['Open Sans'] capitalize"
              >
                {email}
              </a>
            ))}
            {infoData.telephone.map((phone, index) => (
              <div key={index} className="flex flex-row cursor-pointer">
                <a
                  key={index}
                  href={"tel:" + phone}
                  className="hover:scale-125 duration-500 py-3 text-zinc-100 text-sm font-normal font-['Open Sans'] cursor-pointer"
                >
                  {phone}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/*----------- CopyRigths-------------------*/}
        <div className=" absolute bottom-1 left-0 right-0 flex flex-row justify-center items-center py-5">
          <p className="text-zinc-100 text-sm font-normal font-['Open Sans']">
            © 2024 - 2025 , All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
