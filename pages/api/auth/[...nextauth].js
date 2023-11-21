import NextAuth from "next-auth";
import VkProvider from "next-auth/providers/vk";
import DiscordProvider from "next-auth/providers/discord";
import Google from "next-auth/providers/google";

const scopes = ['identify', 'email'].join(' ')

export const nextAuthOptions = {
  debug: true,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
      authorization: { params: { scope: scopes } },
      allowDangerousEmailAccountLinking: true,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID ?? "",
      clientSecret: process.env.VK_CLIENT_SECRET ?? "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async (session, user) => {
      session.user = user;
      return Promise.resolve(session);
    },
    async signIn({ user, account, profile }) {
      console.log("signIn", user, account, profile);
      
      if(!user.email) return false;

      // Check if the user is allowed to sign in
      const invite = await getInvite(user.email);
      // Check if invite exists
      if (!invite) return false;

      // Check if invite is allowed to sign in
      const isAllowedToSignIn = invite.invited;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  }
}

export default NextAuth(nextAuthOptions);
