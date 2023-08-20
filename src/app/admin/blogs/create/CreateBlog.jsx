"use client";

import API from "@/config/API.config";
import { errorMessage } from "@/libs/utils";
import { Button, Input, Spinner, Textarea } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles
import Swal from "sweetalert2";
import Editor from "./Editor";
const CreateBlog = ({ blog = {} }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: blog?.title,
      keywords: blog?.keywords,
    },
  });
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const handleSlug = (e) => setSlug(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const router = useRouter();
  async function onSubmit(data) {
    data = { slug, blog: content, description, ...data };
    if (!slug || !data.blog) return;
    try {
      const formData = new FormData();
      blog?.id ? null : formData.append("banner", data?.banner[0]);
      formData.append("title", data?.title);
      formData.append("slug", data?.slug);
      formData.append("keywords", data?.keywords);
      formData.append("description", data?.description);
      formData.append("blog", content);
      const { isConfirmed } = await Swal.fire({
        title: "Wanna publish?",
        text: 'If you wanna publish then press "Ok"',
        showCancelButton: true,
        showConfirmButton: true,
      });
      if (!isConfirmed) return;
      setLoading(true);
      console.log(blog);
      const result = blog?.id
        ? await API.patch(`/blogs/${blog?.id}`, formData)
        : await API.post("/blogs", formData);
      Swal.fire({
        title: "Published",
      });
      router.back();
      reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Failed.",
        text: errorMessage(error),
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const slug = watch("title")
      .toLocaleLowerCase()
      .split(" ")
      .filter((e) => !!e)
      .join("-");
    setSlug(encodeURI(slug));
  }, [watch("title")]);

  useEffect(() => {
    setContent(blog?.blog);
    setSlug(blog?.slug);
    setDescription(blog?.description);
  }, [blog?.id]);

  return (
    <main className="relative">
      {loading ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black/10 backdrop-blur-sm backdrop-saturate-150 z-50">
          <Spinner />
        </div>
      ) : null}
      <div className="container">
        <div className="my-4">
          <h3 className="mb-3">Create a blog post.</h3>
          <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
            <div className="mb-4">
              <Input
                variant="standard"
                defaultValue={blog?.title}
                {...register("title", { required: true })}
                label="Title"
                name="title"
                type="text"
              />
              {errors?.title && (
                <p className="text-red-500">* {errors?.title?.message}</p>
              )}
            </div>
            <div className="mb-4">
              <Input
                variant="standard"
                label="Slug"
                defaultValue={blog?.slug}
                value={slug}
                onChange={handleSlug}
                name="slug"
                type="text"
              />
              {!slug && <p className="text-red-500">* Required.</p>}
            </div>
            <div className="mb-4">
              <Input
                variant="standard"
                defaultValue={blog?.keywords}
                {...register("keywords", { required: true })}
                label={`Key words [separate by comma (,)]`}
                name="keywords"
                type="text"
              />
            </div>
            <div className="mb-4">
              <Textarea
                variant="standard"
                size="md"
                defaultValue={blog?.description}
                value={description}
                onChange={handleDescription}
                label={`Description`}
                name="title"
                type="text"
              />
            </div>
            {!blog?.id && (
              <div className="mb-4">
                <Input
                  variant="standard"
                  multiple={false}
                  accept="image/*"
                  {...register("banner", { required: true })}
                  label={`Banner Image`}
                  name="banner"
                  type="file"
                />
              </div>
            )}
            <Editor
              value={content || "<div></div>"}
              onChange={(val) => setContent(val)}
            />
            <div className="my-10 flex gap-2 flex-wrap justify-end">
              <Button variant="filled" color="red" type="reset">
                CANCEL
              </Button>
              <Button variant="filled" color="indigo" type="submit">
                PUBLISH
              </Button>
            </div>
            <pre>content:{content}</pre>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateBlog;
