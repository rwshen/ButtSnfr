import type { HeadFC, PageProps } from "gatsby"
import { Nav } from "../components/Nav"
import React, { useState, useCallback, useEffect } from "react"
import { Dashboard } from "../components/Dashboard"
import { Login } from "../components/Login"
import { BarkPark } from "../components/BarkPark"


const BarkParkPage: React.FC<PageProps> = () => {

  return (
    <>
    <header>
      <Nav />
    </header>
    <body>
        <BarkPark />
    </body>
    </>
  )

}

export default BarkParkPage

export const Head: HeadFC = () => <title>ButtSnfr</title>
