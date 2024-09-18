"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function SignUp() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retypepassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.retypepassword) {
      // Add your sign-up logic here
      console.log("Sign-up form data: ", formData);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {session && session.user && session.user.email ? (
          <div className="text-center">
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
              onClick={() => signOut()}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {/* Sign up with Email and Password */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">Sign up</h2>
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-left font-medium text-gray-700"
                  ></label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-left font-medium text-gray-700"
                  ></label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-left font-medium text-gray-700"
                  ></label>
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="retypepassword"
                    className="block text-left font-medium text-gray-700"
                  ></label>
                  <input
                    id="retypepassword"
                    type="password"
                    value={formData.retypepassword}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Re-type Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-2 px-4 w-full rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Sign up
                </button>
              </form>
              <p className="mt-4 text-sm">
                Already have an account?{" "}
                <a href="Signin" className="text-blue-600 hover:underline">
                  Sign in!
                </a>
              </p>
            </div>

            {/* Social Sign Up */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">Sign up with</h2>
              <div className="space-y-2 w-full">
                <button
                  onClick={() => signIn("google")}
                  className="bg-white border border-black text-black py-2 px-4 w-full rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Google
                </button>

                <button
                  onClick={() => signIn("github")}
                  className="bg-gray-800 text-white py-2 px-4 w-full rounded hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
