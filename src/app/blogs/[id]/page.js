import API from "@/config/API.config";
import SingleBlog from "./SingleBlog";

export async function generateMetadata({ params }) {
   try {
        const id=params?.id;
        const {data}=await API.get(`/blogs/${id}`);
        return {
            title: `${data.title}`,
            keywords: data?.keywords,
            description : data?.description
        }
   } catch (error) {
    return {
        title:"Not found",
    }
   }
  }

export default async function({params}){
    return(
        <main className="bg-indigo-50/30 py-10">
            <section>
                <div className="container">
                    <SingleBlog params={params} />
                </div>
            </section>
        </main>
    )
}