import ProgressBar from "@/components/common/ProgressBar";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Raleway } from "next/font/google";
import 'sweetalert2/src/sweetalert2.scss';
import "../globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: '--font-raleway' });

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
      <body className={`${raleway.className} min-h-screen`}>
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
