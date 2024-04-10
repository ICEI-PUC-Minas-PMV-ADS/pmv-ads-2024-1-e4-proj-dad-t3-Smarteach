import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          name: { label: "Name", type: "text" },
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (credentials.name === "Felipe" && credentials.email === "felipe@puc.com" && credentials.password === "123" ){
            return {
              id: "1",
              name: "Felipe",
              email: "felipe@puc.com",
              password: "123"
            }
          }
        },
      }),
    ],
    pages: {
      signIn: "/login",
    },
  });

export {handler as GET, handler as POST}