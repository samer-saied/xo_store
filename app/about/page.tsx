import Navbar from "@/components/user_components/common/navbar/Navbar";
import { SetingsInfo } from "../../models/settingsInfo_model";
import { GetOneSetingsInfo } from "@/repository/settings_repository";
import { Sheet } from "@/components/ui/sheet";
import Image from "next/image";
import { GetSocialIcon } from "@/utils/social_icon";

const AboutPage = async () => {
  const infoData: SetingsInfo = await GetOneSetingsInfo("storeinformation");

  return (
    <div className=" w-full h-full  overflow-hidden bg-MainBlueColor">
      <Sheet>
        <Navbar />
        <div className="px-5 md:px-0">
          <div className=" relative container  overflow-hidden rounded-2xl  bg-MainBlueColor h-screen my-10">
            {/*----------- CIRCLE BG -------------------*/}
            <div className=" absolute -bottom-48 -right-48 w-96 h-96 opacity-30 bg-sky-500 rounded-full blur-3xl" />

            {/*----------- CIRCLE BG -------------------*/}
            <div className=" absolute -top-48 -left-48 w-96 h-96 opacity-30 bg-sky-500 rounded-full blur-3xl" />

            {/*----------- COMPANY INFO -------------------*/}
            <div className="w-3/4 mx-auto py-5 flex flex-row justify-center items-center">
              <Image
                width={10}
                height={10}
                className=" w-32 z-10 opacity-100 py-5"
                src="/logo/logo.svg"
                alt="Xo store logo"
              />
            </div>
            <div className=" w-3/4 mx-auto text-center text-zinc-100 text-xl font-normal font-['Open Sans'] leading-normal">
              {infoData.about}
            </div>

            {/*----------- SOCIAL LOGOS -------------------*/}

            <div className="flex flex-row mt-8 justify-center items-center">
              {infoData.socials.map((socialData: any, index: any) => (
                <a
                  key={index}
                  href={socialData["value"]}
                  target="_blank"
                  className=" cursor-pointer hover:scale-125 duration-500 px-5"
                >
                  <Image
                    key={index}
                    width={16}
                    height={16}
                    className="px-2 h-16 w-16 object-fit"
                    src={GetSocialIcon(socialData["title"])}
                    alt={socialData["title"] + " link"}
                  />
                </a>
              ))}
            </div>
            <div className=" w-full mx-auto h-0 border border-neutral-200 m-10"></div>

            {/*----------- Emails LINKS -------------------*/}
            <div className="w-3/4 mx-auto py-5 flex flex-row justify-around items-start">
              <div className=" flex flex-col justify-center items-center">
                <div className="text-zinc-100 text-2xl font-bold font-['Open Sans'] capitalize">
                  تواصل معنا
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
          </div>
        </div>
      </Sheet>
    </div>
  );
};
export default AboutPage;

