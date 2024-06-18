import { JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pressStart2P",
});

export const metadata = {
  title: "Sven Portfolio",
  description: "The portfolio of Sven developed in Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${pressStart2P.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
