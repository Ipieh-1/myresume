import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashinyokem Jeffery Resume",
  description: "Created by Ashinyokem Jeffery",
};

export default function RootLayout({ children }) {
  return (
    <html>
     <body>
        <Navbar/>
        {children}
       <SiteFooter />
     </body>
    </html>
  );
}
