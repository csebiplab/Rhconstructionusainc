import { PageWrapper } from "@/components/Theme";
import ContactUs from "./ContactUs";

export async function generateMetadata() {
  try {
    const metaData = await fetch(`${process.env.NEXT_PUBLIC_LIVE_API}/api/contactUs`).then((res) => res.json())

    if (metaData.contactRouteAllMetaData?.length === 0) {
      return {
        title: "Contact Us | RH Construction USA",
        keywords: "Contact Us, RH Construction USA",
      };
    }


    return {
      title: metaData?.contactRouteAllMetaData[0]?.title,
      description: metaData?.contactRouteAllMetaData[0]?.description,
      keywords: metaData?.contactRouteAllMetaData[0]?.keywords

    }
  } catch (error) {
    return {
      title: "Contact Us | RH Construction USA",
      keywords: "Contact Us, RH Construction USA",
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
//       title: "Contact Us | RH Construction USA",
//       keywords: "Contact Us, RH Construction USA",
//     };
//   }
// }

export default function Page() {
  return (
    <main>
      <PageWrapper>
        <ContactUs />
      </PageWrapper>
    </main>
  );
}
