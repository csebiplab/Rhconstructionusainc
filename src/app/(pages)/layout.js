import ProgressBar from "@/components/common/ProgressBar";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Roboto_Slab } from 'next/font/google';
import 'sweetalert2/src/sweetalert2.scss';
import "../globals.css";
const roboto = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen`}>
        <ProgressBar />
        <Header />
        <main className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
