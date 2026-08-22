import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import PublicNav from "@/components/navigation/public-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lawincSerif = Lora({
  variable: "--font-lawinc-serif",
  subsets: ["latin"],
  // display: "swap",
})

export const metadata: Metadata = {
  title: "LawInc",
  description: "Legal Information and administration platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lawincSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <PublicNav/>
        <main className="flex-1">
          {children}
          </main>
        </body>
    </html>
  );
}
