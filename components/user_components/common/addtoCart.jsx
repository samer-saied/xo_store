"use client";
import { useToast } from "@/components/ui/use-toast";
import { AddItemToCart } from "@/repository/cart_repository";
import { ToastAction } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";
import { RiShoppingBasket2Fill } from "react-icons/ri";

const AddToCartComp = ({ product }) => {
  const { toast } = useToast();
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        AddItemToCart(product);
        toast({
          variant: "default",
          title: "حسنا",
          description: "تم اضافه المنتج لسله المشتريات بنجاح",
          action: (
            <ToastAction
              onClick={(event) => {
                event.preventDefault();
                router.push("/cart");
              }}
              altText="continue"
            >
              الذهاب للسله
            </ToastAction>
          ),
        });
      }}
      className="w-auto max-h-14 py-3 px-5 bg-orange-400 rounded-lg flex flex-row justify-center items-center gap-2.5 hover:shadow-md shadow-sm cursor-pointer hover:transform hover:scale-110 duration-500"
    >
      <RiShoppingBasket2Fill className="text-white" size={25} />
      <div className="text-white md:text-base text-sm font-bold leading-loose">
        اضافة للسله
      </div>
    </div>
  );
};

export default AddToCartComp;
