import ProjectsComponent from "@/components/Projects/ProjectComponents/ProjectComponent";

export async function generateMetadata() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);

    if (!response.ok) {
      console.log('Network response was not ok.');
    }

    const data = await response.json();
    const metaData = data?.metaData?.[0] || {};
    const {
      title = 'Best General Contractor in Brooklyn | RH Construction USA Inc.',
      description = `Best general contractor in Brooklyn, specializing in home renovations, bathroom 
      renovations & kitchen remodeling, roofing, and construction services.`,
      keywords = `General Contractor, General Contractor in Brooklyn, 
      RH Construction USA Inc, home renovations, bathroom & kitchen remodeling, roofing` }
      = metaData;

    return {
      title,
      description,
      keywords,
    };
  } catch (error) {
    console.error('Error fetching metadata:', error.message);
    return {
      title: 'Best General Contractor in Brooklyn | RH Construction USA Inc.',
      description: 'Best general contractor in Brooklyn, specializing in home renovations, bathroom renovations & kitchen remodeling, roofing, and construction services.',
      keywords: 'General Contractor, General Contractor in Brooklyn, RH Construction USA Inc, home renovations, bathroom & kitchen remodeling, roofing',
    };
  }
}

export default async function Page() {
  const res = await getData();

  if (res?.status !== 200) {
    return <p>Failed To Get Data!!!</p>;
  }

  const projects = res?.data || [];

  return (
    <main>
      <ProjectsComponent projects={projects} />
    </main>
  );
}

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project-details`, { cache: 'no-store' });

    if (!res.ok) {
      console.log('Failed to fetch data');
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching project details:', error.message);
  }
}
