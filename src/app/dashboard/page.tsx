// "use client";
// import React from "react";
// import Image from "next/image";
// import { signOut, useSession } from "next-auth/react";

// function Dashboard() {
//   const { data: session } = useSession();

//   return (
//     <>
//       {session && session.user && session.user.email ? (
//         <div className="text-center flex flex-col items-center justify-center">
//           <Image
//             className="rounded-full border-2 border-blue-500"
//             height={100}
//             width={100}
//             src={session.user.image || "/fallback-image.png"}
//             alt="Profile Picture"
//           />
//           <h1 className="text-2xl font-bold mb-2">{session.user.name}</h1>
//           <p className="text-gray-700 mb-4">
//             You are already signed in as {session.user.email}
//           </p>
//           <button
//             onClick={() => signOut()}
//             className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//           >
//             Sign out
//           </button>
//         </div>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }

// export default Dashboard;
"use client";
import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

function Dashboard() {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // Redirect to the home page after sign out
  };

  return (
    <>
      {session && session.user && session.user.email ? (
        <div className="text-center flex flex-col items-center justify-center">
          <Image
            className="rounded-full border-2 border-blue-500"
            height={100}
            width={100}
            src={session.user.image || "/fallback-image.png"}
            alt="Profile Picture"
          />
          <h1 className="text-2xl font-bold mb-2">{session.user.name}</h1>
          <p className="text-gray-700 mb-4">
            You are already signed in as {session.user.email}
          </p>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sign out
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Dashboard;
