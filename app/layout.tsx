import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://indy-paper-trail-portfolio.ramalakshmi-s.chatgpt.site";
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const description =
    "Ashwati Palanivel is a Computer Science and Artificial Intelligence student at Purdue University Indianapolis.";

  return {
    title: "Ashwati Palanivel — CS + AI Portfolio",
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Ashwati Palanivel — CS + AI Portfolio",
      description,
      images: [{ url: `${base}${assetBase}/assets/indy.jpg`, width: 2048, height: 768 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ashwati Palanivel — CS + AI Portfolio",
      description,
      images: [`${base}${assetBase}/assets/indy.jpg`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
