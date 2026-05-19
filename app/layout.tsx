import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./lib/i18n";

export const metadata: Metadata = {
  title: "Stoep — wireframes",
  description: "Mock screens for the Stoep buurt-prototype (pilot, Indische Buurt).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
