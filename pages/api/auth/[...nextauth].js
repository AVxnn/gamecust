import NextAuth from "next-auth";
import VkProvider from "next-auth/providers/vk";
import DiscordProvider from "next-auth/providers/discord";
import Google from "next-auth/providers/google";

const scopes = ['identify', 'email'].join(' ')

export const nextAuthOptions = {
  debug: true,
  jwt: {
    secret: process.env.NEXT_PUBLIC_JWT_SECRET_KEY // Doesn't seems to work.
  },
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
  }
}

export default NextAuth(nextAuthOptions);
