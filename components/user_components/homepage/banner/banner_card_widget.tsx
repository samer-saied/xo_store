import { Banner } from "@/models/banner_model";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BannerCardWidget = ({
  id,
  title,
  descrption,
  image,
  refProductId,
}: Banner) => {
  const route = useRouter();

  return (
    <div
      key={id}
      className="w-full md:py-5 my-5 overflow-visible flex flex-row justify-center items-center bg-white  h-auto mb-10"
    >
      {/* //GRAY BACKGROUND AND TEXTS AND IMAGE */}
      {/*  GRAY BACKGROUND */}
      <div className="relative bg-gray-100 md:w-10/12 w-11/12 py-5 md:h-72 rounded-3xl pt-3 px-5 md:py-5 drop-shadow-md">
        <div className="w-8/12 flex flex-col h-full justify-start md:pt-5 pt-3 md:pl-10">
          <h1 className="text-right text-slate-500 md:text-3xl text-xl font-bold md:py-4 py-2">
            {title}
          </h1>
          {/*  TEXTS */}
          <div className=" md:w-10/12 w-11/12 h-auto flex flex-col items-start justify-center">
            <h2 className="md:pb-5 pb-2 line-clamp-3 overflow-hidden text-right text-neutral-400 lg:text-lg md:text-md text-md">
              {descrption.trim()}
            </h2>
          </div>
          <div className=" md:w-10/12 w-11/12 h-auto">
            <button
              onClick={(e) => {
                e.preventDefault();
                route.push(`/products/${refProductId}`);
              }}
              className="text-white  bg-MainBlueColor shadow-sm rounded-md md:py-3 md:px-5 py-2 px-3 hover:opacity-90 hover:shadow-md"
              type="submit"
            >
              اكتشف الان
            </button>
          </div>
        </div>
        {/* //IMAGE BANNER */}
        <div className="absolute md:-left-16 -left-5 bottom-0 md:-top-5  w-5/12  ">
          <div className=" w-full h-full drop-shadow-md flex flex-col justify-end ">
            <Image
              priority={true}
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
