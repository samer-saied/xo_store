"use client";

import { useForm } from "react-hook-form";
import { TbCircleArrowLeft } from "react-icons/tb";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { GetAllSections } from "@/repository/sections_repository";
import { Category } from "@/models/category_model";
import { AddOneCategory } from "@/repository/category_repository";
import { CldUploadWidget } from "next-cloudinary";
import { GoUpload } from "react-icons/go";

export default function AdminAddCategoryComp({ navData }) {
  const [sections, setSections] = useState([]);
  const [imageUrl, setImageUrl] = useState("/assets/no-image.png");

  useEffect(() => {
    GetAllSections().then((sections) => {
      setSections(sections);
    });
  }, []);

  const [colors, setColors] = useState({
    firstColor: "#A5C4D4",
    secandColor: "#593F62",
  });
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const AddFunc = handleSubmit((data) => {
    // let newCate = new Category(
    //   null,
    //   data["reference"] ?? sections[0].id,
    //   data["title"],
    //   "https://cdn.pixabay.com/photo/2016/11/15/23/51/controller-1827840_1280.png",
    //   colors["firstColor"].toString(),
    //   colors["secandColor"].toString(),
    //   Date.now()
    // );
    // console.log(newCate);
    AddOneCategory(
      new Category(
        null,
        data["reference"] ?? sections[0].id,
        data["title"],
        imageUrl,
        colors["firstColor"].toString(),
        colors["secandColor"].toString(),
        Date.now()
      )
    ).then(() => {
      toast({
        variant: "default",
        title: "حسنا",
        description: "تم الاضافه بنجاح",
      });
      navData["setIndex"]({ id: 3, navId: null });
    });
  });

  return (
    <>
      <div className="overflow-scroll container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            navData["setIndex"]({ id: 3, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">
          {"Add New Category"}
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
        <div className=" bg-white rounded-lg">
          {/* ******************* TITLE ******************* */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

            <input
              {...register("title", { required: true })}
              type="text"
              id="title"
              className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="title"
              // value={category!.title}
            />
          </div>

          {/* ******************* Color ******************* */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">First Color</h2>
            <input
              type="color"
              className=" rounded-lg border-gery border border-gray-300  md:flex-1 shadow-sm w-full px-3"
              id="firstColor"
              onChange={(event) => {
                event.preventDefault();
                setColors({ ...colors, firstColor: event.target.value });
              }}
              value={colors["firstColor"]}
            />
            <h2 className="max-w-sm md:w-3/12 uppercase px-5">Secand Color</h2>
            <input
              type="color"
              className=" rounded-lg border-gery border border-gray-300  md:flex-1 shadow-sm w-full px-3"
              id="secandColor"
              onChange={(event) => {
                event.preventDefault();
                setColors({ ...colors, secandColor: event.target.value });
              }}
              value={colors["secandColor"]}
            />
          </div>

          {/* ******************* reference ******************* */}
          <div className="flex flex-row items-center w-full p-2  text-gray-500">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2">Reference</h2>
            <select
              onChange={(val) => {
                setValue("reference", val.target.value);
              }}
              id="reference"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="reference id"
              // value={banner!.refProductId}
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>

          {/* ******************* BUTTON ******************* */}
          <div className="mt-5 w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
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
