import localFont from "next/font/local";
import React, { useCallback, useEffect, useState } from "react";
import Main from "./main";
import { Register } from "../components/Register";
import { LoginForm } from "@/components/Login";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
     <Register />
     <LoginForm />
    </div>
  );
}
