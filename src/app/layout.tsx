import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from '@/contexts/AuthContext';
import AuthErrorBoundary from './components/AuthErrorBoundary';
import AuthDebug from './components/AuthDebug';
import "./globals.css";
import CookieBanner from "./components/CookieBanner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSMath Center - Pregătire la Matematică",
  description: "Meditații pentru clasele V–XII și pregătire pentru examenul de Bacalaureat cu Denisa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthErrorBoundary>
          <AuthProvider>
            {children}
            <CookieBanner />
            <AuthDebug />
          </AuthProvider>
        </AuthErrorBoundary>
      </body>
    </html>
  );
}
