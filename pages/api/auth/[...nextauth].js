import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

const scopes = ["identify", "email"].join(" ");

export const nextAuthOptions = {
  debugger: true,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: scopes } },
      redirect_uri: process.env.NEXTAUTH_URL,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.user = user;
      return Promise.resolve(session);
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}/?authpopup=true`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async signIn(user, account, profile) {
      try {
        return Promise.resolve(user);
      } catch (error) {
        console.error("Error saving user data:", error);
      }
      return Promise.resolve(true);
    },
  },
};

export default NextAuth(nextAuthOptions);
