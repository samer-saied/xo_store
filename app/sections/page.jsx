import SpacerWidget from "@/components/user_components/common/spacer_widget";
import PathWidget from "@/components/user_components/common/path_widget";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import SectionsMainComp from "@/components/user_components/sections/sections_main_comp";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";

export default function SectionsPage() {
  const urlPaths = [{ name: "الأقسام الرئيسية", link: "/sections/" }];

  return (
    <>
      <Sheet>
        <Navbar />
        <SpacerWidget />
        {/*------------- PATH TEXT ---------------------*/}
        <PathWidget urlPaths={urlPaths} />
        <SectionsMainComp />
        <SpacerWidget />
        <FooterComponent />
      </Sheet>
    </>
  );
}
