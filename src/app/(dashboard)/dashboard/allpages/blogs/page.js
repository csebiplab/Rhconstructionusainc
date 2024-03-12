"use client";

import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchData from "@/hooks/useFetchData";



const Page = () => {
  const editRoute = "dashboard/allpages/blogs/editblogs";
  const endPoints = "blogs";

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + '/api/blogs'
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
        blogRouteAllMetaData={data?.blogRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default Page;
