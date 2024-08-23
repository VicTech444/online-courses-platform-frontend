"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CourseContext } from "@/context/courseContext";
import { reactQueryClient } from "@/react-query/instance";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let [courseContext, setCourseContext] = useState(null);
  let router = usePathname();
  const courseRoutes = /^\/courses\/[^\/]+\/taken\/[^\/]+$/;

  const stylesBased = !courseRoutes.test(router) ? 'flex flex-col items-center px-8' : '';
  const subStylesBased = !courseRoutes.test(router) ? 'max-w-[1170px]' : '';

  return (
    <html lang="en">
      <body className={`${inter.className} w-full bg-[#1d1238] text-white`}>
        <QueryClientProvider client={reactQueryClient}>
          <CourseContext.Provider value={{ courseContext, setCourseContext }}>
            <Header />
            <div className={stylesBased}>
              <div className={subStylesBased}>{children}</div>
            </div>
          </CourseContext.Provider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </body>
    </html>
  );
}
