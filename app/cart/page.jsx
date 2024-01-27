"use client";

import TopBarComponent from "@/components/homepage/topbar/topbar_component";
import FooterComponent from "@/components/homepage/footer/footer_component";
import Navbar from "@/components/common/Navbar";
import PathWidget from "@/components/common/path_widget";
import CartCardWidget from "@/components/cart/cart_card_widget";
import RelatedProductsWidget from "@/components/related_products/related_products_widget";


const urlPaths = 
  { name: "سلة المشتريات", link: "/cart" };

const CartPage = () => {
  return (
    <>
      <TopBarComponent />
      <Navbar />
      <PathWidget urlPaths={urlPaths} />

      {/*----------------- PAGE Start --------------------*/}
      <div className=" xl:w-3/4 md:w-10/12 mx-auto">
        <div className="flex flex-col">
          {/*----------------- PAGE TITLE --------------------*/}
          <div className="flex flex-row justify-start pt-5 px-3">
            <h1 className="text-center text-neutral-800 text-2xl font-bold">
              سلة المشتريات
            </h1>
          </div>
          {/*----------------- PAGE CONTENT --------------------*/}
          <div className="flex lg:flex-row flex-col px-5">
            {/*----------------- ITEMS --------------------*/}
            <div className="flex flex-col  lg:w-1/2">
              <CartCardWidget />
              <CartCardWidget />
              <CartCardWidget />
              <CartCardWidget />
            </div>
            {/*----------------- Spacer --------------------*/}
            <div className="w-3"></div>
            {/*----------------- TOTAL --------------------*/}
            <div className="flex flex-col  lg:w-1/2">
              <div className="px-6 py-8 bg-white rounded-3xl shadow flex-col justify-start items-start gap-8 inline-flex">
                <div className="text-center text-neutral-800 text-2xl font-bold">
                  ملخص الطلب
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="text-center text-neutral-500 text-base font-normal ">
                    المجموع الفرعي
                  </div>
                  <div className="text-center text-black text-base font-normal ">
                    ج.م976.33
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="text-center text-neutral-500 text-base font-normal ">
                    الخصم
                  </div>
                  <div className="text-center text-black text-base font-normal ">
                    ج.م76.33
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-full">
                  <div className="text-gray-900 text-xl font-bold leading-7">
                    المجموع
                  </div>
                  <div className="text-right text-amber-500 text-xl font-bold  leading-7">
                    ج.م900.00
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full">
                  <span className="text-red-400 text-base font-normal  leading-normal">
                    *
                  </span>
                  <span className="text-gray-500 text-base font-normal  leading-normal">
                    الأسعار شاملة للضريبة
                  </span>
                </div>
                <div className="w-full h-12 md:px-5 md:py-2 bg-blue-950 rounded-lg justify-center items-center inline-flex cursor-pointer scale-100 hover:scale-105 ease-in-out transition">
                  <div className="text-white text-base font-normal  leading-normal">
                    الاستمرار في الدفع
                  </div>
                </div>
                <div className="w-full h-12 md:px-5 md:py-2 rounded-lg border border-blue-950 justify-center items-center inline-flex cursor-pointer scale-100 hover:scale-105 ease-in-out transition">
                  <div className="text-slate-600 text-base font-normal  leading-normal">
                    العودة إلى المتجر
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProductsWidget />
      <FooterComponent />
    </>
  );
};

export default CartPage;
