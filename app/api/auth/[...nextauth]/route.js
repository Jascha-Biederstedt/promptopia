import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import prisma from '@/app/db';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      const userExists = await prisma.user.findUnique({
        where: {
          email: profile.email,
        },
      });

      if (!userExists) {
        await prisma.user.create({
          data: {
            email: profile.email,
            name: profile.name.replace(' ', '').toLowerCase(),
            image: profile.picture,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
});

export { handler as GET, handler as POST };
