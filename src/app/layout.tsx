"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CourseContext } from "@/context/courseContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let queryClient = new QueryClient();
  let [courseContext, setCourseContext] = useState(null);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1d1238] text-white`}>
        <CourseContext.Provider value={{courseContext, setCourseContext}}>
          <QueryClientProvider client={queryClient}>
            <Header />
            <div className="flex flex-col items-center px-8">
              <div className="max-w-[1170px]">{children}</div>
            </div>
          </QueryClientProvider>
        </CourseContext.Provider>
      </body>
    </html>
  );
}
