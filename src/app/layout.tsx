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
  metadataBase: new URL("https://KLAMA-kohl-nu.vercel.app"),
  title: {
    default: "KLAMA Group",
    template: "%s | KLAMA Group",
  },
  description:
    "Delivering secure digital solutions across healthcare, consulting, artificial intelligence, and innovation ventures.",
  openGraph: {
    title: "KLAMA Group",
    description:
      "Delivering secure digital solutions across healthcare, consulting, artificial intelligence, and innovation ventures.",
    url: "https://KLAMA-kohl-nu.vercel.app",
    siteName: "KLAMA Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/klama.svg",
        alt: "KLAMA Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KLAMA Group",
    description:
      "Delivering secure digital solutions across healthcare, consulting, artificial intelligence, and innovation ventures.",
    images: ["/klama.svg"],
  },
  icons: {
    icon: [{ url: "/klama.svg", type: "image/svg+xml" }],
    shortcut: "/klama.svg",
    apple: "/klama.svg",
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

