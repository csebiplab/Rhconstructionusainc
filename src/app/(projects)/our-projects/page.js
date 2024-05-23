import ProjectsComponent from "@/components/Projects/ProjectComponents/ProjectComponent";

export async function generateMetadata() {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
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

export default async function Page() {
  const res = await getData()

  if (res?.status !== 200) {
    <p>Failed To Get Data!!!</p>
  }

  const projects = res?.data;

  // console.log(projects)

  return (
    <main>
      <>
        <ProjectsComponent projects={projects} />
      </>
    </main>
  );
}
async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/project-details', { cache: 'no-store' })

  if (!res.ok) {
    console.log('Failed to fetch data')
  }

  return res.json()
}