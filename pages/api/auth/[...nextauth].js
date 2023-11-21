import NextAuth from "next-auth";
import VkProvider from "next-auth/providers/vk";
import DiscordProvider from "next-auth/providers/discord";
import Google from "next-auth/providers/google";

const scopes = ['identify', 'email'].join(' ')

export const nextAuthOptions = {
  debug: true,
  providers: [
    DiscordProvider({
      clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET ?? "",
      authorization: { params: { scope: scopes } },
    }),
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? "",
    }),
    VkProvider({
      clientId: process.env.NEXT_PUBLIC_VK_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_VK_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.user = user;
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
}

export default NextAuth(nextAuthOptions);
