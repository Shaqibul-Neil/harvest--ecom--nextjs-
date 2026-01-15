import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { loginUser, saveOAuthUser } from "@/services/userServices";
import { dbConnect } from "./dbConnect";
import { collections } from "./constants";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        // email: {
        //   label: "Email",
        //   type: "email",
        //   placeholder: "jsmith@gmail.com",
        // },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        if (user) return user;
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
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        // to get the latest data from database
        const dbUser = await dbConnect(collections.USERS).findOne({
          email: user.email.toLowerCase(),
        });
        //console.log("account data token", account);
        token.id = dbUser?._id.toString();
        token.email = dbUser?.email || user.email;
        token.name =
          dbUser?.name || user.name || `${user.firstName} ${user.lastName}`;
        token.role = dbUser?.role || "user";
        //add image later
      }
      return token;
    },
  },
};
