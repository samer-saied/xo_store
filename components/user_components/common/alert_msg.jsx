import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import { useRouter } from "next/navigation";

const AlertDialogComp = ({ title, msg, setIsOpen, isError }) => {
  const router = useRouter();
  return (
    <AlertDialog
      className=" w-30 h-30"
      open={true}
    >
      <AlertDialogContent>
        <div className=" relative w-full h-full">
          <AlertDialogHeader>
            <AlertDialogTitle className=" text-MainBlueColor ">
              <div className=" w-full flex flex-col justify-center items-center">
                <Image
                  width={100}
                  height={100}
                  alt="Account Created successfully"
                  src={
                    isError == true ? "/assets/error.png" : "/assets/true.png"
                  }
                />
                <span className=" text-3xl">{title ?? "Message"}</span>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription className=" w-full flex flex-row justify-center items-center text-2xl pb-5">
              {msg}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className=" bg-MainBlueColor w-full flex flex-row justify-center items-center font-bold text-xl"
              onClick={(event) => {
                event.preventDefault();
                setIsOpen(false);
                isError == true ? null : router.push("/");
              }}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
          {!isError && (
            <Image
              width={500}
              height={200}
              alt="Account Created successfully"
              src={"/assets/celebrate.gif"}
              className=" absolute top-0 left-0 right-0 h-3/4 w-full"
            />
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogComp;
