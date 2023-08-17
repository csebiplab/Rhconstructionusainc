"use client";

import API from "@/config/API.config";
import { errorMessage } from "@/libs/utils";
import { Button, Input, Spinner, Textarea } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles
import Swal from "sweetalert2";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "list",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "align",
  "link",
  "image",
];

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      keywords: "",
      banner: "",
    },
  });
  const [loading,setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const handleSlug = (e) => setSlug(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  async function onSubmit(data) {
    data = { slug, html: content,description , ...data };
    // if (!slug || !data.html) return;
    try {
      const {isConfirmed}=await Swal.fire({
        title:"Wanna publish?",
        text:'If you wanna publish then press "Ok"',
        showCancelButton:true,
        showConfirmButton:true
      });
      if(!isConfirmed) return;
      setLoading(true);

      const result= await API.post('/blogs',data);
      console.log(result);
      Swal.fire({
        title:"Published",
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        title:"Failed.",
        text:errorMessage(error)
      });
    }finally{
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

  return (
    <main className="relative">
      {loading ? (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black/10 backdrop-blur-sm backdrop-saturate-150 z-50">
          <Spinner  />
        </div>
      ):null}
      <div className="container">
      <div className="my-4">
        <h3 className="mb-3">Create a blog post.</h3>
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <div className="mb-4">
            <Input
              variant="standard"
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
              value={description}
              onChange={handleDescription}
              label={`Description`}
              name="title"
              type="text"
            />
          </div>
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
          <ReactQuill
            placeholder="Edit your post here."
            className="rounded-md shadow-lg border-2 border-gray-600 overflow-hidden min-h-[200px] my-5"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
          />
          <div className="my-10 flex gap-2 flex-wrap justify-end">
            <Button variant="filled" color="red" type="reset">
              CANCEL
            </Button>
            <Button variant="filled" color="indigo" type="submit">
              PUBLISH
            </Button>
          </div>
        </form>
      </div>
    </div>
    </main>
  );
};

export default CreateBlog;
