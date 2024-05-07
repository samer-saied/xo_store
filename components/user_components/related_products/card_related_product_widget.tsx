import Image from "next/image";

export default function CardRelatedProductsWidget() {
  return (
    <>
      <div className="mx-2 h-10/12 w-auto p-5 bg-white rounded-3xl justify-center items-center gap-6 inline-flex shadow-md cursor-pointer">
        <Image
          width={100}
          height={100}
          alt={"xo-store"}
          className="w-1/3 h-10/12"
          src="/most/pubg_man.png"
        />
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-blue-950 md:text-2xl text-xl font-normal ">
            شحن شدات بابجي
          </div>
          <div className="text-amber-500 text-xl font-semibold">ج.م976.33</div>
        </div>
      </div>
    </>
  );
}
