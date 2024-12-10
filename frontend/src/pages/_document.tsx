'use client'

import { Html, Head, Main, NextScript } from "next/document";
import Home from ".";
import React from 'react';
import { Nav } from "@/components/Nav";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Nav />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <Home />
      </body>
    </Html>
  );
}
