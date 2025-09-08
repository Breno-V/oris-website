import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Footer from "../components/Footer/Footer";

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
    <html lang="en">
      <body className={`${InterFont.variable} font-sans`}>
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
