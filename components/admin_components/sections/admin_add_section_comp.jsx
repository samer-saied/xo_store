"use client";

import { useForm } from "react-hook-form";
import { TbCircleArrowLeft } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";
import { AddOneSection } from "@/repository/sections_repository";
import { Section } from "@/models/section_model";
import { useToast } from "@/components/ui/use-toast";

export default function AdminAddSectionComp({ navData }) {
  const [colors, setColors] = useState({
    firstColor: "#A5C4D4",
    secandColor: "#593F62",
  });
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const AddFunc = handleSubmit((data) => {
    AddOneSection(
      new Section(
        null,
        data["title"],
        "https://cdn.pixabay.com/photo/2016/11/15/23/51/controller-1827840_1280.png",
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
    });
    navData["setIndex"]({ id: 2, navId: null });
  });

  return (
    <>
      <div className=" container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            navData["setIndex"]({ id: 2, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">
          {"Add New Section"}
        </h2>
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
          {/* ******************* TITLE ******************* */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

            <input
              {...register("title", { required: true })}
              type="text"
              id="title"
              className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="title"
              // value={section!.title}
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
