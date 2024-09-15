import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";
import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";

function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: getEnvVariable("GITHUB_ID"),
      clientSecret: getEnvVariable("GITHUB_SECRET"),
    }),
    FacebookProvider({
      clientId: getEnvVariable("FACEBOOK_ID"),
      clientSecret: getEnvVariable("FACEBOOK_SECRET"),
    }),
    LinkedInProvider({
      clientId: getEnvVariable("LINKEDIN_ID"),
      clientSecret: getEnvVariable("LINKEDIN_SECRET"),
    }),
    GoogleProvider({
      clientId: getEnvVariable("GOOGLE_ID"),
      clientSecret: getEnvVariable("GOOGLE_SECRET"),
    }),
    //     // Passwordless / email sign in
    //     // EmailProvider({
    //     //   server: process.env.MAIL_SERVER,
    //     //   from: "NextAuth.js <no-reply@example.com>",
    //     // }),
  ],
});

export { handler as GET, handler as POST };
