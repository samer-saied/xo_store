import PathWidget from "../common/path_widget";
import { PiStarFill } from "react-icons/pi";
import Image from "next/image";
import getStarsRate from "@/utils/stars";
import LoadingPage from "../common/loading";
import CurrencySymbolComp from "../common/currency_symbol";
import AddToCartComp from "../common/addtoCart";

export default async function DetailsProductWidget({ product }) {
  return (
    <>
      {product && (
        <>
          {/*------------- PATH TEXT ---------------------*/}
          <PathWidget
            urlPaths={[
              { name: product.title, link: "/products/" + product.id },
            ]}
          />

          {/*------------------- PRODUCT DETAILS -------------------*/}
          <div className="w-10/12 mx-auto">
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
                <div className="flex flex-wrap justify-between items-center mt-3">
                  <div className="text-slate-600 text-xl pb-2 font-black leading-10">
                    {product?.title}
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row px-2">
                      <span className="text-slate-400 md:text-xl text-lg font-normal line-through tracking-tight">
                        {product.prePrice}
                        <CurrencySymbolComp />
                      </span>
                    </div>
                    <div className="text-blue-800 md:text-3xl text-2xl font-bold leading-loose">
                      {product.currentPrice}
                      <CurrencySymbolComp />
                    </div>
                  </div>
                </div>
                {/*------------- Rate STARS ---------------------*/}
                <div className="pb-3 flex flex-row gap-2">
                  {getStarsRate(product).map((star, index) =>
                    star == 1 ? (
                      <PiStarFill
                        key={index}
                        className="text-orange-400"
                        size={25}
                      />
                    ) : (
                      <PiStarFill
                        key={index}
                        className="text-zinc-200"
                        size={25}
                      />
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
                  <AddToCartComp
                    product={JSON.parse(JSON.stringify(product))}
                  />
                  {/* <div className="w-auto max-h-14 py-3 px-5 rounded-lg border border-orange-400 flex flex-row justify-start items-center gap-2.5 hover:shadow-md shadow-sm cursor-pointer">
                    <div className="text-orange-400 text-base font-bold leading-loose">
                      Wishlist
                    </div>
                    <FaHeart className="text-orange-400" size={25} />
                  </div> */}
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
      )}
      {!product && <LoadingPage />}
    </>
  );
  //<div>My Post: {params.id}</div>;
}
