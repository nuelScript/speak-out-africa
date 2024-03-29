import { Toaster } from "@/components/ui/toaster";
import HelpLine from "./components/Helpline";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Speak Out Africa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <HelpLine />
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
