import Image from "next/image";

const NoItemsWidget = ({ infoMsg }: { infoMsg: string }) => {
  return (
    <div className="w-screen h-96 flex flex-row justify-center items-center mx-auto">
      <div className=" flex flex-col justify-center items-center">
        <Image
          alt="No items found"
          width={200}
          height={200}
          src={"/logo/logo.svg"}
        ></Image>
        <p className=" text-2xl font-bold pt-5 text-MainBlueColor">
          {infoMsg ?? " عفوا ، لا يوجد منتجات"}
        </p>
      </div>
    </div>
  );
};

export default NoItemsWidget;
