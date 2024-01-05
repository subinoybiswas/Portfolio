import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("./page.js"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subinoy Biswas",
  description: "Portfolio of Subinoy Biswas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoSSR></NoSSR>
      </body>
    </html>
  );
}
