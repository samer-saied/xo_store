"use client";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import React from "react";
import BannerComponent from "@/components/homepage/banner/banner_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";
import CategriesCarouselComponent from "@/components/homepage/categries_cards/categries_carousel_component";
import SectionMoreWidget from "@/components/homepage/more_products/section_more_component";
import GamesCardsComponent from "@/components/homepage/game_cards/games_cards_component";
import MostSalesComponent from "@/components/homepage/most_sales/most_sales_component";
import SpeedSaleComponent from "@/components/homepage/speed_sale/speed_sale_component";
import FooterComponent from "@/components/homepage/footer/footer_component";
import SpacerWidget from "@/components/common/spacer_widget";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <TopBarComponent />
      <BannerComponent />
      <CategriesCarouselComponent />
      <SpacerWidget />
      <GamesCardsComponent />
      <SpacerWidget />
      <MostSalesComponent />
      <SpacerWidget />
      <SpeedSaleComponent />
      <SpacerWidget />
      <SectionMoreWidget />
      <SpacerWidget />
      <FooterComponent />
    </>
  );
}

async function getData() {
  setTimeout(async () => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }, 100000);
}
