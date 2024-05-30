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

    const metaData = await metaDataResponse.json();
    const googleVerification = await googleVerificationResponse.json();

    const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    return {
      title: metaData?.homeRouteAllMetaData[0]?.title,
      description: metaData?.homeRouteAllMetaData[0]?.description,
      keywords: metaData?.homeRouteAllMetaData[0]?.keywords,
      verification: {
        google: googleConsoleKey,
      }
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: "Construction Company in Brooklyn | RH Construction USA Inc.",
      keywords: "Home, RH Construction USA",
      description: "As one of the leading construction companies in Brooklyn, RH Construction USA Inc. offers top-notch general contractor services in Brooklyn.",
    };
  }
}

function extractGoogleConsoleKey(googleVerification) {
  try {
    const { sitemap } = googleVerification ?? {};
    if (!sitemap) return "";
    const metaTagContent = sitemap[0]?.title;
    const consoleKey = metaTagContent?.split("=").pop().slice(1, -4);
    return consoleKey;
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}

export default async function RootLayout({ children }) {
  // const metadata = await generateMetadata();


  return (
    <html lang="en">
      {/* <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="google-site-verification" content={metadata.verification?.google} />
      </head> */}
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
