import { Almarai } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  display: "swap",
  preload: false,
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
    <html lang="ar" dir="rtl">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      <head>
        <link rel="XO Store icon" href="/icons/favicon.ico" sizes="any" />
      </head>
      {/* <body> */}
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          almarai.className
        )}
      >
        
        {children}
        <Toaster />
      </body>
    </html>
  );
}
