"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <div className={`${inter.className} bg-[#1d1238] text-white`}>
            <div className="bg-[#2e2e2e]">
             {children}
            </div>
      </div>
  );
}
