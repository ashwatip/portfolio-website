import type { Metadata } from "next";
import { headers } from "next/headers";
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
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const base = host ? `${protocol}://${host}` : "http://localhost:3000";
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
      images: [{ url: `${base}/assets/indy.jpg`, width: 2048, height: 768 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ashwati Palanivel — CS + AI Portfolio",
      description,
      images: [`${base}/assets/indy.jpg`],
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
