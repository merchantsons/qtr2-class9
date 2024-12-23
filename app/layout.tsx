import type { Metadata } from "next";
import { Inter,Poppins,Grey_Qo,Qwitcher_Grypen,Great_Vibes,Cinzel } from 'next/font/google'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--poppins",
  weight:["100","200","300","400","500"]
 });

 const greyqo = Grey_Qo({ 
  subsets: ["latin"],
  variable: "--Grey_Qo",
  weight:["400"]
 });

 const qwitcher_grypen = Qwitcher_Grypen({ 
  subsets: ["latin"],
  variable: "--Qwitcher_Grypen",
  weight:["400"]
 });

 const  great_vibes = Great_Vibes({ 
  subsets: ["latin"],
  variable: "--Great_Vibes",
  weight:["400"]
 });

 const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--Cinzel",
  weight:["400"]
 });

export const metadata: Metadata = {
  title: "Rizfan ::: Official",
  description: "Generated by Merchantsons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
