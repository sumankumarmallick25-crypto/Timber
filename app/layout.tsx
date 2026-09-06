import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TIMBER — Modern Menswear",
    template: "%s — TIMBER",
  },
  description: "Modern menswear designed for everyday confidence. TIMBER — built for the Indian wardrobe.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
