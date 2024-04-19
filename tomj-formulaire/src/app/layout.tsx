import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Web accessibility forms",
  description: "payment form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden overflow-y-scoll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
