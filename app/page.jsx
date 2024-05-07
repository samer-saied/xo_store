import BannerComponent from "@/components/user_components/homepage/banner/banner_component";
import SectionMoreWidget from "@/components/user_components/homepage/more_products/section_more_component";
import MostSalesComponent from "@/components/user_components/homepage/most_sales/most_sales_component";
import TodayDealComponent from "@/components/user_components/homepage/today_deal/today_deal_component";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import SpacerWidget from "@/components/user_components/common/spacer_widget";
import DiscountGamesCardsComponent from "@/components/user_components/homepage/discounts/discount_games_cards_component";
import SectionsCarouselComponent from "@/components/user_components/homepage/sections_cards/sections_carousel_component";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import TopBarComponent from "@/components/user_components/homepage/topbar/topbar_component";

export default function Home() {
  return (
    <>
      <Sheet>
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
      </Sheet>
    </>
  );
}
