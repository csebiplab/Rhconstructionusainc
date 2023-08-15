"use client";

import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles

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
  const [content, setContent] = useState("");

  return (
    <div className="container">
      <div className="my-4">
        <h3 className="mb-3">Create a blog post.</h3>

        <form>
          <div className="mb-4">
            <Input
            variant="standard" label="Title" name="title" type="text" />
          </div>
          <div className="mb-4">
            <Input
            variant="standard" label="Slug" name="slug" type="text" />
          </div>
          <div className="mb-4">
            <Input
            variant="standard"
              label={`Key words [separate by comma (,)]`}
              name="title"
              type="text"
            />
          </div>
          <div className="mb-4">
            <Textarea
            variant="standard"
              size="md"
              label={`Description`}
              name="title"
              type="text"
            />
          </div>
          <div className="mb-4">
            <Input
            variant="standard"
              label={`Banner Image`}
              name="banner"
              type="file"
            />
          </div>
        </form>
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
        <Button variant="filled" color="red" >
            CANCEL
        </Button>
        <Button variant="filled" color="gray-600" >
            SAVE
        </Button>
        <Button variant="filled" color="indigo" >
            PUBLISH
        </Button>
      </div>
    </div>
  );
};

export default CreateBlog;
