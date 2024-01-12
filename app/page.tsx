"use client";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import React from "react";
import BannerComponent from "@/components/homepage/banner/banner_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";
import CategriesCarouselComponent from "@/components/homepage/categries_cards/categries_carousel_component";
import SectionMoreWidget from "@/components/homepage/more_products/section_more_component";
import GamesCardsComponent from "@/components/homepage/game_cards/games_cards_component";
import MostSalesComponent from "@/components/homepage/most_sales/most_sales_component";
import SpeedSaleComponent from "@/components/homepage/speed_sale/speed_sale_component";
export default function Home() {

  return (
    <>
      <TopBarComponent />
      <BannerComponent />
      <CategriesCarouselComponent />
      <div className="h-6"></div>
      <GamesCardsComponent />
      <div className="h-6"></div>
      <MostSalesComponent />
      <div className="h-8"></div>
      <SpeedSaleComponent />
      <div className="h-8"></div>

      <SectionMoreWidget />
    </>
  );
}
