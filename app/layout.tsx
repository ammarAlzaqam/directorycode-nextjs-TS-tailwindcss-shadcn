import React from "react";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/global/Topbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const metadata = {
  title: "Directory Code",
  description:
    "Empowering brands with modern web design, seamless user experiences, and smart development that drive growth and innovation.",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Topbar />
        <main className="z-30 main-bg min-h-dvh flex overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
