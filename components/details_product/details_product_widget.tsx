import PathWidget from "../common/path_widget";
import { PiStarFill } from "react-icons/pi";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { Product } from "@/models/product_model";
import Image from "next/image";

export default function DetailsProductWidget({
  params,
  product,
}: {
  params: { id: string };
  product: Product;
}) {
  
  const urlPaths = [{ name: product.title, link: "/products/" + product.id }];

  let stars = [];
  for (let index = 0; index < 5; index++) {
    if (index < product.rate) {
      stars.push(1);
    } else {
      stars.push(0);
    }
  }


  return (
    <>
      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget urlPaths={urlPaths} />
      <div className="w-10/12 mx-auto">
        {/*------------------- PRODUCT DETAILS -------------------*/}
        <div className="flex md:flex-row flex-col items-center justify-evenly my-6">
          <div className="md:w-6/12 w-full h-96 bg-neutral-200 rounded-2xl">
            <Image
              width={300}
              height={300}
              src={product?.image}
              alt={product.title}
              className="h-full w-full object-contain rounded-2xl shadow-md"
            />
          </div>
          <div className="md:w-6/12 w-full md:h-96 flex flex-col justify-around md:px-10">
            <div className="flex flex-row justify-between items-center">
              <div className="text-slate-600 text-xl pb-2 font-black leading-10">
                {product?.title}
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row px-2">
                  <span className="text-slate-400 text-xl font-normal line-through tracking-tight">
                    {product.prePrice}
                  </span>
                  <span className="text-slate-400 text-xl font-bold  line-through tracking-tight">
                    $
                  </span>
                </div>
                <div className="text-blue-800 text-4xl font-bold leading-loose">
                  {product.currentPrice}
                </div>
              </div>
            </div>
            {/*------------- Rate STARS ---------------------*/}
            <div className="pb-3 flex flex-row gap-2">
              {stars.map((star,index) =>
                star == 1 ? (
                  <PiStarFill key={index} className="text-orange-400" size={25} />
                ) : (
                  <PiStarFill key={index}  className="text-zinc-200" size={25} />
                )
              )}
            
            </div>
            <div className="w-8 h-0 bg-stone-300 border-2 border-stone-300"></div>
            <div className="text-zinc-800 text-base font-semibold leading-10">
              تفاصيل المنتج
            </div>
            <div className="w-3/4 text-right text-slate-600 text-sm font-medium leading-10 pb-5">
              {product.details}
            </div>
            {/*------------- BUTTONS ---------------------*/}
            <div className="flex flex-row justify-start items-center gap-5">
              <div
                onClick={(e) => {
                  // e.preventDefault();
                  // const product = new Product(
                  //   null,
                  //   "HW9SL1uNF8JlWVWkom9C",
                  //   "NHJJRpGEffbJED3zAG9O",
                  //   "شحن شدات بابجي",
                  //   "https://github.com/samer-saied/xo_store/blob/main/public/cards/coins.png?",
                  //   30,
                  //   28,
                  //   "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحةهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحةهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ن يستبدل في نفس المساحة هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
                  //  "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة",
                  //   4,
                  //   true,
                  //   true,
                  //   "Timestamp"
                  // );
                  // AddOneProduct(product).then((result)=>{
                  //   console.log(result)
                  //   console.log("DONE")
                  // });
                }}
                className="w-auto max-h-14 py-3 px-5 bg-orange-400 rounded-lg flex flex-row justify-center items-center gap-2.5 hover:shadow-md shadow-sm cursor-pointer motion-safe:animate-bounce"
              >
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
          {product.descrption}
        </div>
      </div>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
