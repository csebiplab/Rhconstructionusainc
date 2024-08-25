import { Roboto_Slab } from 'next/font/google';
import "../../globals.css";
import ProgressBar from '@/components/common/ProgressBar';
import { Header } from '@/components/layout/Header';
import ProjectBanner from '@/components/Projects/ProjectBanner/ProjectBanner';
import ProjectMenus from '@/components/Projects/ProjectMenus/ProjectMenus';
import ReadyToWork from '@/components/Projects/Layouts/ReadyToWork/ReadyToWork';
import Footer from '@/components/layout/Footer/Footer';



const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })


export const metadata = {
    title: 'Best General Contractor in Brooklyn |  RH Construction USA Inc.',
    description: 'Best general contractor in Brooklyn, specializing in home renovations, bathroom renovations & kitchen remodeling, roofing, and construction services.',
    keywords: 'General Contractor, General Contractor in Brooklyn, RH Construction USA Inc, home renovations, bathroom & kitchen remodeling, roofing',
}



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} min-h-screen`}>
                <ProgressBar />
                <Header />
                <main className="min-h-[60vh]">
                    <>
                        <ProjectBanner />
                    </>
                    <>
                        <ProjectMenus />
                    </>
                    {children}
                </main>
                <div className='mt-48'>
                    <ReadyToWork />
                </div>
                <Footer />
            </body>
        </html>
    );
}
