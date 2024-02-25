"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../db/firebase_init";
import FooterComponent from "@/components/user_components/homepage/footer/footer_component";
import Navbar from "@/components/user_components/common/Navbar";
import LoginFormWidget from "@/components/user_components/auth/login_form_widget";

// import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

const SignInPage = () => {
  // const [email, setEmail] = useState("");
  // const [passwordOne, setPasswordOne] = useState("");
  // const [passwordTwo, setPasswordTwo] = useState("");
  // const router = useRouter();
  // const [error, setError] = useState(null);

  // const onSubmitFunc = (event: any) => {
  //   event.preventDefault();
  //   setError(null);
  //   //check if passwords match. If they do, create user in Firebase
  //   // and redirect to your logged in page.
  //   if (passwordOne === passwordTwo)
  //     createUserWithEmailAndPassword(auth, email, passwordOne)
  //       .then((authUser) => {
  //         console.log("Success. The user is created in Firebase");
  //         router.push("/");
  //       })
  //       .catch((error) => {
  //         // An error occurred. Set error message to be displayed to user
  //         setError(error.message);
  //       });
  //   // setError("Password do not match")
  //   else event.preventDefault();
  // };
  

  return (
    <>
      <Navbar />
      <LoginFormWidget />
      <FooterComponent />
    </>
   
  );
};

export default SignInPage;
