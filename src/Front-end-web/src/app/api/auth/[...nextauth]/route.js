import { BASE_URL } from '@/services/url';
import axios from 'axios';
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          email: {},
          password: {},
        },
        async authorize(credentials) {
          try {
            const response = await axios.post(`${BASE_URL}login`, {
              email: credentials.email,
              password: credentials.password,
            });

            if (response.data) {
              return response.data; // Assuming your user data is returned in the response data
            } else {
              return null;
            }
          } catch (error) {
            console.error("Authorization error:", error);
            return null;
          }
        },
      }),
    ],
    pages: {
      signIn: "/auth",
      signOut: "/auth",
      error: "/auth"
    },
    callbacks: {
      jwt: ({ token}) => {
        return { 
          ...token,
        }
      },
      session: async ({session}) => {
        return session
      }
    }
  });

export { handler as GET, handler as POST }
