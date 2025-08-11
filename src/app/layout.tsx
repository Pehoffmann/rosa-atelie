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

// Configuração da fonte TT Fors (será carregada quando as fontes estiverem disponíveis)
const ttFors = {
  variable: "--font-tt-fors",
  style: {
    fontFamily:
      "TT Fors, var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
  },
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.atelierosabalan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rosa Ateliê",
    template: "%s | Rosa Ateliê",
  },
  description:
    "Ateliê de costura e customização em São Paulo. Ajustes, reformas, consertos e peças personalizadas com acabamento profissional.",
  keywords: [
    "atelie",
    "costura",
    "ajustes",
    "reformas",
    "consertos",
    "barra",
    "customização",
    "alta costura",
    "São Paulo",
    "Rosa Ateliê",
  ],
  applicationName: "Rosa Ateliê",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rosa Ateliê",
    description:
      "Ajustes, reformas e peças personalizadas com acabamento profissional.",
    url: "/",
    siteName: "Rosa Ateliê",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-rosa-balan.png",
        width: 1200,
        height: 630,
        alt: "Rosa Ateliê - logo com fundo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosa Ateliê",
    description:
      "Ajustes, reformas e peças personalizadas com acabamento profissional.",
    images: ["/logo-rosa-balan.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ttFors.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
