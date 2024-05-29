import { Sheet } from "@/components/ui/sheet";
import NewLoginFormWidget from "@/components/user_components/auth/new_login_form";
import Navbar from "@/components/user_components/common/navbar/Navbar";

const SignInPage = () => {
  return (
    <>
      <Sheet>
        <Navbar />
        <NewLoginFormWidget />
      </Sheet>
    </>
  );
};

export default SignInPage;
