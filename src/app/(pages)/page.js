import Home from "./Home";

// Dynamic Metadata
export async function generateMetadata() {
  try {
    const metaDataResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`);
    const metaData = await metaDataResponse.json();



    // Fetch Google site verification URL
    const googleVerificationResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verificationUrl`);
    const googleVerification = await googleVerificationResponse.json();

    // Extract Google console key from the meta tag content
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
    return {
      title: "Construction Company in Brooklyn | RH Construction USA Inc.",
      keywords: "Home, RH Construction USA",
      description: "As one of the leading construction companies in Brooklyn, RH Construction USA Inc. offers top-notch general contractor services in Brooklyn."
    };
  }
}

function extractGoogleConsoleKey(googleVerification) {
  try {
    const { verificationUrl } = googleVerification ?? {};
    const metaTagContent = verificationUrl[0]?.title;
    const consoleKey = metaTagContent?.split(" ")[2]?.split("=")[1]?.slice(1, -1);
    return consoleKey;
  } catch (error) {
    console.error('Error extracting Google console key:', error);
  }
}




export default function Page() {
  return (
    <main className="min-h-screen">
      <Home />
    </main>
  )
}
