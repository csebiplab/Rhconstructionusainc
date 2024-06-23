"use client"

import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchData from "@/hooks/useFetchData";

const page = ({ params }) => {
    const { id } = params;
    const endPoints = "kitchen-remodelling-in-brooklyn";

    const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/kitchen-remodelling-in-brooklyn/${id}`;
    const { data, loading, error } = useFetchData(baseAPIUrl)


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const { data: metaData } = data;

    const { title, description, keywords } = metaData;
    return (
        <ShareComponent
            id={id}
            titleValue={title}
            descriptionValue={description}
            keywordsValue={keywords}
            endPoints={endPoints}
        />
    );
};

export default page;


