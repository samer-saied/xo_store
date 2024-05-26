import useGetSections from "@/hooks/all_sections_hook";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";

export default function MobileSectionsNavBar({ sections }) {
  return (
    <ul className="flex flex-col justify-start items-start  text-MainBlueColor">
      {/*--------------- DYNAMIC MENU - SECTIONS -------------------*/}
      {sections.sections &&
        sections.sections.map((section) => ( 
          <li
            key={section.id}
            className={`px-4 cursor-pointer capitalize  py-2 text-lg  hover:scale-105 hover:font-bold`}
          >
            <Link
              className="flex flex-row justify-center items-center"
              href={{
                pathname: "/sections/" + section.id,
                query: { name: section.title },
              }}
            >
              <CiBookmark size={25} className=" text-MainBlueColor mx-2" />
              <p> {section.title}</p>
            </Link>
          </li>
        ))}
      {/*--------------- DIVIDER -------------------*/}

      <span className=" mx-10 w-auto h-1 my-5 px-10 bg-MainBlueColor text-MainBlueColor " />
    </ul>
  );
}
