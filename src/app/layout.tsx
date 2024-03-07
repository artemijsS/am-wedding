import React from "react";
import type { Metadata } from "next";
import { Bellota } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";
import { Footer, Header } from "@/components";

const belotta = Bellota({ weight: ["300","400", "700"], subsets: ['latin', 'cyrillic'] });

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
          <body className={belotta.className}>
              {children}
              <Footer />
          </body>
      </html>
  );
}
