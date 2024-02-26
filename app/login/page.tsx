"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../db/firebase_init";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import Navbar from "@/components/user_components/common/Navbar";
import NewLoginFormWidget from "@/components/user_components/auth/new_login_form"

const SignInPage = () => {
  

  return (
    <>
      <Navbar />
      <NewLoginFormWidget />
      <FooterComponent />
    </>
   
  );
};

export default SignInPage;
