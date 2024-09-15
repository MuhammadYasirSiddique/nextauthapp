// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";
// import Image from "next/image";

// export default function Component() {
//   const { data: session } = useSession();
//   console.log(session);

//   if (session && session.user && session.user.email) {
//     return (
//       <>
//         {session.user.name} <br />
//         Signed in as {session.user.email} <br />
//         <Image
//           height={50}
//           width={50}
//           src={session.user.image || "/fallback-image.png"} // Provide a fallback image
//           alt="Profile Picture"
//         />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }

//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn("github")}>
//         Sign in using Github
//       </button>{" "}
//       <br />
//       <button onClick={() => signIn("google")}>
//         Sign in using Google
//       </button>{" "}
//       <br />
//     </>
//   );
// }

// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";
// import Image from "next/image";

// export default function Component() {
//   const { data: session } = useSession();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
//         {session && session.user && session.user.email ? (
//           <>
//             <div className="mb-4">
//               <Image
//                 className="rounded-full border-2 border-blue-500"
//                 height={100}
//                 width={100}
//                 src={session.user.image || "/fallback-image.png"}
//                 alt="Profile Picture"
//               />
//             </div>
//             <h1 className="text-2xl font-bold mb-2">{session.user.name}</h1>
//             <p className="text-gray-700 mb-4">
//               Signed in as {session.user.email}
//             </p>
//             <button
//               onClick={() => signOut()}
//               className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               Sign out
//             </button>
//           </>
//         ) : (
//           <>
//             <p className="text-gray-700 mb-4">Not signed in</p>
//             <div className="space-y-2">
//               <button
//                 onClick={() => signIn("github")}
//                 className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
//               >
//                 Sign in using GitHub
//               </button>
//               <button
//                 onClick={() => signIn("google")}
//                 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//               >
//                 Sign in using Google
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {session && session.user && session.user.email ? (
          <>
            <div className="mb-4 text-center">
              <Image
                className="rounded-full border-2 border-blue-500"
                height={100}
                width={100}
                src={session.user.image || "/fallback-image.png"}
                alt="Profile Picture"
              />
              <h1 className="text-2xl font-bold mb-2">{session.user.name}</h1>
              <p className="text-gray-700 mb-4">
                Signed in as {session.user.email}
              </p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Sign out
              </button>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Sign in with Email and Password */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">Sign in</h2>
              <form className="w-full">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-left font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-left font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="flex justify-between items-center mb-4">
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot Your Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-2 px-4 w-full rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Login
                </button>
              </form>
              <p className="mt-4 text-sm">
                Don’t have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Create One!
                </a>
              </p>
            </div>

            {/* Social Sign In */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">Sign in with</h2>
              <div className="space-y-2 w-full">
                <button
                  onClick={() => signIn("github")}
                  className="bg-gray-800 text-white py-2 px-4 w-full rounded hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Github
                </button>
                <button
                  onClick={() => signIn("linkedin")}
                  className="bg-cyan-700 text-white py-2 px-4 w-full rounded hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Linkedin
                </button>
                <button
                  onClick={() => signIn("google")}
                  className="bg-white border border-black text-black py-2 px-4 w-full rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Google
                </button>
                <button
                  onClick={() => signIn("facebook")}
                  className="bg-blue-600 text-white py-2 px-4 w-full rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Facebook
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
