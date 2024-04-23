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
              let userRole = response.data.user_level;
              
              if (userRole == 3) {
                userRole = "admin";
              } else if (userRole == 2) {
                userRole = "professor";
              } else {
                userRole = "aluno";
              }
        
              return { ...credentials, role: userRole, name: response.data.name };
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
      jwt: ({ token, user }) => {
        if (user) token.role = user.role;
        return token
      },
      session: async ({ session, token }) => {
        if (session?.user ) session.user.role = token.role;
        return session
      }
    }
  });

export { handler as GET, handler as POST }
