import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sigma-kohl-nu.vercel.app"),
  title: {
    default: "Sigma Group",
    template: "%s | Sigma Group",
  },
  description:
    "Delivering secure digital solutions across healthcare, consulting, artificial intelligence, and innovation ventures.",
  openGraph: {
    title: "Sigma Group",
    description:
      "Delivering secure digital solutions across healthcare, consulting, artificial intelligence, and innovation ventures.",
    url: "https://sigma-kohl-nu.vercel.app",
    siteName: "Sigma Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/sigmalogo-black.png",
        alt: "Sigma Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigma Group",
    description:
      "Delivering secure digital solutions across healthcare, consulting, artificial intelligence, and innovation ventures.",
    images: ["/sigmalogo-black.png"],
  },
  icons: {
    icon: [{ url: "/sigmalogo-black.svg", type: "image/svg+xml" }],
    shortcut: "/sigmalogo-black.svg",
    apple: "/sigmalogo-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
