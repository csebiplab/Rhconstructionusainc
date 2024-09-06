import { PageWrapper } from "@/components/Theme";
import Notice from "./Notice";


import API from "@/config/API.config";
import { headers } from "next/headers";
export async function generateMetadata() {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  try {
    const {data}= await API.get('/pages',{
      params:{
        route:pathname
      }
    });
    if(!data?.length) throw "no route found."
    return {
      title: data?.[0]?.title,
      keywords: data?.[0]?.keywords,
      description: data?.[0]?.description,
    }
  } catch (error) {
   console.log(error.message);
   return {
      title: "Notices | RH Construction USA",
      keywords: "Notices, RH Construction USA",
    };
  }
}

export default function Page() {
  return (
    <main>
      <PageWrapper>
        <Notice />
      </PageWrapper>
    </main>
  );
}
