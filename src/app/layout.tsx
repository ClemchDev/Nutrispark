import type { Metadata } from "next";
import "./globals.css";

import {Inter as FontSans} from 'next/font/google';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Nutrispark",
  description: "Discover the nutrionnal values of your favorite foods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body className={cn("min-h-screen bg-background dark font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
