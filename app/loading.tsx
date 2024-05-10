import Image from "next/image";

const loading = () => {
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center">
      <Image
        alt={"XO Loading image"}
        width={72}
        height={100}
        className=" w-72"
        src="/logo/logo-animate.gif"
      />
    </div>
  );
};

export default loading;
