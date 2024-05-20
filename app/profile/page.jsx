"use client";
import { Sheet } from "@/components/ui/sheet";
import Navbar from "@/components/user_components/common/navbar/Navbar";
import { AuthContextProvider } from "../../hooks/AuthContext";
import ProfilePageComp from "../../components/user_components/profile/profile_page";

function ProfilePage() {
  return (
    <>
      <Sheet>
        <Navbar />
        <AuthContextProvider>
          <ProfilePageComp />
        </AuthContextProvider>
      </Sheet>
    </>
  );
}
export default ProfilePage;
