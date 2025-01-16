import type { Metadata } from "next";
import { Inter, Rubik, Poppins } from "next/font/google";
import "./globals.css";

const getInter = Inter();

const getRubik = Rubik();

const getPoppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
      <body className={`${getInter} ${getRubik} ${getPoppins} antialiased`}>
        {children}
      </body>
    </html>
  );
}
