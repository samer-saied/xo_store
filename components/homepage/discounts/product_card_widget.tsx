import { Product } from "@/models/product_model";
import Image from "next/image";
import Link from "next/link";

export default function GameCardWidget(product: Product) {

  return (
    <Link href={"/products/" + product.id}>
      <div className=" h-auto flex flex-col mx-1 min-w-44 justify-center items-center">
        <Image
          alt={product.title}
         width={300}
         height={300}
          className=" h-52 md:h-64 rounded-2xl border p-5 hover:shadow-md"
          src={product.image}
        />
        <div className="flex flex-row items-center justify-center px-2 pt-2 h-20 w-full">
          <div className="w-3/4 flex flex-col justify-center items-start">
            <div className="text-blue-900 md:text-base text-sm font-bold">
              {product.title}
            </div>
            <div className="text-stone-500 md:text-sm text-sm font-normal line-clamp-2">
              {product.details}
            </div>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <span className="text-orange-400 md:text-base text-xs font-bold tracking-tight">
                ج.م
              </span>
              <span className="text-orange-400 md:text-lg text-base font-semibold tracking-tight px-1">
                {product.currentPrice}
              </span>
            </div>
            <div className="flex flex-row">
              <div>
                <span className="text-slate-400 text-xs font-bold line-through tracking-tight">
                  ج.م
                </span>
                <span className="text-slate-400 text-base font-normal line-through tracking-tight px-1">
                  {product.prePrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
