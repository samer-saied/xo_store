"use client";

import SpacerWidget from "@/components/user_components/common/spacer_widget";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
// import TopBarComponent from "@/components/user_components/homepage/topbar/topbar_component";

// import Navbar from "@/components/user_components/common/Navbar";
import { useEffect, useState, useRef } from "react";
import { GetAllSections } from "@/repository/sections_repository";
import SectionCardWidget from "@/components/user_components/homepage/sections_cards/section_card_widget";
import PathWidget from "@/components/user_components/common/path_widget";
import LoadingPage from "@/components/user_components/common/loading";
// import MobileMainNavBar from "@/components/user_components/common/mobile_main_navBar";

export default function SectionsPage() {
  // const [loading, setLoading] = useState(true);
  const [sections, setsections] = useState([]);
  const fetchDataRef = useRef(false);

  useEffect(() => {
    if (!fetchDataRef.current) {
      GetAllSections().then((sections) => {
        setsections(sections);
      });
      fetchDataRef.current = true;
    }
  }, []);

  const urlPaths = [{ name: "الأقسام الرئيسية", link: "/sections/" }];

  return (
    <>
      <SpacerWidget />

      {/*------------- PATH TEXT ---------------------*/}
      <PathWidget urlPaths={urlPaths} />

      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      {sections.length > 0 ? (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-2 gap-2 md:w-9/12 md:px-5 w-11/12 mx-auto mt-5">
          {sections.map((section) => (
            <SectionCardWidget
              key={section.id}
              id={section.id}
              icon={section.icon}
              title={section.title}
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
