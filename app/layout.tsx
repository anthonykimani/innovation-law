import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const melodrama = localFont({
  src: [
    {
      path: "../public/font/melodrama/Melodrama-Light.woff",
      weight: "200",
    },
    {
      path: "../public/font/melodrama/Melodrama-Regular.woff",
      weight: "300",
    },
    {
      path: "../public/font/melodrama/Melodrama-Medium.woff",
      weight: "400",
    },
    {
      path: "../public/font/melodrama/Melodrama-Semibold.woff",
      weight: "500",
    },
    {
      path: "../public/font/melodrama/Melodrama-Bold.woff",
      weight: "600",
    },
  ],
  variable: "--font-melodrama",
});

export const metadata: Metadata = {
  title: "KS Legal",
  description: "Innovation Meets Law",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${melodrama.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
