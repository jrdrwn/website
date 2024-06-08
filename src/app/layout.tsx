import type { Metadata } from "next";
import { Pacifico, Red_Hat_Mono } from "next/font/google";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./globals.css";

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-red-hat-mono",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Wan's Portfolio",
  description:
    "I'm a fullsnack developer who loves to build web applications and solve problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHatMono.variable} ${pacifico.variable}`}>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
