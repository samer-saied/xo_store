
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import TopBarComponent from "@/components/user_components/homepage/topbar/topbar_component";
import CartMainComp from "../../components/user_components/cart/cart_main_comp";
import { AuthContextProvider } from "@/hooks/AuthContext";


export default function CartPage() {

  return (
    <>
      <AuthContextProvider>
        <Sheet>
          <TopBarComponent />
          <Navbar />
          <CartMainComp />
        </Sheet>
      </AuthContextProvider>
    </>
  );
}
