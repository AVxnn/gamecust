import NextAuth from "next-auth";
import VkProvider from "next-auth/providers/vk";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

const scopes = ['identify', 'email'].join(' ')

export const nextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: scopes } },
      redirect_uri: process.env.NEXTAUTH_URL,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRE,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(nextAuthOptions);
