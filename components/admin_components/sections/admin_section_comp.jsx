"use client";

import { GetAllSections } from "@/repository/sections_repository";
import TableComp from "../table_comp";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSectionComp({ data }) {
  console.log(data);
  const [loading, setLoading] = useState(true);
  const [sections, setsections] = useState(null);

  const router = useRouter();

  useEffect(() => {
    GetAllSections().then((sections) => {
      setsections(sections);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/* //////////////////// Page Title //////////////////// */}
      <div className=" container max-w-5xl px-4 mx-auto sm:px-8 flex flex-row justify-between pt-5">
        <h2 className="text-2xl md:text-4xl leading-tight">{"Sections"}</h2>
        <button
          onClick={() => {
            data["setIndex"]({ id: 21, navId: "samer" });
          }}
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-MainViridianColor rounded-lg shadow-md hover:bg-MainBlueColor-700 focus:outline-none focus:ring-2 focus:ring-MainBlueColor-500 focus:ring-offset-2 focus:ring-offset-MainBlueColor-200"
          type="submit"
        >
          Add
        </button>
      </div>
      <TableComp
        tableData={{
          tableTitle: "sections",
          tableHeaders: ["title", "created at", "state"],
          tableColumns: ["title", "date", "status"],
          data: sections,
        }}
        addFunc={data["setIndex"]}
      />
    </>
  );
}
