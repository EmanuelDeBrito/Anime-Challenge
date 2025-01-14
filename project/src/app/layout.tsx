import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const getInter = Inter();

const getRubik = Rubik();

export const metadata: Metadata = {
  title: "Ani.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${getInter} ${getRubik} antialiased`}>
        {children}
      </body>
    </html>
  );
}
