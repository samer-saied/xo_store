"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth } from "../../db/firebase_init";

export default function Home() {
  const [currentUser, setcurrentUser] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid: string = user.email ?? "";
        // ...
        setcurrentUser(uid);
      } else {
        // User is signed out
        setcurrentUser("");
        console.log("user is logged out");
      }
    });
  }, []);

  const signOutFunc = () => {
    signOut(auth);
  };

  const signInFunc = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (!user) return; // Check if user is valid
        console.log( user!.user.providerData);
      
      const credential = user as UserCredential;
      const result = credential.user;
      const token = await result?.getIdToken();
      console.log(token);
      setcurrentUser(result?.email ?? "");
    } catch (error) {
      console.log(error);
    }
  };

  //   } catch (error ) {
  //     console.log(error.code)
  //     if (error.code === 'auth/invalid-email') {
  //       alert('Invalid email address.');
  //     } else if (error.code === 'auth/wrong-password') {
  //       alert('Incorrect password.');
  //     } else {
  //      alert('Error signing in:'+ error.toString());
  //     }
  //   }
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
          <code className="font-mono font-bold mx-2">{currentUser}</code>
          {currentUser != "" ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                signOutFunc();
              }}
            >
              sign Out
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                signInFunc();
              }}
            >
              sign In
            </button>
          )}
        </p>
        <input
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
          className="m-2 p-2 text-black border-2"
          type="email"
          name="email"
          id="email"
        />
        <br className="p-2" />
        <input
          onChange={(e) => {
            setpassword(e.currentTarget.value);
          }}
          className="m-2 p-2  text-black  border-2"
          type="password"
          name="password"
          id="password"
        />
        <br></br>
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log("1");
            await signInFunc();
          }}
        >
          Sign In
        </button>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>
    </main>
  );
}
