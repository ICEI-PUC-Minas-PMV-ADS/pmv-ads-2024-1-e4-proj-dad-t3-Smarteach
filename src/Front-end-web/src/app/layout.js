import { Poppins } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/session-provider";
import Header from "@/components/header";
import { ReactQueryProvider } from "@/providers/query-client-provider";

const poppins = Poppins({
    weight: ["400", "900"],   
    display: "swap",
    subsets: ["latin"],
    variable: "--poppins-font",
  });

export const metadata = {
 title: "Smarteach",
 description: "Smarteach",
};

export default function RootLayout({ children }) {
 return (
  <NextAuthSessionProvider>
   <ReactQueryProvider>
    <html lang="en">
     <body className={poppins.className}>
      <Header />
      {children}
     </body>
    </html>
   </ReactQueryProvider>
  </NextAuthSessionProvider>
 );
}
