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

export const metadata: Metadata = {
  title: "Rosa Ateliê",
  description:
    "Ateliê de costura e customização - Peças únicas e personalizadas",
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
