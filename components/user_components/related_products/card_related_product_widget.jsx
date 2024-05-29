import { Product } from "@/models/product_model";
import Image from "next/image";
import CurrencySymbolComp from "../common/currency_symbol";

export default function CardRelatedProductsWidget({ product }) {
  return (
    <>
      <div className="mx-2 h-48 w-auto p-3 bg-white rounded-3xl justify-start items-center gap-3 inline-flex shadow-md cursor-pointer">
        <Image
          width={300}
          height={300}
          alt={"xo-store"}
          className=" w-5/12 h-full rounded-xl"
          src={product.image}
        />
        <div className="w-auto flex-col justify-start items-start gap-3 inline-flex">
          <div className="text-blue-950 md:text-xl text-md font-normal ">
            {product.title}
          </div>
          <div className="text-blue-950 md:text-md text-xs font-normal line-clamp-1">
            {product.details}
          </div>
          <div className="text-amber-500 text-xl font-semibold">
            {product.currentPrice}
            <CurrencySymbolComp />
          </div>
        </div>
      </div>
    </>
  );
}
