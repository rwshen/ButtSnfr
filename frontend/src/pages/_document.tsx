'use client'

import Document, { Html, Head, Main, NextScript } from "next/document";
import React from 'react';
import { Nav } from "@/components/Nav";
import { getStaticProps } from "./api/usps_oauth";
import { Register } from "./api/Register";


export default class MyDocument extends Document {
  render() {
    return (
    <Html lang="en">
      <Head>
        <Nav />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx)
 return {
  ...initialProps,

 }
}
