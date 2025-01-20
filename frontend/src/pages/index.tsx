import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Nav } from "../components/Nav"
import { useState } from "react"
import { Dashboard } from "../components/Dashboard"
import { Login } from "../components/Login"


const IndexPage: React.FC<PageProps> = () => {
  const [loggedIn, setLoggedIn] = useState<string | null>(localStorage.getItem('id_token'))
  console.log(loggedIn)
  
  return (
    <>
    <header>
      <Nav />
    </header>
    <body>
    {loggedIn && <Dashboard />}
    {!loggedIn && <Login />}
    </body>
    </>
  )

}

export default IndexPage

export const Head: HeadFC = () => <title>ButtSnfr</title>
