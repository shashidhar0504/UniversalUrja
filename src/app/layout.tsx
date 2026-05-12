import type { Metadata } from "next";
import { Inter, Cinzel, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const cinzelDecorative = Cinzel_Decorative({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative" 
});

export const metadata: Metadata = {
  title: "UniversalUrja | Where Energy becomes destiny",
  description: "Discover personalized crystals, spiritual healing, and divine guidance designed for your unique energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} ${cinzelDecorative.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
