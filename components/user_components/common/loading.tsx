import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className=" h-96 flex flex-row justify-center items-center">
      <Image
        width={72}
        height={72}
        className=" w-72 mx-auto"
        src="/logo/logo-animate.gif"
        alt=""
      />
    </div>
  );
};

export default LoadingPage;
