import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ptenofficielfrance.fr"),
  title: {
    default: "PTEN Officiel France — Association du syndrome de Cowden et du gène PTEN",
    template: "%s | PTEN Officiel France",
  },
  description:
    "Association de patients pour le syndrome de Cowden et les maladies liées au gène PTEN (PHTS) : informations médicales, suivi, médecins référents et communauté en France.",
  keywords: [
    "PTEN",
    "syndrome de Cowden",
    "gène PTEN",
    "PHTS",
    "syndrome de Bannayan-Riley-Ruvalcaba",
    "maladie rare génétique",
    "association de patients",
  ],
  openGraph: {
    title: "PTEN Officiel France — Association du syndrome de Cowden et du gène PTEN",
    description:
      "Informations médicales, suivi coordonné, médecins référents et communauté de patients concernés par une mutation du gène PTEN, en France, au Québec et en Belgique.",
    url: "https://ptenofficielfrance.fr",
    siteName: "PTEN Officiel France",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PTEN Officiel France — Association du syndrome de Cowden et du gène PTEN",
    description:
      "Informations, suivi médical et communauté pour les personnes concernées par une mutation du gène PTEN.",
  },
  alternates: {
    canonical: "https://ptenofficielfrance.fr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
 return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="stripe-bar" aria-hidden="true" />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
