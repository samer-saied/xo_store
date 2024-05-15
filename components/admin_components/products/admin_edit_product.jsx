"use client";
import { TbCircleArrowLeft } from "react-icons/tb";
import { PiStarFill } from "react-icons/pi";
import {
  GetOneProduct,
  UpdateOneProduct,
} from "../../../repository/products_repository";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { GetAllSections } from "@/repository/sections_repository";
import { GetCategoriesBySections } from "@/repository/category_repository";

export default function AdminEditProductsComp({ navData }) {
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    GetOneProduct(navData["index"]["navId"]).then((Product) => {
      console.log(Product);
      setProduct(Product);
      setSelectedSection(Product.sectionId);
    });
    GetAllSections().then((sections) => {
      setSections(sections);
    });

    setLoading(false);
  }, [navData]);

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

  return (
    <>
      <div className=" container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-start items-center pt-5">
        <div
          onClick={() => {
            navData["setIndex"]({ id: 4, navId: null });
          }}
          className=" cursor-pointer p-3 flex flex-row justify-start items-center"
        >
          <TbCircleArrowLeft className="text-black" size={40} />
        </div>
        <h2 className="text-2xl md:text-4xl leading-tight">{"Edit Product"}</h2>
      </div>
      {!isLoading && product && (
        <form
          onSubmit={() => {
            UpdateOneProduct(product).then(() => {
              toast({
                variant: "default",
                title: "حسنا",
                description: "تم التعديل بنجاح",
              });
            });
            navData["setIndex"]({ id: 4, navId: null });
          }}
          className=" shadow-lg max-w-5xl mx-auto rounded-lg bg-gray-100"
        >
          <div className="p-3 flex flex-row justify-center items-center bg-gray-100 ">
            <Image
              width={120}
              height={120}
              alt="icon"
              src={product.image}
              className="mx-auto object-contain rounded-full h-32 w-32  bg-black"
            />
          </div>
          <div className=" bg-white rounded-lg">
            {/* ******************* TITLE ******************* */}
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm md:w-3/12 uppercase">Title</h2>

              <input
                onChange={(event) => {
                  setProduct({ ...product, title: event.target.value });
                }}
                type="text"
                id="title"
                className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                placeholder="title"
                value={product.title}
              />
            </div>

            {/* ******************* descrption ******************* */}
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm md:w-3/12 uppercase">Description</h2>

              <textarea
                onChange={(event) => {
                  setProduct({ ...product, descrption: event.target.value });
                }}
                type="text"
                id="descrption"
                className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                placeholder="descrption"
                value={product.descrption}
              />
            </div>

            {/* ******************* details ******************* */}
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm md:w-3/12 uppercase">Details</h2>

              <input
                onChange={(event) => {
                  setProduct({ ...product, details: event.target.value });
                }}
                type="text"
                id="details"
                className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                placeholder="details"
                value={product.details}
              />
            </div>

            {/* ******************* prePrice ******************* */}
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm md:w-3/12 uppercase">Previous Price</h2>

              <input
                onChange={(event) => {
                  setProduct({ ...product, prePrice: event.target.value });
                }}
                type="number"
                min="0"
                step="0.01"
                id="prePrice"
                className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                placeholder="previous Price"
                value={product.prePrice}
              />
            </div>

            {/* ******************* current Price ******************* */}
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm md:w-3/12 uppercase">Current Price</h2>

              <input
                onChange={(event) => {
                  setProduct({ ...product, currentPrice: event.target.value });
                }}
                type="number"
                min="0"
                step="0.01"
                id="currentPrice"
                className=" rounded-lg border-gery flex-1 shadow-sm appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                placeholder="current Price"
                value={product.currentPrice}
              />
            </div>

            {/* ******************* Section ******************* */}
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm uppercase md:w-3/12">Section</h2>
              <select
                onChange={(val) => {
                  setSelectedSection(val.target.value);
                  setProduct({
                    ...product,
                    sectionId: val.target.value,
                  });

                  // setSelectedSection()
                }}
                id="sectionId"
                className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                placeholder="Section ID"
                value={product.sectionId}
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>

            {/* ******************* Category ******************* */}
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm uppercase md:w-3/12">Category</h2>
              {categories.length > 0 ? (
                <select
                  onChange={(val) => {
                    console.log(val.target.value);
                    setProduct({ ...product, categoryId: val.target.value });
                  }}
                  id="categoryId"
                  className=" rounded-lg border-gery flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
                  placeholder="category id"
                  // value={product.categoryId}
                >
                  <option key={-1}>Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              ) : (
                <p>No Items Found</p>
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
                    // setIsToday(event.target.checked);
                    setProduct({
                      ...product,
                      todayOffer: event.target.checked,
                    });
                  }}
                  type="checkbox"
                  checked={product.todayOffer} // Set initial checked state (optional)
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
                    // setIsExclusive(event.target.checked);
                    setProduct({ ...product, exclusive: event.target.checked });
                  }}
                  checked={product.exclusive} // Set initial checked state (optional)
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
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    if (product.rate > 1) {
                      // setRating(rating - 1);
                      setProduct({ ...product, rate: product.rate - 1 });
                    }
                  }}
                >
                  <FaMinusCircle className="w-6 h-6  text-red-500" />
                </button>
                <p className=" text-xl px-3 font-bold">{product.rate}</p>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    if (product.rate < 5) {
                      // setRating(rating + 1);
                      let newRate = product.rate;
                      setProduct({ ...product, rate: product.rate + 1 });
                    }
                  }}
                >
                  <FaPlusCircle className="w-6 h-6 text-green-500" />
                </button>
              </div>
              <div className="w-1/3 flex flex-row items-start px-2 text-gray-500 space-y-4">
                {/* Display the stars */}
                <div className="flex flex-row justify-center items-center">
                  {createStars(product.rate)}
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
      )}
    </>
  );
}
