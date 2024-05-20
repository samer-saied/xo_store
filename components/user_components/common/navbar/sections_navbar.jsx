"use client";
import Link from "next/link";

import useGetSectionsHook from "@/hooks/all_sections_hook";

export default function SectionsLandscapeWidget() {
  const sections = useGetSectionsHook();
  return (
    <>
      <div className="flex flex-row justify-center items-center overflow-scroll ">
        {sections.sections &&
          sections.sections.map((section, index) => (
            <li
              key={section.id}
              className="nav-links px-1 lg:px-4 cursor-pointer capitalize lg:text-lg md:text-md text-xs font-medium text-gray-500 hover:scale-105 hover:text-MainBlueColor border-b-2 border-white hover:border-MainBlueColor duration-200 link-underline"
            >
              <Link
                href={{
                  pathname: "/sections/" + section.id,
                  query: { name: section.title },
                }}
              >
                {section.title}
              </Link>
            </li>
          ))}
      </div>
    </>
  );
}
