import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-display" });

export const metadata: Metadata = {
  title: "Jobonic Corridors",
  description: "A corridor activation marketplace connecting Thailand to Africa, China, and Germany.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  );
}
