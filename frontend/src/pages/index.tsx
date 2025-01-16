import { getOAuthToken } from "../api/usps_oauth";
import { Dashboard } from "../components/Dashboard";
import { Nav } from "../components/Nav";
import React, {useState, useEffect} from "react";

export default async function Index() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [idToken, setIdToken] = useState<string | null>(localStorage.getItem('id_token'))
  // const {access_token} = await getOAuthToken();
  // console.log(access_token)
  useEffect(() => {
    if(idToken) {
      setLoggedIn(true)
    } setLoggedIn(false)
  }, [])

  return (
    <>
      <header>
        <Nav />
      </header>
      <div
        className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
       {loggedIn && <Dashboard />} 
      </div>
      </>
  );
}

