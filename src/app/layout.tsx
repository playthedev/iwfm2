import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IWFM | I Work Facility Management",
  description:
    "IWFM specializes in Regular Housekeeping Manpower, Deep Cleaning & Pre-Handover Cleaning, Sanitization and Executive Facility Management for commercial and residential buildings across Delhi, Noida, Gurugram and Chandigarh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink-900">
        {children}
      </body>
    </html>
  );
}
