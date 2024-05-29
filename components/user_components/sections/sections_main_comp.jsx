import React from "react";
import LoadingPage from "@/components/user_components/common/loading";
import NoItemsWidget from "@/components/user_components/common/no_items_widget";
import SectionCardWidget from "@/components/user_components/homepage/sections_cards/section_card_widget";
import { GetAllSections } from "@/repository/sections_repository";

const SectionsMainComp = async () => {
  const sections = await GetAllSections();

  return (
    <>
      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      {
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-2 gap-2 md:w-9/12 md:px-5 w-11/12 mx-auto mt-5">
          {sections.map((section) => (
            <SectionCardWidget
              key={section.id}
              id={section.id}
              icon={section.icon}
              title={section.title}
              primaryColor={section.primaryColor}
              secandColor={section.secandColor}
              date={section.date}
            />
          ))}
        </div>
      }
      {sections.length == 0 && <NoItemsWidget infoMsg={"لا يوجد اقسام"} />}
    </>
  );
};

export default SectionsMainComp;
