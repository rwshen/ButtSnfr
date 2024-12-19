import localFont from "next/font/local";
import React, { useCallback, useEffect, useState } from "react";
import { Register } from "./api/Register";

const getOAuthToken = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "grant_type": "client_credentials",
      "client_id": `${process.env.USPS_CLIENT_ID}`,
      "client_secret": `${process.env.USPS_CLIENT_SECRET}`,
    }),
  };

  return await fetch(`https://api.usps.com/oauth2/v3/token`, requestOptions)
    .then(response => {
      if (!response.ok) {
        // Crucial: Get the error details from the response body.
        return response
      }
    })
    .then(async data => {
      // Handle successful response
      return await data.json()
    })
    .catch(error => {
      console.error("OAuth Request Error:", error);
    });
}

export async function getStaticProps() {
  const { access_token } = await getOAuthToken();
  return {
    props: {
      token: access_token,
    },
  };
}


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

export default function Home({ token }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Register token={token} />
    </div>
  );
}
