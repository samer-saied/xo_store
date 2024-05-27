import { Product } from "@/models/product_model";
import Image from "next/image";
import CurrencySymbolComp from "../common/currency_symbol";

export default function CardRelatedProductsWidget({ product }) {
  return (
    <>
      <div className="mx-2 h-10/12 w-fit p-3 bg-white rounded-3xl justify-start items-center gap-6 inline-flex shadow-md cursor-pointer">
        <Image
          width={300}
          height={300}
          alt={"xo-store"}
          className="w-1/3 h-10/12 "
          src={product.image}
        />
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-blue-950 md:text-2xl text-xl font-normal ">
            {product.title}
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
