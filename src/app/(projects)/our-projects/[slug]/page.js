import CategoryWiseProject from "@/components/Projects/CategoryWiseProject/CategoryWiseProject";

export default async function Page({ params }) {
    // const data = await getData(params?.slug)
    // console.log(data)

    const data = []

    return <div>
        <CategoryWiseProject cateGoryWiseProjects={data} category={params?.slug} />
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