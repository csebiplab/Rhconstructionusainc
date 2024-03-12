"use client";

import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchData from "@/hooks/useFetchData";


const page = () => {
  const editRoute = "dashboard/allpages/home/editHome";
  const endPoints = "home";
  // const { homeRouteAllMetaData } = await getHomeMetaData() ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/home`;
  const { data, loading, error } = useFetchData(baseAPIUrl)

  // console.log(data, loading, error, id)

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
        blogRouteAllMetaData={data?.homeRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

