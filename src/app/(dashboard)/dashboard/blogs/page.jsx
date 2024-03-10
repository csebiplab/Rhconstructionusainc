"use client";

import React from "react";
import BlogList from "../../../../components/blogsComponent/BlogList/BlogList";
import useFetchMetaData from "@/hooks/useFetchMetaData";
export default function page() {

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogContent`;
  const { data, loading, error } = useFetchMetaData(baseAPIUrl)


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <BlogList allBlogList={data} />
    </div>
  );
}
