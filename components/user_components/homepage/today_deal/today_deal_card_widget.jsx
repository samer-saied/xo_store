import Link from "next/link";
import { CiShoppingBasket } from "react-icons/ci";
import Image from "next/image";

export const TodayDealCardWidget = ({ product, index }) => {
  return (
    // <animated.div ref={ref} style={springs}>
    <Link href={"/products/" + product.id}>
      <div className="border h-auto p-2 flex flex-col mx-1 my-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition delay-150 duration-300 ease-in-out">
        <div className=" flex flex-row justify-center items-center">
          <Image
            width={200}
            height={200}
            className=" h-48 md:h-60 object-contain"
            src={product.image}
            alt={product.title + " image"}
          />
        </div>
        <div className="flex flex-row items-center justify-center p-2 ">
          <div className="w-9/12 flex flex-col justify-center items-start pr-1 h-12">
            <div className="text-blue-900 md:text-base text-xs font-bold">
              {product.title}
            </div>
            <div className="text-stone-500 md:text-sm text-xs font-normal line-clamp-2">
              {product.details}
            </div>
          </div>
          <div className="w-3/12 flex flex-col justify-center items-start">
            <div className="flex flex-row">
              <span className="text-orange-400 px-1 md:text-base text-xs font-bold tracking-tight">
                {product.currentPrice != 0 && "ج.م"}
              </span>
              <span className="text-orange-400 md:text-md text-base font-semibold tracking-tight">
                {product.currentPrice}
              </span>
            </div>
            <div className="flex flex-row">
              <div>
                <span className="text-slate-400 px-1 text-xs font-bold line-through tracking-tight">
                  {product.prePrice != 0 && "ج.م"}
                </span>
                <span className="text-slate-400 text-xs font-normal line-through tracking-tight">
                  {product.prePrice != 0 && product.prePrice}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between m-2">
          <button className=" hover:bg-blue-950 hover:text-zinc-100 bg-white rounded-md border border-blue-950 px-2 py-1">
            <CiShoppingBasket size={25} />
          </button>
          <div className="lg:mx-1 mx-1"></div>
          <button className="w-full py-2 bg-blue-950 hover:bg-zinc-100 hover:text-blue-950 border hover:border-blue-950 border-zinc-50 rounded text-center text-zinc-100 text-sm font-medium font-['Roboto'] leading-tight">
            اشترى الان
          </button>
        </div>
      </div>
    </Link>
    // </animated.div>
  );
};
