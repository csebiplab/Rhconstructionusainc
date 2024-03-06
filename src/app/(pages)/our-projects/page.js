import { headers } from "next/headers";
import RC from "./RC";
import API from "@/config/API.config";
export async function generateMetadata() {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  try {
    const { data } = await API.get("/pages", {
      params: {
        route: pathname,
      },
    });
    if (!data?.length) throw "no route found.";
    return {
      title: data?.[0]?.title,
      keywords: data?.[0]?.keywords,
      description: data?.[0]?.description,
    };
  } catch (error) {
    console.log(error.message);
    return;
  }
}
export default function Page() {
  return (
    <main>
      <>
        <RC />
      </>
    </main>
  );
}
