import Link from "next/link";
import { TbHome } from "react-icons/tb";


export default function PathWidget({ urlPaths }) {
  return (
    <div className="w-10/12 mx-auto pt-5">
      {/*------------- PATH TEXT ---------------------*/}
      <div className=" w-full h-11 pb-2 border-b border-zinc-200 justify-start items-center gap-2.5 inline-flex">
        <div className="flex flex-row justify-start items-center">
          <TbHome className=" text-MainBlueColor" size={25} />
          <Link href={"/"} key={"home"}>
            <div className=" px-2 text-MainBlueColor md:text-base text-sm font-normal leading-normal">
              الصفحة الرئيسية
            </div>
          </Link>
          <div className="text-blue-950 text-base font-medium font-['Inter'] leading-normal">
            /
          </div>
          {/* <Link href={paths.link} key={paths.name}> */}
            <div className=" px-2 text-amber-500 md:text-base text-sm font-normal leading-normal">
              {urlPaths.name}
            </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
  //<div>My Post: {params.id}</div>;
}
