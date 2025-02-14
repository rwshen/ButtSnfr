import type { HeadFC, PageProps } from "gatsby"
import { Nav } from "../components/Nav"
import React, { useState, useCallback, useEffect } from "react"
import { Dashboard } from "../components/Dashboard"
import { Login } from "../components/Login"


const CratePage: React.FC<PageProps> = () => {

  return (
    <>
    <header>
      <Nav />
    </header>
    <body>
        <form>
            username
            password
        </form>
    </body>
    </>
  )

}

export default CratePage

export const Head: HeadFC = () => <title>ButtSnfr</title>
