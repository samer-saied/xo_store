import Image from "next/image";

const NoItemsWidget = () => {
  return (
    <div className="w-full h-96 flex flex-col justify-center items-center">
      <Image alt="No items found" width={200} height={200} src={"/logo/logo.svg"}></Image>
      <p className=" text-2xl font-bold pt-5 text-MainBlueColor">
        عفوا ، لا يوجد منتجات
      </p>
    </div>
  );
};

export default NoItemsWidget;
