import PathWidget from "./path_widget";
import { PiStarFill } from "react-icons/pi";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

export default function DetailsProductWidget({
  params,
}: {
  params: { id: string };
}) {
  const urlPaths = { name: params.id, link: "/products/" + params.id };

  return (
    <>
      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget urlPaths={urlPaths} />
      <div className="w-10/12 mx-auto">
        {/*------------------- PRODUCT DETAILS -------------------*/}
        <div className="flex md:flex-row flex-col items-center justify-evenly my-6">
          <div className="md:w-6/12 w-full h-96 bg-neutral-200 rounded-2xl" />
          <div className="md:w-6/12 w-full md:h-96 flex flex-col justify-around md:px-10">
            <div className="flex flex-row justify-between items-center">
              <div className="text-slate-600 text-xl pb-2 font-black leading-10">
                شحن شدات بابجي
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row px-2">
                  <span className="text-slate-400 text-xl font-normal line-through tracking-tight">
                    99.00
                  </span>
                  <span className="text-slate-400 text-xl font-bold  line-through tracking-tight">
                    $
                  </span>
                </div>
                <div className="text-blue-800 text-4xl font-bold leading-loose">
                  $88
                </div>
              </div>
            </div>
            {/*------------- Rate STARS ---------------------*/}
            <div className="pb-3 flex flex-row gap-2">
              <PiStarFill className="text-orange-400" size={25} />
              <PiStarFill className="text-orange-400" size={25} />
              <PiStarFill className="text-orange-400" size={25} />
              <PiStarFill className="text-orange-400" size={25} />
              <PiStarFill className="text-zinc-200" size={25} />
            </div>
            <div className="w-8 h-0 bg-stone-300 border-2 border-stone-300"></div>
            <div className="text-zinc-800 text-base font-semibold leading-10">
              تفاصيل المنتج
            </div>
            <div className="w-3/4 text-right text-slate-600 text-sm font-medium leading-10 pb-5">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
            </div>
            {/*------------- BUTTONS ---------------------*/}
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="w-auto max-h-14 py-3 px-5 bg-orange-400 rounded-lg flex flex-row justify-center items-center gap-2.5 hover:shadow-md shadow-sm cursor-pointer motion-safe:animate-bounce">
                <RiShoppingBasket2Fill className="text-white" size={25} />
                <div className="text-white text-base font-bold leading-loose">
                  اضافة للسله
                </div>
              </div>
              <div className="w-auto max-h-14 py-3 px-5 rounded-lg border border-orange-400 flex flex-row justify-start items-center gap-2.5 hover:shadow-md shadow-sm cursor-pointer">
                <div className="text-orange-400 text-base font-bold leading-loose">
                  Wishlist
                </div>
                <FaHeart className="text-orange-400" size={25} />

                {/* <FontAwesomeIcon
                  className="text-orange-400 h-4"
                  icon={faHeart}
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/*------------- DESCRIPTION ---------------------*/}
        <div className="text-zinc-800 text-xl font-bold  capitalize leading-8 pb-4">
          وصف المنتج
        </div>
        <div className="w-full text-right text-slate-600 text-base font-medium leading-10">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحةهذا النص هو مثال لنص
          يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أهذا النص هو
          مثال لنص يمكن أن يستبدل في نفس المساحةهذا النص هو مثال لنص يمكن أن
          يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس
          المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ن يستبدل في
          نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
        </div>
      </div>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
