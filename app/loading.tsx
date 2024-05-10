import LoadingPage from "@/components/user_components/common/loading";
import Image from "next/image";

const loading = () => {
  return (
    <LoadingPage />
    // <div className=" w-full h-screen flex flex-col justify-center items-center bg-red-400">
    //   <Image
    //     alt={"XO Loading image"}
    //     width={200}
    //     height={400}
    //     // className=" w-72"
    //     src="/logo/logo-animate.gif"
    //   />
    // </div>
  );
};

export default loading;
