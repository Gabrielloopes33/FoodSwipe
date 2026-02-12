import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "FoodSwipe - Descubra o que comer",
  description: "Não sabe o que comer? Descubra em 3 swipes! App moderno para escolher comida de forma divertida.",
  manifest: "/manifest.json",
  keywords: ["comida", "delivery", "restaurante", "decisão", "swipe", "app"],
  authors: [{ name: "FoodSwipe" }],
  openGraph: {
    title: "FoodSwipe - Descubra o que comer",
    description: "Não sabe o que comer? Descubra em 3 swipes!",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#FF6B7A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
