import { PageWrapper } from "@/components/Theme";
import API from "@/config/API.config";
import { headers } from "next/headers";
import Home from "./Home";

export async function generateMetadata({ params,...rest }) {
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
   return {
    title:'Home',
   } 
  }
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <PageWrapper>
        <Home />
      </PageWrapper>
    </main>
  )
}
