"use client";

import SiteVerificationComponent from "@/components/siteMapComponent/SiteMapComponent";
import useFetchData from "@/hooks/useFetchData";


export default function SeoSiteVerification() {
  // const { verificationUrl } = await getVerificationData() ?? {};
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL + `/api/verificationUrl`;
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
      <SiteVerificationComponent verificationUrl={data?.verificationUrl} />
    </>
  );
}

