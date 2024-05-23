import CategoryWiseProject from "@/components/Projects/CategoryWiseProject/CategoryWiseProject";

export default async function Page({ params }) {
    const data = await getData(params?.projectCat)


    return <div>
        <CategoryWiseProject cateGoryWiseProjects={data?.data} category={params?.projectCat} />
    </div>
}

async function getData(query) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/project-details?projectCat=${query}`,
        { cache: 'no-store' }
    )

    if (!res.ok) {
        console.log('Failed to fetch data')
    }

    return res.json()
}