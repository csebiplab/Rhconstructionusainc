"use client"

import TagList from "@/components/BlogComponents/TagList";
import useFetchData from "@/hooks/useFetchData";
import React from "react";
export default function page() {

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/blogTag`;
  const { data, loading, error } = useFetchData(baseAPIUrl)


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <TagList allTaglist={data?.blogTags} />
    </div>
  );
}