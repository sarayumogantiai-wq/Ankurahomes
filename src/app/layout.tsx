import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ankura Homes — We Build Homes. Better Ones.",
  description:
    "Ankura Homes is a premium luxury real estate developer in Hyderabad. Explore IQON West, Urban Trilla, Casa Billa and more — crafted for discerning living.",
  keywords: "Ankura Homes, luxury homes Hyderabad, villas Shankarpalli, Mokila apartments, real estate Hyderabad",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
