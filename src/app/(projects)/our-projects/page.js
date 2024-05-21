import ProjectBanner from "@/components/Projects/ProjectBanner/ProjectBanner";
import RC from "./RC";

export async function generateMetadata() {

  try {
    const response = await fetch(`http://localhost:3000/api/projects`);
    if (!response.ok) {
      console.log('Network response was not ok.');
    }
    const data = await response.json();
    const { title, description, keywords } = data?.metaData[0] ?? {}

    return {
      title: title,
      keywords: keywords,
      description: description,
    };
  } catch (error) {
    // console.log(error.message);
    return {
      title: 'Best General Contractor in Brooklyn |  RH Construction USA Inc.',
      description: 'Best general contractor in Brooklyn, specializing in home renovations, bathroom renovations & kitchen remodeling, roofing, and construction services.',
      keywords: 'General Contractor, General Contractor in Brooklyn, RH Construction USA Inc, home renovations, bathroom & kitchen remodeling, roofing',
    }
  }
}

export default function Page() {
  return (
    <main>
      <>
        <div> <ProjectBanner /></div>
        <RC />
      </>
    </main>
  );
}
