import "react-multi-carousel/lib/styles.css";
import { Category } from "@/models/category_model";
import Image from "next/image";

export default function GameCardWidget(category: Category) {


  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom,${category.primaryColor}, ${category.secandColor})`,
      }}
      className={`md:h-60 h-44 mx-1 bg-gradient-to-b  from-[${category.primaryColor}] to-[${category.secandColor}] rounded-2xl transition delay-150 duration-300 ease-in-out hover:shadow-md hover:shadow-slate-600 mb-5 hover:scale-105 m-3`}
    >
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <Image
          width={200}
          height={200}
          alt={category.title}
          className="w-3/4  h-1/2 rounded-2xl object-contain drop-shadow-md"
          src={category.image}
        />
      </div>
    </div>
  );
}
