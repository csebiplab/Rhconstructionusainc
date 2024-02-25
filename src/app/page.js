import { PageWrapper } from "@/components/Theme";
import Home from "./Home";

import API from "@/config/API.config";
import { headers } from "next/headers";
export async function generateMetadata() {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  try {
    const { data } = await API.get('/pages', {
      params: {
        route: pathname
      }
    });
    if (!data?.length) throw "no route found."
    return {
      title: data?.[0]?.title,
      keywords: data?.[0]?.keywords,
      description: data?.[0]?.description,
    }
  } catch (error) {
    console.log(error.message);
    return {
      title: "Construction Company in Brooklyn | RH Construction USA Inc.",
      keywords: "Home, RH Construction USA",
      description: "As one of the leading construction companies in Brooklyn, RH Construction USA Inc. offers top-notch general contractor services in Brooklyn."
    };
  }
}

export default function Page() {
  // return <PageBuilder/>
  return (
    <main className="min-h-screen">
      <PageWrapper>
        <Home />
      </PageWrapper>
    </main>
  )
}
