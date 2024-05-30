import { Suspense } from "react";
import ProgressBar from "@/components/common/ProgressBar";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Roboto_Slab } from 'next/font/google';
import 'sweetalert2/src/sweetalert2.scss';
import "../globals.css";

const roboto = Roboto_Slab({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

export async function generateMetadata() {
  try {
    const [metaDataResponse, googleVerificationResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/siteMap`),
    ]);

    if (!metaDataResponse.ok || !googleVerificationResponse.ok) {
      console.error('Network response was not ok');
    }

    const metaData = await metaDataResponse.json();
    const googleVerification = await googleVerificationResponse.json();

    const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    const {
      title = "Construction Company in Brooklyn | RH Construction USA Inc.",
      description = "As one of the leading construction companies in Brooklyn, RH Construction USA Inc. offers top-notch general contractor services in Brooklyn.",
      keywords = "Home, RH Construction USA"
    } = metaData?.homeRouteAllMetaData?.[0] || {};

    return {
      title,
      description,
      keywords,
      verification: {
        google: googleConsoleKey,
      }
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: "Construction Company in Brooklyn | RH Construction USA Inc.",
      description: "As one of the leading construction companies in Brooklyn, RH Construction USA Inc. offers top-notch general contractor services in Brooklyn.",
      keywords: "Home, RH Construction USA",
    };
  }
}

function extractGoogleConsoleKey(googleVerification) {
  try {
    const { sitemap } = googleVerification || {};
    if (!sitemap || !sitemap[0]?.title) return "";
    const metaTagContent = sitemap[0].title;
    const consoleKey = metaTagContent.split("=").pop().slice(1, -4);
    return consoleKey;
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProgressBar />
        </Suspense>
        <Header />
        <main className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
