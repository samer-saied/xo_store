"use client";

import { useForm } from "react-hook-form";
import { TbCircleArrowLeft } from "react-icons/tb";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AddOneSection } from "@/repository/sections_repository";
import { Section } from "@/models/section_model";
import CheckBoxComp from "@/components/admin_components/sections/checkbox_comp";
import { GetAllProducts } from "@/repository/products_repository";

export default function AdminAddSectionComp({ data }) {
  const [products, setProducts] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    GetAllProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const AddFunc = handleSubmit((data) => {
    AddOneSection(
      new Section(
        null,
        data["title"],
        "https://images.unsplash.com/photo-1712439449183-9fd0bb892a37?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        data["descrption"],
        Date.now(),
        getValues()["reference"],
        getValues()["state"]
      )
    );
  });

  return (
    <>
      <div className=" container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            data["setIndex"]({ id: 2, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">{"Sections"}</h2>
      </div>

      <form
        onSubmit={AddFunc}
        className=" shadow-lg max-w-5xl mx-auto rounded-lg bg-gray-100"
      >
        <div className="p-3 flex flex-row justify-center items-center bg-gray-100 ">
          <Image
            width={120}
            height={120}
            alt="icon"
            src={
              "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*syZ3KTsac88AQr9usrPV8Q.png"
            }
            className="mx-auto object-cover rounded-full h-32 w-32  bg-black"
          />
        </div>
        <div className=" bg-white rounded-lg">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

            <input
              {...register("title", { required: true })}
              type="text"
              id="title"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="title"
              // value={section!.title}
            />
          </div>
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">descrption</h2>

            <textarea
              {...register("descrption", { required: true })}
              // type="textarea"
              id="descrption"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="descrption"
              // value={section!.descrption}
            />
          </div>
          {/* products */}
          {/* <div className="flex flex-row items-center w-full p-2 text-gray-500">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2">Reference</h2>
            <input
              {...register("reference", { required: true })}
              type="text"
              id="reference"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="reference id"
              // value={section!.refProductId}
            />
          </div> */}

          <div className="flex flex-row items-center w-full p-2  text-gray-500">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2">Reference</h2>
            <select
              onChange={(val) => {
                setValue("reference", val.target.value);
              }}
              id="reference"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="reference id"
              // value={section!.refProductId}
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.title} - {product.currentPrice}
                </option>
              ))}
            </select>
          </div>

          <CheckBoxComp setVal={setValue} />

          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              type="submit"
              className="py-3 px-4  bg-MainBlueColor hover:bg-MainBlueColor focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
