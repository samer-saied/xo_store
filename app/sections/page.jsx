"use client";

import SpacerWidget from "@/components/common/spacer_widget";
import FooterComponent from "@/components/homepage/footer/footer_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";

import Navbar from "@/components/common/Navbar";
import { useEffect, useState } from "react";
import { GetAllSections } from "@/repository/sections_repository";
import SectionCardWidget from "@/components/homepage/sections_cards/section_card_widget";
import PathWidget from "@/components/common/path_widget";



export default function SectionsPage({ params }) {
  const [sections, setsections] = useState([]);

  useEffect(() => {
    GetAllSections().then((sections) => setsections(sections));
  }, []);

  const urlPaths = { name: "الأقسام الرئيسية", link: "/products/" + "product.id" };

  return (
    <>
      <TopBarComponent />
      <Navbar />
      <SpacerWidget />

      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget urlPaths={urlPaths} />

      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 md:container mx-auto px-5">
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

      <SpacerWidget />
      <FooterComponent />
    </>
  );
  //<div>My Post: {params.id}</div>;
}
