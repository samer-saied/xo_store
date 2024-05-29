import SpacerWidget from "@/components/user_components/common/spacer_widget";
import PathWidget from "@/components/user_components/common/path_widget";
import GameCardWidget from "@/components/user_components/homepage/most_sales/game_card_widget";
import NoItemsWidget from "@/components/user_components/common/no_items_widget";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import { GetCategoriesBySections } from "@/repository/category_repository";

export default async function SpecificSectionsPage(context) {
  const urls = [
    {
      name: "الأقسام الرئيسية",
      link: "/sections/",
    },
    {
      name: context.searchParams.section,
      link: context.params.id + "?section=" + context.searchParams.section,
    },
  ];

  const categories = await GetCategoriesBySections(context.params.id);

  return (
    <>
      <Sheet>
        <Navbar />
        <SpacerWidget />

        {/*------------- PATH TEXT ---------------------*/}
        <PathWidget urlPaths={urls} />

        {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
        {categories.length == 0 && <NoItemsWidget infoMsg={"لا يوجد فئات"} />}

        {categories && categories.length > 0 && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2 md:container px-5 md:w-9/12 mx-auto md:px-5 w-full">
            {categories.map((category) => (
              <GameCardWidget
                key={category.id}
                category={JSON.parse(JSON.stringify(category))}
                urls={JSON.parse(JSON.stringify(urls))}
              />
            ))}
          </div>
        )}

        <SpacerWidget />
        {/* <FooterComponent /> */}
      </Sheet>
    </>
  );
}
