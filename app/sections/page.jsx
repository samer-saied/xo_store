"use client";

import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";

import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import { GetAllSections } from "@/repository/sections_repository";
import SectionCardWidget from "@/components/homepage/sections_cards/section_card_widget";
import PathWidget from "@/components/common/path_widget";
import LoadingPage from "@/components/common/loading";

export default function SectionsPage({ params }) {
  const [loading, setLoading] = useState(true);
  const [sections, setsections] = useState([]);

  useEffect(() => {
    GetAllSections().then((sections) => {
      setsections(sections);
      setLoading(false);
    });
  }, []);

  const urlPaths = [{ name: "الأقسام الرئيسية", link: "/sections/" }];

  return (
    <>
      <TopBarComponent />
      <Navbar />
      <SpacerWidget />

      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget urlPaths={urlPaths} />

      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      {!loading && sections.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2 md:container mx-auto px-5">
          {sections.map((section) => (
            <SectionCardWidget
              key={section.id}
              id={section.id}
              icon={section.icon}
              name={section.name}
              primaryColor={section.primaryColor}
              secandColor={section.secandColor}
            />
          ))}
        </div>
      ) : (
        <LoadingPage />
      )}

      <SpacerWidget />
      <FooterComponent />
    </>
  );
}
