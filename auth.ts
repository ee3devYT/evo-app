import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(""),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  providers: [CredentialsProvider({}), DiscordProvider({})],
});
