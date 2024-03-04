import { Almarai } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: [ "400", "700", "800"],
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
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      <head>
        <link rel="XO Store icon" href="/icons/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
