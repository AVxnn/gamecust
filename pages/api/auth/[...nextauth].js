import NextAuth from "next-auth";
import VkProvider from "next-auth/providers/vk";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import axios from 'axios';

const scopes = ['identify', 'email'].join(' ')

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
    VkProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async (session, user) => {
      session.user = user;
      return Promise.resolve(session);
    },
    async signIn(user, account, profile) {
      console.log(user)
      try {
        // Отправка данных на сервер с API Mongoose
        const res = await axios.post('https://gamecust.online/api/user/registration/Google', {
          email: user.account.email,
          username: user.user.name, 
          picture: user.user.image, 
          sub: 'wew',
          email_verified: true
          // Добавьте другие данные из профиля или account при необходимости
        });
        session.user = res.data
        console.log('create', res.data)
        return Promise.resolve(user);
      } catch (error) {
        console.error('Error saving user data:', error);
      }
      return Promise.resolve(true);
    },
  }
}

export default NextAuth(nextAuthOptions);
