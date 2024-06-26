"use client";

import { useForm } from "react-hook-form";
import { TbCircleArrowLeft } from "react-icons/tb";
import { PiStarFill } from "react-icons/pi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { GetAllSections } from "@/repository/sections_repository";
import { GetCategoriesBySections } from "@/repository/category_repository";
import { Product } from "@/models/product_model";
import { AddOneProduct } from "../../../repository/products_repository";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { CldUploadWidget } from "next-cloudinary";
import { GoUpload } from "react-icons/go";

export default function AdminAddProductComp({ navData }) {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [isToday, setIsToday] = useState(true);
  const [isExclusive, setIsExclusive] = useState(true);
  const [rating, setRating] = useState(0); // Initial rating state
  const [imageUrl, setImageUrl] = useState("/assets/no-image.png");

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    GetAllSections().then((sections) => {
      setSections(sections);
    });
  }, []);

  useEffect(() => {
    GetCategoriesBySections(selectedSection).then((categories) => {
      setCategories(categories);
    });
  }, [selectedSection]);

  const createStars = (num) => {
    const stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(
        <PiStarFill key={i} className="text-orange-400 mx-1" size={25} />
      );
    }
    return stars;
  };

  const AddFunc = handleSubmit((data) => {
    if (data["prePrice"] > data["currentPrice"]) {
      AddOneProduct(
        new Product(
          null,
          getValues()["categoryId"],
          getValues()["sectionId"],
          data["title"],
          imageUrl,
          data["prePrice"],
          data["currentPrice"],
          data["descrption"],
          data["details"],
          rating,
          isExclusive,
          isToday,
          true,
          Date.now()
        )
      ).then(() => {
        toast({
          variant: "default",
          title: "حسنا",
          description: "تم الاضافه بنجاح",
        });
        navData["setIndex"]({ id: 4, navId: null });
      });
    } else {
      toast({
        variant: "destructive",
        title: "خطا",
        description: "يجب ان يكون السعر الحالي اقل من السعر السابق",
      });
    }
  });

  return (
    <>
      <div className="overflow-scroll container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            navData["setIndex"]({ id: 4, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">
          {"Add New Product"}
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
              // value={product!.title}
            />
          </div>

          {/* ******************* descrption ******************* */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Descrption</h2>

            <textarea
              {...register("descrption", { required: true })}
              type="text"
              id="descrption"
              className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="descrption"
              // value={product!.title}
            />
          </div>

          {/* ******************* details ******************* */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Details</h2>

            <input
              {...register("details", { required: true })}
              type="text"
              id="details"
              className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="details"
              // value={product!.title}
            />
          </div>

          {/* ******************* prePrice ******************* */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Previous Price</h2>

            <input
              {...register("prePrice", { required: true, valueAsNumber: true })}
              type="number"
              min="0"
              step="0.01"
              id="prePrice"
              className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="previous Price"
              // value={product!.title}
            />
          </div>

          {/* ******************* current Price ******************* */}
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm md:w-3/12 uppercase">Current Price</h2>

            <input
              {...register("currentPrice", {
                required: true,
                valueAsNumber: true,
              })}
              type="number"
              min="0"
              step="0.01"
              id="currentPrice"
              className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="current Price"
              // value={product!.title}
            />
          </div>

          {/* ******************* Section ******************* */}
          <div className="flex flex-row items-center w-full p-2  text-gray-500">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2">Section</h2>
            <select
              onChange={(val) => {
                setValue("sectionId", val.target.value);
                setSelectedSection(val.target.value);
                console.log(val.target.value);
                // setSelectedSection()
              }}
              id="sectionId"
              className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="Section ID"
              // value={banner!.refProductId}
            >
              <option key={0} value={0}>
                X - No Selected
              </option>
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>

          {/* ******************* Category ******************* */}
          <div className="flex flex-row items-center w-full p-2  text-gray-500">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2">Category</h2>
            {categories.length > 0 && (
              <select
                onChange={(val) => {
                  setValue("categoryId", val.target.value);
                }}
                id="categoryId"
                className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                placeholder="category id"
                // value={banner!.refProductId}
              >
                <option key={0} value={0}>
                  X - No Selected
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            )}
            {(categories.length == 0 || categories == null) && (
              <p className=" py-2">No Items Found</p>
            )}
          </div>

          {/* ******************* isToday ******************* */}
          <div className="flex flex-row items-center w-full px-2 text-gray-500 space-y-4">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2 mt-3">
              Today Offer
            </h2>

            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                onChange={(event) => {
                  setIsToday(event.target.checked);
                }}
                type="checkbox"
                checked={isToday} // Set initial checked state (optional)
                name="toggle"
                className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="Blue"
                className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
              ></label>
            </div>
          </div>

          {/* ******************* Exclusive ******************* */}
          <div className="flex flex-row items-center w-full px-2 text-gray-500 space-y-4">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2 mt-3">
              Exclusive
            </h2>

            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                onChange={(event) => {
                  setIsExclusive(event.target.checked);
                }}
                checked={isExclusive}
                type="checkbox"
                name="toggle"
                className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="Blue"
                className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
              ></label>
            </div>
          </div>

          {/* ******************* Rate ******************* */}
          <div className="flex flex-row items-center w-full px-2 text-gray-500 space-y-4">
            <h2 className="max-w-sm uppercase md:w-3/12 px-2 mt-3">Rate</h2>
            <div className="w-1/3 flex flex-row justify-start items-center">
              {/* Update rating with some event handler (e.g., button click) */}

              <button
                onClick={(event) => {
                  event.preventDefault();
                  if (rating > 1) {
                    setRating(rating - 1);
                  }
                }}
              >
                <FaMinusCircle className="w-6 h-6  text-red-500" />
              </button>
              <p className=" text-xl px-3 font-bold">{rating}</p>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  if (rating < 5) {
                    setRating(rating + 1);
                  }
                }}
              >
                <FaPlusCircle className="w-6 h-6 text-green-500" />
              </button>
            </div>
            <div className="w-1/3 flex flex-row items-start px-2 text-gray-500 space-y-4">
              {/* Display the stars */}
              <div className="flex flex-row justify-center items-center">
                {createStars(rating)}
              </div>
            </div>
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
