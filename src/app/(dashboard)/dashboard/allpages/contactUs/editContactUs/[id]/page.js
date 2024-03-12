"use client";

import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchData from "@/hooks/useFetchData";

const Page = ({ params }) => {
  const { id } = params;
  const endPoints = "contactUs";

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/contactUs/${id}`;
  const { data, loading, error } = useFetchData(baseAPIUrl)


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { contactUs } = data;

  const { title, description, keywords } = contactUs ?? {};
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

export default Page;