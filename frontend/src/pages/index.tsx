import { useState } from "react";
import { Register } from "./api/Register";

export default function Home({ token }) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)
  
    return (
      <div
        className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <Register token={token} />
      </div>
    );
  }
  