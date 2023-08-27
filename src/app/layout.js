import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import 'sweetalert2/src/sweetalert2.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | RH Construction',
    default: 'RH Construction',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <main className="min-h-[60vh]">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
