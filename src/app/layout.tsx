import React from "react";
import type { Metadata } from "next";
import { Marck_Script } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";
import { Header } from "@/components";

const inter = Marck_Script({ weight: ["400"], subsets: ['latin', 'cyrillic'] });

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
          </body>
      </html>
  );
}
