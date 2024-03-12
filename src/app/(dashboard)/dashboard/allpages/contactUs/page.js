"use client";

import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchData from "@/hooks/useFetchData";


const page = () => {
  const editRoute = "dashboard/allpages/contactUs/editContactUs";
  const endPoints = "contactUs";

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/contactUs`
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
        blogRouteAllMetaData={data?.contactRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;