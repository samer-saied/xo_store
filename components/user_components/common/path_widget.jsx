import Link from "next/link";
import { TbHome } from "react-icons/tb";

export default function PathWidget({ urlPaths }) {
  return (
    <div key={"paths"} className="w-10/12 mx-auto pt-5">
      {/*------------- PATH TEXT ---------------------*/}
      <div className=" w-full h-11 pb-2 border-b border-zinc-200 justify-start items-center gap-2.5 inline-flex">
        <div className="flex flex-row justify-start items-center">
          <TbHome className=" text-MainBlueColor" size={25} />
          <Link href={"/"} key={"home"}>
            <div className=" md:px-2 px-1 text-MainBlueColor md:text-base text-xs font-normal leading-normal">
              الصفحة الرئيسية
            </div>
          </Link>

          {urlPaths.map((url, index) => (
            <div key={index} className="flex flex-row justify-center items-center">
              <div className="text-blue-950 text-base font-medium leading-normal">
                /
              </div>
              <Link href={url.link} key={url.name}>
                <div className=" md:px-2 px-1 text-amber-500 md:text-base text-xs font-normal leading-normal">
                  {url.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  //<div>My Post: {params.id}</div>;
}
