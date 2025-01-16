import { getOAuthToken } from "../api/usps_oauth";
import { Register } from "../api/Register";
import { Nav } from "../components/Nav";
import React, {useState} from "react";

export default async function Index() {
  const [loggedIn, setLoggedIn] = useState<boolean>();
  // const {access_token} = await getOAuthToken();
  // console.log(access_token)
  return (
    <>
      <header>
        <Nav />
      </header>
      <div
        className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        
      </div>
      </>
  );
}

