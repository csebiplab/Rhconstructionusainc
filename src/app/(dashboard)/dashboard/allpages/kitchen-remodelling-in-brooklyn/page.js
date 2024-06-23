"use client";

import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchData from "@/hooks/useFetchData";



const Page = () => {
    const editRoute = "dashboard/allpages/kitchen-remodelling-in-brooklyn/edit";
    const endPoints = "kitchen-remodelling-in-brooklyn";

    const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + '/api/kitchen-remodelling-in-brooklyn'
    const { data, loading, error } = useFetchData(baseAPIUrl)


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }




    return (
        <>
            <ShareComponent
                editPath={editRoute}
                blogRouteAllMetaData={data?.data}
                endPoints={endPoints}
            />
        </>
    );
};

export default Page;
