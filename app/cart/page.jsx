"use client";

import LoadingPage from "@/components/user_components/common/loading";
import NoItemComp from "@/components/user_components/common/no_item";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import CurrencySymbolComp from "@/components/user_components/common/currency_symbol";
import PathWidget from "@/components/user_components/common/path_widget";
import CartCardWidget from "@/components/user_components/cart/cart_card_widget";
import RelatedProductsWidget from "@/components/user_components/related_products/related_products_widget";
import { GetOneCart } from "@/repository/GetOneCart";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase_init";
import { GetOneProduct } from "@/repository/products_repository";
import { CiShoppingBasket } from "react-icons/ci";
import { useRouter } from "next/navigation";

const urlPaths = [{ name: "سلة المشتريات", link: "/cart" }];

const CartPage = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentUser, setcurrentUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user.uid);
        setcurrentUser(user.uid);
        let cartData = await GetOneCart(user.uid);
        console.log(cart);
        setCart(cartData);
        console.log("=======================");
        let tempProducts = [];
        if (cartData && cartData["products"].length > 0) {
          for (let index = 0; index < cartData["products"].length; index++) {
            let product = await GetOneProduct(cartData["products"][index]);
            tempProducts.push(product);
          }
        }

        console.log(tempProducts);
        setProducts(tempProducts);
        setLoading(false);
      } else {
        // setcurrentUser("");
        // console.log("user is logged out");
      }
    });
  }, [currentUser]);
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <PathWidget urlPaths={urlPaths} />

          {/*----------------- PAGE Start --------------------*/}
          <div className=" xl:w-3/4 md:w-10/12 mx-auto">
            <div className="flex flex-col">
              {/*----------------- PAGE TITLE --------------------*/}
              <div className="flex flex-row justify-start items-center pt-5 px-3">
                <CiShoppingBasket
                  size={36}
                  className=" mx-1 font-bold text-MainBlueColor"
                />

                <h1 className="text-center text-MainBlueColor text-2xl font-bold">
                  سلة المشتريات
                </h1>
              </div>
              {/*----------------- PAGE CONTENT --------------------*/}
              {products.length > 0 ? (
                <div className="flex lg:flex-row flex-col px-5">
                  {/*----------------- ITEMS --------------------*/}
                  <div className="flex flex-col  lg:w-1/2">
                    {products.map((product) => (
                      <CartCardWidget
                        key={product.createdDate}
                        product={product}
                      />
                    ))}
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
                          الاجمالي
                        </div>
                        <div className="text-center text-black text-base font-normal ">
                          {cart.total}

                          <CurrencySymbolComp />
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="text-center text-neutral-500 text-base font-normal ">
                          الخصم
                        </div>
                        <div className="text-center text-black text-base font-normal ">
                          {cart.sales}
                          <CurrencySymbolComp />
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-start w-full">
                        <div className="text-gray-900 text-xl font-bold leading-7">
                          الاجمالي بعد الخصم
                        </div>
                        <div className="text-right text-amber-500 text-xl font-bold  leading-7">
                          {cart.netTotal}

                          <CurrencySymbolComp />
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
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          router.push("/");
                        }}
                        className="w-full h-12 md:px-5 md:py-2 rounded-lg border border-blue-950 justify-center items-center inline-flex cursor-pointer scale-100 hover:scale-105 ease-in-out transition"
                      >
                        <div className="text-slate-600 text-base font-normal  leading-normal">
                          العودة إلى المتجر
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <NoItemComp />
              )}
            </div>
          </div>

          {products.length > 0 && <RelatedProductsWidget />}
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default CartPage;
