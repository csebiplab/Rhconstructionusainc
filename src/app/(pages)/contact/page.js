import ContactUs from "./ContactUs";

export async function generateMetadata() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contactUs`, { cache: 'no-store' });

    if (!response.ok) {
      console.error('Failed to fetch metadata');
    }

    const metaData = await response.json();
    const { title = "Contact Us | RH Construction USA", description = "Get in touch with RH Construction USA for all your construction needs.", keywords = "Contact Us, RH Construction USA" } = metaData?.contactRouteAllMetaData?.[0] || {};

    return {
      title,
      description,
      keywords,
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: "Contact Us | RH Construction USA",
      description: "Get in touch with RH Construction USA for all your construction needs.",
      keywords: "Contact Us, RH Construction USA",
    };
  }
}

export default function Page() {
  return (
    <main>
      <ContactUs />
    </main>
  );
}
