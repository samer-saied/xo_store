"use client";

import { useForm } from "react-hook-form";
import { TbCircleArrowLeft } from "react-icons/tb";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AddOneBanner } from "@/repository/banners_repository";
import { Banner } from "@/models/banner_model";
import { CldUploadWidget } from "next-cloudinary";
import { GetAllProducts } from "@/repository/products_repository";
import { useToast } from "@/components/ui/use-toast";
import { GoUpload } from "react-icons/go";

export default function AdminAddBannerComp({ navData }) {
  const [products, setProducts] = useState([]);
  const [imageUrl, setImageUrl] = useState("/assets/no-image.png");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const { toast } = useToast();

  useEffect(() => {
    GetAllProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const AddFunc = handleSubmit((data) => {
    AddOneBanner(
      new Banner(
        null,
        data["title"],
        imageUrl,
        data["descrption"],
        Date.now(),
        getValues()["reference"] ?? products[0].id,
        getValues()["state"] ?? false
      )
    ).then(() => {
      toast({
        variant: "default",
        title: "حسنا",
        description: "تم الاضافه بنجاح",
      });
    });
    navData["setIndex"]({ id: 1, navId: null });
  });

  return (
    <>
      <div className="overflow-scroll container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            navData["setIndex"]({ id: 1, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">
          {"Add New Banner"}
        </h2>
      </div>

      <form
        onSubmit={AddFunc}
        className=" shadow-lg max-w-5xl mx-auto rounded-lg bg-gray-100"
      >
        <div className=" w-full p-3 flex flex-col md:flex-row items-center justify-evenly bg-gray-100 ">
          <Image
            width={256}
            height={256}
            alt="icon"
            src={imageUrl}
            className=" md:w-1/4 object-contain rounded-md h-64 border-2 m-3 bg-white"
          />

          <CldUploadWidget
            onSuccess={(results) => {
              // setValue("image", results.info.secure_url);
              console.log(results.info.secure_url);
              setImageUrl(results.info.secure_url);
              // set("image", results.info.secure_url);
            }}
            uploadPreset="nbx2boqc"
          >
            {({ open }) => {
              return (
                <button
                  className={
                    " w-3/4 md:w-fit h-full bg-MainBlueColor px-5 py-3 rounded-md text-white"
                  }
                  onClick={() => open()}
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
        {/* <CloudImageComp
          getImage={getValues()["image"]}
          setImage={(url) => {
            setValue("image", url);
          }}
        /> */}
        <div className=" bg-white rounded-lg">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

            <input
              {...register("title", { required: true })}
              type="text"
              id="title"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="title"
              // value={banner!.title}
            />
          </div>
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">descrption</h2>

            <textarea
              {...register("descrption", { required: true })}
              // type="textarea"
              id="descrption"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="descrption"
              // value={banner!.descrption}
            />
          </div>
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Button Text</h2>

            <input
              {...register("btnTxt", { required: true })}
              type="text"
              id="btnTxt"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="btnTxt"
            />
          </div>

          <div className="flex flex-row items-center w-full p-2  text-gray-500">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2">Reference</h2>
            <select
              onChange={(val) => {
                setValue("reference", val.target.value);
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

          {/* <CheckBoxComp val={getValues()["state"]} setVal={setValue()} /> */}

          <div className="flex flex-row items-center w-full px-2 text-gray-500 space-y-4">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2 mt-3">State</h2>

            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                onChange={(event) => {
                  // event.preventDefault();
                  setValue("state", event.target.checked);
                }}
                type="checkbox"
                checked={getValues()["state"]} // Set initial checked state (optional)
                name="toggle"
                className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="Blue"
                className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
              ></label>
            </div>
          </div>

          <div className="w-full px-4 pb-4 ml-auto mt-5 text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="py-2 px-4  bg-gray-600 hover:bg-black focus:ring-black focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
