import { Html, Head } from "next/document";
import Home from ".";
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Home />
      </body>
    </Html>
  );
}
