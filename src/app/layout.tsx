import "@/app/globals.css";
import ScrollToTop from "@components/utils/ScrollToTop";
import type { Metadata } from "next";
import { Pacifico, Red_Hat_Mono } from "next/font/google";

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
  icons: [
    {
      url: "/favicon.svg",
      sizes: "any",
    },
  ],
  title: "Wan's Portfolio",
  description:
    "I'm a Fullsnack Developer who loves to build web applications and solve problems.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Wan's Portfolio",
    description:
      "I'm a fullsnack developer who loves to build web applications and solve problems.",
    siteName: "Wan's Portfolio",
    url: "https://wannn.space/",
    images: [
      {
        url: "https://ik.imagekit.io/jxhehdgsg/personal-website/v3-personal-website.png",
        width: 1200,
        height: 630,
        alt: "Wan's Portfolio",
      },
    ],
  },
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
