"use client";
import React from "react";
import LoadingPage from "@/components/user_components/common/loading";
import NoItemsWidget from "@/components/user_components/common/no_items_widget";
import SectionCardWidget from "@/components/user_components/homepage/sections_cards/section_card_widget";
import useGetSections from "@/hooks/all_sections_hook";

const SectionsMainComp = () => {
  const sections = useGetSections();

  return (
    <>
      {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
      {
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-2 gap-2 md:w-9/12 md:px-5 w-11/12 mx-auto mt-5">
          {!sections.isLoading &&
            sections.sections &&
            sections.sections.map((section) => (
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
      {sections.isLoading && <LoadingPage />}
      {!sections.isLoading && sections.sections == null && (
        <NoItemsWidget infoMsg={"لا يوجد اقسام"} />
      )}
      {!sections.isLoading && !sections.sections && sections.error && (
        <NoItemsWidget infoMsg={sections.error} />
      )}
    </>
  );
};

export default SectionsMainComp;
