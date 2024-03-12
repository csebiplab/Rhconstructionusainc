"use client";

import React from "react";
import SiteVerificationComponent from "@/components/siteMapComponent/SiteMapComponent";
import useFetchData from "@/hooks/useFetchData";

const page = ({ params }) => {
  const { id } = params;
  // console.log("siteMap data", await getSiteMapDataById(id));
  // const sitemapData = await getSiteMapDataById(id);

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/siteMap/${id}`;
  const { data, loading, error } = useFetchData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { sitemapData } = data;
  const { title, url } = sitemapData;
  return <SiteVerificationComponent id={id} titleValue={title} urlValue={url} />;
  // return <SiteMapComponent id={id} titleValue={"dd"} urlValue={"dd"} />;
};

export default page;

