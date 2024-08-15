"use client";

import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div lang="en">
      <body className={`${inter.className} bg-[#1d1238] text-white h-screen max-h-screen`}>
            <Header />
            <div className="bg-[#2e2e2e]">
             {children}
            </div>
      </body>
    </div>
  );
}
