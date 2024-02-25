"use client";

import TableComp from "../table_comp";
import { useEffect, useState } from "react";
import { GetAllSections } from "@/repository/sections_repository";

export default function AdminSectionsComp() {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState(null);

  useEffect(() => {
    GetAllSections().then((sections) => {
      setSections(sections);
      setLoading(false);
    });
  }, []);

  return (
    <TableComp
      data={{
        tableTitle: "Sections",
        tableColumns: ["title", "created", "state"],
        tableData: sections,
      }}
    />
  );
}
