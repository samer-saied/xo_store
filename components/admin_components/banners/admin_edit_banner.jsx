"use client";

import LoadingPage from "@/components/user_components/common/loading";
import {
  DeleteOneBanner,
  GetOneBanner,
  UpdateOneBanner,
} from "@/repository/banners_repository";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TbCircleArrowLeft } from "react-icons/tb";
import { useToast } from "@/components/ui/use-toast";
import { GetAllProducts } from "@/repository/products_repository";
import { CldUploadWidget } from "next-cloudinary";
import { GoUpload } from "react-icons/go";
import { ImCross } from "react-icons/im";

export default function AdminEditBannersComp({ navData }) {
  const [banner, setBanner] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    GetOneBanner(navData["index"]["navId"]).then((Banner) => {
      setBanner(Banner);
      setLoading(false);
    });
    GetAllProducts().then((products) => {
      setProducts(products);
    });
  }, [navData]);

  return (
    <>
      <div className=" overflow-scroll container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            navData["setIndex"]({ id: 1, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">{"Edit Banner"}</h2>
      </div>

      {isLoading == true || isLoading == null ? (
        <LoadingPage />
      ) : (
        <section
          dir="ltr"
          className=" container max-w-5xl px-4 mx-auto sm:px-8 rounded-lg mb-6"
        >
          <div className=" container w-full flex flex-row justify-end items-center">
            <button
              onClick={(event) => {
                event.preventDefault();
                DeleteOneBanner(banner).then(() => {
                  navData["setIndex"]({ id: 1, navId: null });
                  toast({
                    variant: "destructive",
                    title: "حسنا",
                    description: "تم الحذف بنجاح",
                  });
                });
              }}
              className=" text-red-500 bg-gray-100 flex flex-row justify-center items-center rounded-t-md p-2 cursor-pointer hover:scale-105"
            >
              <ImCross />
              <p className="px-1 font-medium"> Delete</p>
            </button>
          </div>

          <form className=" mx-auto shadow-md ">
            {/* <div className=" flex flex-row justify-center items-center p-3 bg-gray-100 ">
              <Image
                width={120}
                height={120}
                alt="icon"
                src={banner.image}
                className="mx-auto object-cover rounded-full h-32 w-32  bg-black"
              />
            </div> */}
            <div className=" w-full p-3 flex flex-col md:flex-row items-center justify-evenly bg-gray-100 ">
              <Image
                width={256}
                height={256}
                alt="icon"
                src={banner.image}
                className=" md:w-1/4 object-contain rounded-md h-64 border-2 m-3 bg-white"
              />

              <CldUploadWidget
                onSuccess={(results) => {
                  setBanner({ ...banner, image: results.info.secure_url });
                  // setValue("image", results.info.secure_url);
                  // setImage("image", results.info.secure_url);
                }}
                uploadPreset="nbx2boqc"
              >
                {({ open }) => {
                  return (
                    <button
                      className={
                        " md:w-1/4 h-full bg-MainBlueColor px-5 py-3 rounded-md text-white"
                      }
                      onClick={(event) => {
                        event.preventDefault();
                        open();
                      }}
                    >
                      <GoUpload className=" inline font-black" />
                      <span className=" inline px-1 font-bold">
                        Upload an Image
                      </span>
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
            <div className="space-y-4 bg-white">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

                <input
                  type="text"
                  id="title"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  value={banner.title}
                  onChange={(event) => {
                    setBanner({ ...banner, title: event.target.value });
                  }}
                />
              </div>
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm md:w-3/12 uppercase">descrption</h2>

                <textarea
                  // type="textarea"
                  id="descrption"
                  onChange={(event) => {
                    setBanner({ ...banner, descrption: event.target.value });
                  }}
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  value={banner.descrption}
                />
              </div>
              <hr />

              {/* <CheckBoxComp val={banner} setVal={setBanner} /> */}
              <div className="flex flex-row items-center w-full px-2 text-gray-500 space-y-4">
                <h2 className="max-w-sm uppercase md:w-3/12 px-2 mt-3">
                  State
                </h2>

                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input
                    onChange={(event) => {
                      setBanner({ ...banner, state: event.target.checked });
                    }}
                    type="checkbox"
                    checked={banner.state} // Set initial checked state (optional)
                    name="toggle"
                    className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="Blue"
                    className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                  ></label>
                </div>
              </div>
              <hr />

              <div className="flex flex-row items-center w-full p-2  text-gray-500">
                <h2 className="max-w-sm uppercase md:w-3/12 px-2">Reference</h2>
                <select
                  onChange={(val) => {
                    setBanner({ ...banner, reference: val.target.value });
                  }}
                  id="reference"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  placeholder="reference id"
                >
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title} - {product.currentPrice}
                    </option>
                  ))}
                </select>
              </div>
              <hr />

              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    UpdateOneBanner(banner).then(() => {
                      toast({
                        variant: "default",
                        title: "حسنا",
                        description: "تم التعديل بنجاح",
                      });
                      navData["setIndex"]({ id: 1, navId: null });
                    });
                  }}
                  type="submit"
                  className="py-2 px-4  bg-gray-600 hover:bg-black focus:ring-black focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
// DeleteOneBanner
