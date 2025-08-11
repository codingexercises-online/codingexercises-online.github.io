import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/lib/auth";
import { ThemeProvider } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodingExercises.Online — Learn DSA by Doing",
  description:
    "A modern, browser-based platform for learning data structures and algorithms through an in-browser code editor and low-level dialects.",
  metadataBase: new URL("https://codingexercises.online"),
  openGraph: {
    title: "CodingExercises.Online",
    description:
      "Practice DSA hands-on in your browser using low-level dialects.",
    url: "https://codingexercises.online",
    siteName: "CodingExercises.Online",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodingExercises.Online",
    description:
      "Practice DSA hands-on in your browser using low-level dialects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
              <Navbar />
              <main className="container mx-auto px-6 py-10 max-w-6xl">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
