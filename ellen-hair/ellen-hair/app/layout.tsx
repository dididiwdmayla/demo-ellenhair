import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono, Pinyon_Script } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
});

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pinyon',
});

export const metadata: Metadata = {
  title: 'Ellen Hair — 35 anos cuidando da beleza de Maringá',
  description:
    'Salão de beleza unissex em Maringá. Cabelo, barbearia, estética, unhas e produção. Três unidades no centro.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} ${pinyon.variable}`}
    >
      <body className="font-sans antialiased bg-bg-primary text-text-primary overflow-x-hidden selection:bg-red-ellen/20 selection:text-text-primary" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
