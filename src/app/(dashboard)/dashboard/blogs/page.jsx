"use client";

import React from "react";
import useFetchData from "@/hooks/useFetchData";
import BlogList from "@/components/BlogComponents/BlogList";
export default function page() {

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogContent`;
  const { data, loading, error } = useFetchData(baseAPIUrl)


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
