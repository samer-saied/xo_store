"use client";

// config.autoAddCss = false;

import BannerComponent from "@/components/homepage/banner/banner_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";
import SectionMoreWidget from "@/components/homepage/more_products/section_more_component";
import MostSalesComponent from "@/components/homepage/most_sales/most_sales_component";
import SpeedSaleComponent from "@/components/homepage/speed_sale/speed_sale_component";
import FooterComponent from "@/components/homepage/footer/footer_component";
import SpacerWidget from "@/components/common/spacer_widget";
import Navbar from "@/components/common/Navbar";
import DiscountGamesCardsComponent from "@/components/homepage/game_cards/discount_games_cards_component";
import SectionsCarouselComponent from "@/components/homepage/sections_cards/sections_carousel_component";
import Head from "next/head";
import { GetAllBanners } from "@/repository/banners_repository";
import { Banner } from "@/models/banner_model";

export default async function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
      </Head>

      <TopBarComponent />
      <Navbar />

      {/* --------------- Done --------------- */}
      <BannerComponent />

      {/* --------------- Done --------------- */}
      <SectionsCarouselComponent />
      <SpacerWidget />

      {/* --------------- Done --------------- */}
      {/* <DiscountGamesCardsComponent />
      <SpacerWidget /> */}

      {/* <MostSalesComponent /> */}
      <SpacerWidget />
      <SpeedSaleComponent />
      <SpacerWidget />
      <SectionMoreWidget />
      <SpacerWidget />
      <FooterComponent />
    </>
  );
}
