import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ weight: ["400"], subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
    title: "Артём & Мария",
    description: "Приглашение на свадьбу Артёма и Марии",
    openGraph: {
        title: "Артём & Мария",
        description: "Приглашение на свадьбу Артёма и Марии",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
      <html lang="ru">
          <body className={inter.className}>
              <Header />
              {children}
              <Footer />
          </body>
      </html>
  );
}
