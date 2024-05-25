// "use client";
// import { CldUploadWidget } from "next-cloudinary";
// import Image from "next/image";
// import { GoUpload } from "react-icons/go";

// // By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
// export default function CloudImageComp({ getImage, setImage }) {
//   const [ImageUrl, setImageUrl] = useState(getImage)
//   return (
//     <>
//       <Image
//         width={256}
//         height={256}
//         alt="icon"
//         src={getImage ?? "/assets/no-image.png"}
//         className=" md:w-1/4 object-contain rounded-md h-64 border-2 m-3"
//       />

//       <CldUploadWidget
//         onSuccess={(results) => {
//           setImage("image", results.info.secure_url);
//           setImageUrl(results.info.secure_url)
//         }}
//         uploadPreset="nbx2boqc"
//       >
//         {({ open }) => {
//           return (
//             <button
//               className={
//                 " w-1/4 h-full bg-MainBlueColor px-5 py-3 rounded-md text-white"
//               }
//               onClick={() => open()}
//             >
//               <GoUpload className=" inline font-black" />
//               <span className=" inline px-1 font-bold">Upload an Image</span>
//             </button>
//           );
//         }}
//       </CldUploadWidget>
//     </>
//   );
// }
