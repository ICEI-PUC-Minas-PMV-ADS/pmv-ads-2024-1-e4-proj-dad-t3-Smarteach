import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/session-provider";
import Header from "@/components/Header";
import { ReactQueryProvider } from "@/providers/query-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: "Smarteach",
 description: "Smarteach",
};

export default function RootLayout({ children }) {
 return (
  <NextAuthSessionProvider>
   <ReactQueryProvider>
    <html lang="en">
     <body className={inter.className}>
      <Header />
      {children}
     </body>
    </html>
   </ReactQueryProvider>
  </NextAuthSessionProvider>
 );
}
