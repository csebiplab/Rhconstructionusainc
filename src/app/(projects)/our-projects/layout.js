import { Roboto_Slab } from 'next/font/google';
import "../../globals.css";
import ProgressBar from '@/components/common/ProgressBar';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';



const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })



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
