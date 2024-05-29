
import SpacerWidget from "@/components/user_components/common/spacer_widget";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import PathWidget from "@/components/user_components/common/path_widget";
import { GetProductsByCategory } from "@/repository/products_repository";
import { TodayDealCardWidget } from "@/components/user_components/homepage/today_deal/today_deal_card_widget";
import NoItemsWidget from "@/components/user_components/common/no_items_widget";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";

export default async function CategoriesPage(context) {
  const products = await GetProductsByCategory(context.params.id);

  const urlPaths = [
    {
      name: "الأقسام الرئيسية",
      link: "/sections/",
    },
    {
      name: context.searchParams.name,
      link: "/sections/" + context.searchParams.link,
    },
  ];

  return (
    <>
      <Sheet>
        <Navbar />
        {/*------------- PATH TEXT ---------------------*/}
        <PathWidget urlPaths={urlPaths} />

        {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
        {products && products.length > 0 && (
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2 md:w-9/12 px-2 mx-auto">
            {products.map((product) => (
              <TodayDealCardWidget key={product.id} product={product} />
            ))}
          </div>
        )}
        {products && products.length == 0 && <NoItemsWidget />}

        <SpacerWidget />
        {/* <FooterComponent /> */}
      </Sheet>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
