import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/session-provider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smarteach",
  description: "Smarteach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <NextAuthSessionProvider>
          <body className={inter.className}>
            <Header />
            {children}
            </body>
        </NextAuthSessionProvider>
      </html>
  );
}
