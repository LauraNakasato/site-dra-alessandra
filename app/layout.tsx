import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Alessandra Victorino | Psicóloga e Neuropsicóloga Humanizada",
  description: "Seu espaço de acolhimento e transformação no Tatuapé (Edifício Empresarial Etoile). Atendimento Neuropsicológico e Psicoterapia (TCC) para todas as idades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} font-sans bg-brand-peach text-brand-text antialiased`}>
        {children}
      </body>
    </html>
  );
}