import { Category } from "@/models/category_model";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

export default function MostSalesCardWidget3(category:Category) {
  return (
    <div className=" md:h-60 h-44 mx-1 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-2xl transition delay-150 duration-300 ease-in-out hover:shadow-md hover:shadow-slate-600 mb-5 hover:scale-105 m-3">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Image fill={true} alt={category.title} className="w-3/4  h-1/2 rounded-2xl object-contain" src={category.image} />
      </div>
    </div>
  );
}



//bg-gradient-to-b from-red-600 to-rose-950