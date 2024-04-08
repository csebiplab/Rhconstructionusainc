import ContactUs from "./ContactUs";

export async function generateMetadata() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contactUs`);
    const metaData = await res.json();


    return {
      title: metaData?.contactRouteAllMetaData[0]?.title,
      description: metaData?.contactRouteAllMetaData[0]?.description,
      keywords: metaData?.contactRouteAllMetaData[0]?.keywords

    }
  } catch (error) {
    console.error(error)
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
      {/* <PageWrapper> */}
      <ContactUs />
      {/* </PageWrapper> */}
    </main >
  );
}
