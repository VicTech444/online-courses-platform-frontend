"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1d1238] text-white`}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <div className="flex flex-col items-center px-8">
            <div className="max-w-[1170px]">{children}</div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
