import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import { saveOAuthUser } from "@/services/userServices";
import { dbConnect } from "./dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await dbConnect("users").findOne({ email });
        if (!user) return null;
        //match password
        const isPasswordOk = await bcrypt.compare(password, user.password);
        if (isPasswordOk) return user;
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account.provider === "google") {
          await saveOAuthUser(user, account);
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, token, user }) {
      //never take values from user for security purposes

      if (token) {
        session.role = token.role;
        session.name = token.name;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.email = user.email;
        token.name = user.name || `${user.firstName} ${user.lastName}`;
        token.role = user.role || "user";
        //add image later
      }
      return token;
    },
  },
};
