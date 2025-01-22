import type { HeadFC, PageProps } from "gatsby"
import { Nav } from "../components/Nav"
import React, { useState, useCallback, useEffect } from "react"
import { Dashboard } from "../components/Dashboard"
import { Login } from "../components/Login"


const IndexPage: React.FC<PageProps> = () => {
  const [loggedIn, setLoggedIn] = useState<string | null>(localStorage.getItem('id_token'))

  useCallback(() => {
    const auth0: any = {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_API_SECRET
    };
    (window.location.hash, (err: any, authResult: { accessToken: string | null; idToken: string | null; idTokenPayload: any } | null) => {
      if (err) {
        return console.log(err);
      }
      if (
        authResult !== null &&
        authResult.accessToken !== null &&
        authResult.idToken !== null
      ) {
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem(
          "profile",
          JSON.stringify(authResult.idTokenPayload)
        );
        window.location = window.location.href.substr(
          0,
          window.location.href.indexOf("#")
        ) as unknown as Location;
      }
    });
  },[])
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
