import SpacerWidget from "@/components/user_components/common/spacer_widget";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import PathWidget from "@/components/user_components/common/path_widget";
import { GetTodayDealProducts } from "@/repository/products_repository";
// import { TodayDealCardWidget } from "@/components/user_components/homepage/today_deal/today_deal_card_widget";
import NoItemsWidget from "@/components/user_components/common/no_items_widget";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import { Sheet } from "@/components/ui/sheet";
import { TodayDealCardWidget } from "@/components/user_components/homepage/today_deal/today_deal_card_widget";

export default async function TodayOffersPage() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const TodayProducts = await GetTodayDealProducts();
  // useEffect(() => {
  //   GetTodayDealProducts().then((products) => {
  //     setProducts(products);
  //     setLoading(false);
  //   });
  // }, []);

  const urlPaths = [
    {
      name: "صفقه اليوم",
      link: "/today",
    },
  ];

  return (
    <>
      <Sheet>
        <Navbar />

        <SpacerWidget />

        {/*------------- PATH TEXT ---------------------*/}
        <PathWidget urlPaths={urlPaths} />

        {/* /////////////////   GRID SECTIONS CARDS     ///////////////////////// */}
        {TodayProducts.length > 0 && (
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2 md:w-9/12 px-2 mx-auto">
            {TodayProducts.map((product) => (
              <TodayDealCardWidget key={product.id} product={product} />
            ))}
          </div>
        )}
        {TodayProducts.length == 0 && <NoItemsWidget />}

        <SpacerWidget />
        <FooterComponent />
      </Sheet>
    </>
  );
  //<div>My Post: {params.id}</div>;
}
