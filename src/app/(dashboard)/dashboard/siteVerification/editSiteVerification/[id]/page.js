"use client";

import SiteVerificationComponent from "@/components/siteMapComponent/SiteMapComponent";
import useFetchData from "@/hooks/useFetchData";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  // const { verificationData } = await getVerificationMetaDataById(id) ?? {};

  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/verificationUrl/${id}`;
  const { data, loading, error } = useFetchData(baseAPIUrl)

  // console.log(data, loading, error, id)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { verificationData } = data;

  const { title, url } = verificationData;
  return (
    <SiteVerificationComponent id={id} titleValue={title} urlValue={url} />
  );
};

export default page;
