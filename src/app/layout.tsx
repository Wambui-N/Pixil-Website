import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Brule from "next/font/local";
import Satoshi_Variable from "next/font/local";
import "./globals.css";
import { Navigation, Footer } from "@/Components";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const satoshi = Satoshi_Variable({
  src: "../../public/Fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

const brule = Brule({
  src: [
    {
      path: "../../public/Fonts/Brule-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Brule-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Brule-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Brule-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Brule-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Brule-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Brule-Text.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-brule",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pixil Designs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,0&display=optional"
          rel="stylesheet"
        />
      </head>
      <body>
        <Analytics />
        <SpeedInsights />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
