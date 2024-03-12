"use client"

import ShareComponent from "@/components/shareComponent/ShareComponent";
import useFetchData from "@/hooks/useFetchData";


const page = ({ params }) => {
  const { id } = params;
  const endPoints = "blogs";
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogs/${id}`
  const { data, loading, error } = useFetchData(baseAPIUrl)


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { blogs } = data;

  const { title, description, keywords } = blogs;
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
