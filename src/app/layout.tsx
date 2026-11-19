import type { Metadata } from "next";
import { Manrope, Zilla_Slab } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Zilla_Slab({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "3VIE-BTP | Bâtiment, travaux publics et menuiserie à Lomé",
    template: "%s | 3VIE-BTP",
  },
  description:
    "3VIE-BTP, entreprise de BTP à Lomé (Agoè Assiyéyé). Ingénierie, architecture, génie civil, construction, menuiserie et réponses aux appels d’offres.",
  keywords: [
    "3VIE-BTP",
    "BTP Lomé",
    "Architecture Togo",
    "Génie civil",
    "Construction Togo",
    "Appels d'offres BTP",
    "Menuiserie Lomé",
  ],
  openGraph: {
    title: "3VIE-BTP | Bâtiment & travaux publics",
    description:
      "Solutions techniques fiables et durables pour vos projets de construction à Lomé.",
    locale: "fr_TG",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${body.variable} ${display.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
