"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
// import React, { useState } from "react";

function Navbar() {
  const { data: session } = useSession();

  //   const [open, setOpen] = useState(false);
  //   const [fix, setFix] = useState(false);
  //   const [isSmallScreen, setIsSmallScreen] = useState(false);

  //   let [isSignIn, setIsSignin] = useState(false);
  //   const isSignIn = true;

  //   function setFixed() {
  //     if (window.scrollY >= 1) {
  //       setFix(true);
  //     } else {
  //       setFix(false);
  //     }
  //   }

  // Function to update the screen size
  //   function handleScreenSize() {
  //     setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
  //   }

  // Listen for screen size changes
  //   useEffect(() => {
  //     handleScreenSize(); // Check initial screen size
  //     window.addEventListener("resize", handleScreenSize);
  //     return () => {
  //       window.removeEventListener("resize", handleScreenSize);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     dispatch(fetchData(userId));
  //   }, [dispatch, userId]);

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       window.addEventListener("scroll", setFixed);
  //     }
  //     return () => {
  //       if (typeof window !== "undefined") {
  //         window.removeEventListener("scroll", setFixed);
  //       }
  //     };
  //   }, []);
  // console.log(SignedIn )

  return (
    <div className="my-5 mx-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl ">
            <Link href="/"> My Resume</Link>
          </h1>
        </div>
        <div>
          {session && session.user && session.user.email ? (
            <ul className="flex gap-3">
              <li>
                <Link href="dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="Profile">Profile</Link>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-3">
              <li>
                {" "}
                <Link href="Signup">Register</Link>
              </li>
              <li>
                <Link href="Signin">Sign In </Link>{" "}
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
