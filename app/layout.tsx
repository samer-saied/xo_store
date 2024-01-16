import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XO Store",
  description: "Premium Digital Game Cards Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={almarai.className}>
      <head>
        <link rel="XO Store icon" href="icons/favicon.ico" sizes="any" />
      </head>
      <body >{children}</body>
    </html>
  );
}
