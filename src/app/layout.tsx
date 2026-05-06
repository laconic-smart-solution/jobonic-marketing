import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Jobonic Corridors",
  description: "A corridor activation marketplace connecting Thailand to Africa, China, and Germany.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-white text-slate-900 antialiased`}>{children}</body>
    </html>
  );
}
