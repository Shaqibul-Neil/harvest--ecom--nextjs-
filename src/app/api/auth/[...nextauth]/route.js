import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const userList = [
  { email: "hablu@gmail.com", password: "123456" },
  { email: "dablu@gmail.com", password: "567890" },
];

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
        const user = userList.find((u) => u.email === email);
        if (!user) return null;
        //match password
        const isPasswordOk = user.password === password;
        if (isPasswordOk) return user;
        return null;
      },
    }),
    // ...add more providers here
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
