"use client";

// config.autoAddCss = false;

import BannerComponent from "@/components/homepage/banner/banner_component";
import TopBarComponent from "@/components/homepage/topbar/topbar_component";
import SectionMoreWidget from "@/components/homepage/more_products/section_more_component";
import MostSalesComponent from "@/components/homepage/most_sales/most_sales_component";
import TodayDealComponent from "@/components/homepage/today_deal/today_deal_component";
import FooterComponent from "@/components/homepage/footer/footer_component";
import SpacerWidget from "@/components/common/spacer_widget";
import Navbar from "@/components/common/Navbar";
import DiscountGamesCardsComponent from "@/components/homepage/discounts/discount_games_cards_component";
import SectionsCarouselComponent from "@/components/homepage/sections_cards/sections_carousel_component";
import Head from "next/head";

export default function Home() {
  return (
    // <animated.div       onLoad={handleClick}
    // style={springs}>
    <>
      {/* <Head>
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
      </Head> */}

      <TopBarComponent />
      <Navbar />

      {/* --------------- Banners Models --------------- */}
      <BannerComponent />

      {/* --------------- Sections Models --------------- */}
      <SectionsCarouselComponent />
      <SpacerWidget />

      {/* --------------- Products Models - Cards  --------------- */}
      <DiscountGamesCardsComponent />
      <SpacerWidget />

      {/* --------------- Categories Models - Games  --------------- */}
      <MostSalesComponent />
      <SpacerWidget />

      <TodayDealComponent />
      <SpacerWidget />
      <SectionMoreWidget />
      <SpacerWidget />
      <FooterComponent />
    </>
  );
}
