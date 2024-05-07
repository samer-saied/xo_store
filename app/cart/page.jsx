import NoItemComp from "@/components/user_components/common/no_item";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import CurrencySymbolComp from "@/components/user_components/common/currency_symbol";
import PathWidget from "@/components/user_components/common/path_widget";
import CartCardWidget from "../../components/user_components/cart/cart_card_widget";
import RelatedProductsWidget from "@/components/user_components/related_products/related_products_widget";
import { CiShoppingBasket } from "react-icons/ci";
import { useRouter } from "next/navigation";
// import { useCart } from "cart";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import TopBarComponent from "@/components/user_components/homepage/topbar/topbar_component";

const urlPaths = [{ name: "سلة المشتريات", link: "/cart" }];

export default function CartPage() {
  const router = useRouter();

  // const {
  //   addToCart,
  //   cartItems,
  //   clearCart,
  //   decreaseItem,
  //   toggleCart,
  //   isCartOpen,
  // } = useCart();

  // const getTotalItems = () => {
  //   let total = 0;
  //   let sale = 0;
  //   cartItems.map((cartItems) => {
  //     total += cartItems.currentPrice;
  //     sale += cartItems.prePrice - cartItems.currentPrice;
  //     console.log(total);
  //   });
  //   return { total: total, sale: sale, totalWithoutSale: total + sale };
  // };

  // useEffect(() => {
  //   if (currentUser != null) {
  //     GetCurrentUserCart(currentUser).then((cart) => {
  //       cartItems(cart);
  //       let tempProducts = [];
  //       if (cart && cart["products"].length > 0) {
  //         for (let index = 0; index < cart["products"].length; index++) {
  //           GetOneProduct(cart["products"][index]).then((data) => {
  //             tempProducts.push(data);
  //           });
  //         }
  //       }
  //       setProducts(tempProducts);
  //       setLoading(false);
  //     });
  //   } else {
  //     onAuthStateChanged(auth, async (user) => {
  //       if (user) {
  //         setcurrentUser(user.uid);
  //         let cartData = await GetCurrentUserCart(user.uid);
  //         setCart(cartData);
  //         let tempProducts = [];
  //         if (cartData && cartData["products"].length > 0) {
  //           for (let index = 0; index < cartData["products"].length; index++) {
  //             let product = await GetOneProduct(cartData["products"][index]);
  //             tempProducts.push(product);
  //           }
  //         }
  //         setProducts(tempProducts);
  //         setLoading(false);
  //       } else {
  //         router.push("/login");
  //       }
  //     });
  //   }
  // }, []);

  return (
    <>
      <Sheet>
        <TopBarComponent />
        <Navbar />
        {
          <>
            <PathWidget urlPaths={urlPaths} />

            {/*----------------- PAGE Start --------------------*/}
            <div className=" xl:w-3/4 md:w-10/12 mx-auto">
              <div className="flex flex-col">
                {/*----------------- PAGE TITLE --------------------*/}
                <div className="flex flex-row justify-start items-center pt-5 px-3">
                  <CiShoppingBasket
                    size={36}
                    className=" mx-1 font-bold text-MainBlueColor"
                  />

                  <h1 className="text-center text-MainBlueColor text-2xl font-bold">
                    سلة المشتريات
                  </h1>
                </div>
                {/*----------------- PAGE CONTENT --------------------*/}
            
              </div>
            </div>

            {/* {cartItems.length > 0 && <RelatedProductsWidget />} */}
            <FooterComponent />
          </>
        }
      </Sheet>
    </>
  );
}
