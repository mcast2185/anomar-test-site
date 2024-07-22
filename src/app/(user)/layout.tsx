import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Mouse from "@/components/sectionComponents/mouse";

import "../../styles/globals.css";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body >
          <Mouse />
          {children}
        </body>
    </html>
  );
}
