import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import "./globals.css";
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niti Surakongka | Portfolio",
  description: "Niti Surakongka's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <MantineProvider>
          <Navbar />
          {children}
          <SpeedInsights />
        </MantineProvider>
      </body>
    </html>
  );
}
