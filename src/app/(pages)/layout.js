import ProgressBar from "@/components/common/ProgressBar";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
// import { Raleway } from "next/font/google";
import 'sweetalert2/src/sweetalert2.scss';
import "../globals.css";
import { Roboto } from 'next/font/google';
// const raleway = Raleway({ subsets: ["latin"], variable: '--font-raleway' });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    template: '%s | RH Construction',
    default: 'RH Construction',
  },
  verification: {
    google: "GhdpcbTz9PD3TM20eoz_cOUoVwWvppJvZPCojn4tNdY",
  },
};


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
