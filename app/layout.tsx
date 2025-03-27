import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css"; 

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Splitter",
  description: "Splitting the bill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
