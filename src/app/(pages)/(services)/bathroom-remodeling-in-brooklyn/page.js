import BathroomRemodellingAllComponents from '@/components/Services/BathroomRemodellingAllComponents/BathroomRemodellingAllComponents';

export async function generateMetadata() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bathroom-remodelling-in-brooklyn`, { cache: "no-store" });
    const metaData = await res.json();

    const {
      title = "Construction Company in Brooklyn | RH Construction USA Inc.",
      description = "As one of the leading construction companies in Brooklyn, RH Construction USA Inc. offers top-notch general contractor services in Brooklyn.",
      keywords = "Home, RH Construction USA"
    } = metaData?.data?.[0] || {};

    return {
      title,
      description,
      keywords,
    };
  } catch (error) {
    return {
      title: "Construction Company in Brooklyn | RH Construction USA Inc.",
      description: "As one of the leading construction companies in Brooklyn, RH Construction USA Inc. offers top-notch general contractor services in Brooklyn.",
      keywords: "Home, RH Construction USA",
    };
  }
}

const BathroomRemodellingMainPage = () => {
  return (
    <div>
      <BathroomRemodellingAllComponents />
    </div>
  );
};

export default BathroomRemodellingMainPage;