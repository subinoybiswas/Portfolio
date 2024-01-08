import { Inter } from "next/font/google";
import { useEffect } from "react";
import { initGA, logPageView } from "@/app/analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subinoy Biswas",
  description: "Portfolio of Subinoy Biswas",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view

    // Add additional tracking logic as needed
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
