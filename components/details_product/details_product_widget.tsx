
import { faHeart, faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function DetailsProductWidget({ params }: { params: { id: string } }) {
  return (
    <>
   
      <div className="w-10/12 mx-auto">
        {/*------------- PATH TEXT ---------------------*/}
        <div className=" w-full h-11 pb-2 border-b border-zinc-200 justify-start items-center gap-2.5 inline-flex">
          <div className="flex flex-row justify-start items-center gap-2.5 ">
            <FontAwesomeIcon className="text-MainBlueColor h-4" icon={faHome} />
            <Link href={"/"}>
              <div className=" text-MainBlueColor text-base font-normal leading-normal">
                الصفحة الرئيسية
              </div>
            </Link>
            <div className="text-blue-950 text-base font-medium font-['Inter'] leading-normal">
              /
            </div>
            <div className="text-amber-500 text-base font-normal leading-normal">
              صفحة المنتج
            </div>
          </div>
        </div>
        {/*------------------- PRODUCT DETAILS -------------------*/}
        <div className="flex md:flex-row flex-col items-center justify-evenly my-6">
          <div className="md:w-6/12 w-full h-96 bg-neutral-200 rounded-2xl" />
          <div className="md:w-6/12 w-full md:h-96 flex flex-col justify-around md:px-10">
            <div className="flex flex-row justify-between items-center">
              <div className="text-slate-600 text-xl pb-2 font-black leading-10">
                شحن شدات بابجي
              </div>
              <div className="text-blue-800 text-3xl font-bold leading-loose">
                $99
              </div>
            </div>
            {/*------------- Rate STARS ---------------------*/}
            <div className="pb-3 flex flex-row gap-2">
              <FontAwesomeIcon className="text-orange-400 h-6" icon={faStar} />
              <FontAwesomeIcon className="text-orange-400 h-6" icon={faStar} />
              <FontAwesomeIcon className="text-orange-400 h-6" icon={faStar} />
              <FontAwesomeIcon className="text-orange-400 h-6" icon={faStar} />
              <FontAwesomeIcon className="text-zinc-200 h-6" icon={faStar} />
            </div>
            <div className="w-8 h-0 bg-stone-300 border-2 border-stone-300"></div>
            <div className="text-zinc-800 text-base font-semibold leading-10">
              تفاصيل المنتج
            </div>
            <div className="w-3/4 text-right text-slate-600 text-sm font-medium leading-10">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
            </div>
            {/*------------- BUTTONS ---------------------*/}
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="w-auto max-h-14 py-3 px-5 bg-orange-400 rounded-lg flex flex-row justify-center items-center gap-2.5 hover:shadow-md shadow-sm cursor-pointer motion-safe:animate-bounce">
                <FontAwesomeIcon
                  className="text-white h-4"
                  icon={faCartShopping}
                />
                <div className="text-white text-base font-bold leading-loose">
                  اضافة للعربة
                </div>
              </div>
              <div className="w-auto max-h-14 py-3 px-5 rounded-lg border border-orange-400 flex flex-row justify-start items-center gap-2.5 hover:shadow-md shadow-sm cursor-pointer">
                <div className="text-orange-400 text-base font-bold leading-loose">
                  Wishlist
                </div>
                <FontAwesomeIcon
                  className="text-orange-400 h-4"
                  icon={faHeart}
                />
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
