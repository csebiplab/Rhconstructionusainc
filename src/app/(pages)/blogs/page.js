import { PageWrapper } from "@/components/Theme";
import Blogs from "./Blogs";


export async function generateMetadata() {
  try {
    const metaData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`).then((res) => res.json())

    if (metaData.blogRouteAllMetaData?.length === 0) {
      return {
        title: "Blogs | RH Construction USA",
        keywords: "Blogs, RH Construction USA",
      };
    }
    return {
      title: metaData?.blogRouteAllMetaData[0]?.title,
      description: metaData?.blogRouteAllMetaData[0]?.description,
      keywords: metaData?.blogRouteAllMetaData[0]?.keywords

    }
  } catch (error) {
    return {
      title: "Blogs | RH Construction USA",
      keywords: "Blogs, RH Construction USA",
    };
  }


}


// import API from "@/config/API.config";
// import { headers } from "next/headers";
// export async function generateMetadata() {
//   const headersList = headers();
//   const pathname = headersList.get("x-invoke-path") || "";
//   try {
//     const {data}= await API.get('/pages',{
//       params:{
//         route:pathname
//       }
//     });
//     if(!data?.length) throw "no route found."
//     return {
//       title: data?.[0]?.title,
//       keywords: data?.[0]?.keywords,
//       description: data?.[0]?.description,
//     }
//   } catch (error) {
//    console.log(error.message);
//    return {
//       title: "Blogs | RH Construction USA",
//       keywords: "Blogs, RH Construction USA",
//     };
//   }
// }


export default function Page() {
  return (
    <main>
      <PageWrapper>
        <Blogs />
      </PageWrapper>
    </main>
  );
}
