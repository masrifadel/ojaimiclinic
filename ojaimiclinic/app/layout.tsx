import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Karl Ojaimi Eye Clinic | Advanced Ophthalmic Care in Lebanon",
    template: "%s | Dr. Karl Ojaimi Eye Clinic",
  },
  description:
    "Expert eye care in Lebanon offering cataract surgery, refractive surgery, and comprehensive eye diagnostics. State-of-the-art technology with Dr. Karl Ojaimi in Baabda, Mount Lebanon.",
  keywords: [
    "eye clinic Lebanon",
    "ophthalmologist Lebanon",
    "cataract surgery Lebanon",
    "LASIK surgery Lebanon",
    "refractive surgery Lebanon",
    "eye doctor Baabda",
    "Dr. Karl Ojaimi",
    "eye care Mount Lebanon",
    "ophthalmic surgery",
    "eye examination Lebanon",
    "vision correction Lebanon",
    "eye clinic Baabda",
  ],
  authors: [{ name: "Dr. Karl Ojaimi" }],
  creator: "Dr. Karl Ojaimi Eye Clinic",
  publisher: "Dr. Karl Ojaimi Eye Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://ojaimiclinic.vercel.app",
  ),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ojaimiclinic.vercel.app",
    siteName: "Dr. Karl Ojaimi Eye Clinic",
    title: "Dr. Karl Ojaimi Eye Clinic | Advanced Ophthalmic Care in Lebanon",
    description:
      "Expert eye care in Lebanon offering cataract surgery, refractive surgery, and comprehensive eye diagnostics.",
    images: [
      {
        url: "/ClinicImage.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Karl Ojaimi Eye Clinic - Advanced Eye Care in Lebanon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Karl Ojaimi Eye Clinic | Advanced Ophthalmic Care in Lebanon",
    description:
      "Expert eye care in Lebanon offering cataract surgery, refractive surgery, and comprehensive eye diagnostics.",
    images: ["/ClinicImage.webp"],
    creator: "@DrKarlOjaimi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
