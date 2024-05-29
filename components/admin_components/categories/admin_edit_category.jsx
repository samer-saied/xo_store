"use client";
import LoadingPage from "@/components/user_components/common/loading";
import {
  DeleteOneCategory,
  GetOneCategory,
  UpdateOneCategory,
} from "../../../repository/category_repository";
import Image from "next/image";

import { useState, useEffect } from "react";
import { TbCircleArrowLeft } from "react-icons/tb";
import { GetAllSections } from "@/repository/sections_repository";
import { useToast } from "@/components/ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";
import { GoUpload } from "react-icons/go";
import { ImCross } from "react-icons/im";

export default function AdminEditCategorysComp({ navData }) {
  const [category, setCategory] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    GetOneCategory(navData["index"]["navId"]).then((Category) => {
      setCategory(Category);
      setLoading(false);
    });
    GetAllSections().then((sections) => {
      setSections(sections);
    });
  }, [navData]);

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
          {"Edit Category"}
        </h2>
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
                DeleteOneCategory(category).then(() => {
                  navData["setIndex"]({ id: 3, navId: null });
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
            <div className=" w-full p-3 flex flex-col md:flex-row items-center justify-evenly bg-gray-100 ">
              <Image
                width={256}
                height={256}
                alt="icon"
                src={category.image}
                className=" md:w-1/4 object-contain rounded-md h-64 border-2 m-3 bg-white"
              />

              <CldUploadWidget
                onSuccess={(results) => {
                  setCategory({ ...category, image: results.info.secure_url });
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
                  placeholder="title"
                  value={category.title}
                  onChange={(event) => {
                    ///////
                    setCategory({ ...category, title: event.target.value });
                    ///////
                  }}
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
                    setCategory({
                      ...category,
                      firstColor: event.target.value,
                    });

                  }}
                  value={category.firstColor}
                />
                <h2 className="max-w-sm md:w-3/12 uppercase px-5">
                  Secand Color
                </h2>
                <input
                  type="color"
                  className=" rounded-lg border-gery border border-gray-300  md:flex-1 shadow-sm w-full px-3"
                  id="secandColor"
                  onChange={(event) => {
                    setCategory({
                      ...category,
                      secandColor: event.target.value,
                    });
                  }}
                  value={category.secandColor}
                />
              </div>

              {/* ******************* reference ******************* */}
              <div className="flex flex-row items-center w-full p-2  text-gray-500">
                <h2 className="max-w-sm uppercase md:w-3/12 px-2">Reference</h2>
                <select
                  onChange={(val) => {
                    setCategory({ ...category, sectionId: val.target.value });
                  }}
                  id="categoryId"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  placeholder="category id"
                  value={category.sectionId}
                >
                  {sections.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    UpdateOneCategory(category).then(() => {
                      toast({
                        variant: "default",
                        title: "حسنا",
                        description: "تم التعديل بنجاح",
                      });
                      navData["setIndex"]({ id: 3, navId: null });
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
