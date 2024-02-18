import { Banner } from "@/models/banner_model";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BannerCardWidget = ({ id, title, descrption, image ,refProductId}: Banner) => {
  const route = useRouter();

  return (
    <div
      key={id}
      className="w-full md:py-10 my-5 lg:my-10 overflow-visible flex flex-row justify-center items-center bg-white md:min-h-80 h-auto  mb-10"
    >
      {/* //GRAY BACKGROUND AND TEXTS AND IMAGE */}
      {/*  GRAY BACKGROUND */}
      <div className="relative bg-gray-100 md:w-10/12 w-11/12 h-72 rounded-3xl pt-3 px-5 md:py-5 drop-shadow-md">
        <div className=" w-8/12">
          <div className="text-right text-slate-500 md:text-3xl text-2xl font-bold md:py-8 py-5">
            {title}
          </div>
          {/*  TEXTS */}
          <div className=" md:w-10/12 w-10/12 h-full flex flex-col items-start pb-5">
            <div className="pb-3 text-right text-neutral-400 md:text-xl text-md line-clamp-3">
              {descrption.trim()}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                route.push(`/products/${refProductId}`);
              }}
              className="text-white  bg-MainBlueColor shadow-sm rounded-md py-3 px-5 hover:opacity-90 hover:shadow-md"
              type="submit"
            >
              اكتشف الان
            </button>
          </div>
        </div>
        {/* //IMAGE BANNER */}
        <div className="absolute md:-left-16 -left-1 bottom-0 md:-top-5  w-5/12  ">
          <div className=" w-full h-full drop-shadow-md flex flex-col justify-end ">
            <Image
              fill={false}
              className="h-full w-full origin-bottom "
              src={image}
              alt={title}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCardWidget;
