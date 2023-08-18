"use client";
import API from "@/config/API.config";
import { errorMessage } from "@/libs/utils";
import { Alert, Spinner } from "@material-tailwind/react";
import useSwr from "swr";
import CreateBlog from "../create/CreateBlog";

export default function ({ params }) {
  const { data, error, isLoading } = useSwr(
    `/blogs/${params?.id}`,
    async (api_end_point) => {
      try {
        const {data} = await API.get(api_end_point);
        return data;
      } catch (error) {
        throw errorMessage(error);
      }
    }
  );
  if (isLoading)
    return (
      <div className="absolute top-0 left-0 z-50 h-full w-full bg-black/30 backdrop-blur-sm backdrop-saturate-150 flex justify-center items-center">
        <Spinner />
      </div>
    );
  return (
    <main>
      <section className="py-10 container-fluid">
        {error && (
          <Alert variant="ghost" color="red">
            {error}
          </Alert>
        )}
        {data?.id && <CreateBlog blog={data} />}
      </section>
    </main>
  );
}
