'use client'

import { Html, Head, Main, NextScript } from "next/document";
import React from 'react';
import { Nav } from "@/components/Nav";
import Home from ".";
import { getStaticProps } from "./api/usps_oauth";


export default async function Document() {
  return (
    <Html lang="en">
      <Head>
        <Nav />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <Home token={(await getStaticProps()).props.token} />
      </body>
    </Html>
  );
}
