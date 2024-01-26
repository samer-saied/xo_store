import { Banner } from '@/models/banner_model'
import Image from 'next/image'
import React from 'react'

const BannerCardWidget = ({id,title, descrption,image, }:Banner) => {
  return (
    <div key={id} className="w-full py-10  flex flex-row justify-center items-center bg-white md:min-h-80">
    {/* //GRAY BACKGROUND AND TEXTS AND IMAGE */}
    {/*  GRAY BACKGROUND */}
    <div className="md:relative bg-gray-100 md:w-9/12 w-11/12 h-full rounded-3xl pt-3 px-5 md:py-8">
      <div className="text-right text-slate-500 text-xl md:text-3xl font-bold pt-8">
        {title}
      </div>
      <div className=" flex flex-row items-end ">
        {/*  TEXTS */}
        <div className=" md:w-1/2 h-full flex flex-col items-start rounded-3xl pb-5">
          <div className=" py-5 text-right text-neutral-400 md:text-lg text-sm">
          {descrption}
          </div>
          <button
            className="text-white  bg-MainBlueColor shadow-sm rounded-md py-3 px-5 hover:opacity-90 hover:shadow-md"
            type="submit"
          >
            اكتشف الان
          </button>
        </div>
        {/* //IMAGE BANNER */}
        <div className=" md:absolute md:-left-16 md:bottom-0 flex flex-col justify-end drop-shadow-md ">
          <Image
            className=" object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
            src={image}
            alt={title}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default BannerCardWidget