import Link from "next/link";

export default function SectionsLandscapeWidget({ sections }) {
  return (
    <div className="w-8/12">
      <div className="hidden mx-3 lg:flex lg:flex-row lg:items-start lg:justify-start list-none no-scrollbar overflow-auto">
        {sections.sections &&
          sections.sections.map((section, index) => (
            <li
              key={section.id}
              className=" whitespace-nowrap text-center px-1 lg:px-3 cursor-pointer capitalize lg:text-lg md:text-md text-xs font-medium text-gray-500 hover:scale-105 hover:text-MainBlueColor border-b-2 border-white hover:border-MainBlueColor duration-200 link-underline"
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
    </div>
  );
}
