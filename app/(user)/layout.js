import Header from "@/components/Header";
import "../globals.css";

export const metadata = {
  title: "HABSL",
  description: "Haji Ahmad Brothers Securities LTD",
};

import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import Footer from "@/components/Footer";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-jakarta",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${lora.variable} font-sans`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
