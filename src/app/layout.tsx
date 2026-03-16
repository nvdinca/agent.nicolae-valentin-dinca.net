import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agent.nicolae-valentin-dinca.net"),
  title: "Nicolae-Valentin Dinca - Portofolio - Global Real Estate Agent",
  description:
    "Your trusted partner in global real estate. Buying, selling, renting and investment properties across Europe, Middle East and Asia. We reply within 24h.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Nicolae-Valentin Dinca - Portofolio - Global Real Estate Agent",
    description: "Your trusted partner in global real estate.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nicolae-Valentin Dinca - Portofolio - Global Real Estate Agent",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable}`}>
      <body
        className="min-h-screen w-full font-sans antialiased"
        style={{
          backgroundColor: "var(--background, #fafafa)",
          color: "var(--foreground, #0f172a)",
        }}
      >
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", background: "#fafafa", color: "#0f172a" }}>
            Please enable JavaScript to view this site.
          </div>
        </noscript>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
