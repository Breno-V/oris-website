import { Inter } from "next/font/google";
import "@/components/MainContainer/MainContainer.module.scss";
import "@/app/styles/globals.scss";
import "@/app/styles/responsive.scss";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/Navbar";
import LenisProvider from "@/components/Scroll/lenisProvider";

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Oris",
  description: "Your app of habits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${InterFont.variable} font-sans`}>
        <LenisProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
