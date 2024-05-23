import SingleProject from "@/components/Projects/CategoryWiseProject/SingleProject";

export default async function Page({ params }) {
    const projectname = params?.ProjectName?.split("-").join(" ")

    const data = await getData(projectname)

    return <div>
        <SingleProject singleproject={data?.data} />
    </div>
}

async function getData(query) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/project-details/${query}`,
        { cache: 'no-store' }
    )

    if (!res.ok) {
        console.log('Failed to fetch data')
    }

    return res.json()
}