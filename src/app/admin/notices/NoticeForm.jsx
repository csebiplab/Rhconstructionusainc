"use client";

import API from "@/config/API.config";
import { errorMessage } from "@/libs/utils";
import { Button, Input } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];

const NoticeForm = ({ notice: old_notice }) => {
  const [title, setTitle] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    if (!title || !notice) {
      Swal.fire({
        title: "Title and Notice are required.",
        icon: "warning",
      });
      return;
    }
    try {
      setLoading(true);
      old_notice?.id
        ? await API.patch(`/notices/${old_notice?.id}`, { title, notice })
        : await API.post(`/notices`, { title, notice });
      Swal.fire({
        title: !old_notice?.id ? "Created" : "Updated Notice",
        icon: "success",
      });
      setTitle('')
      setNotice('')
    } catch (error) {
      Swal.fire({
        title: "Failed",
        icon: "error",
        text: errorMessage(error),
      });
    } finally {
      setLoading(true);
    }
  }
  useEffect(() => {
    setTitle(old_notice?.title);
    setNotice(old_notice?.notice);
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e?.target?.value)}
          variant="standard"
        />
      </div>
      <div className="mb-3">
        <p className="mb-2 font-medium">Notice</p>
        <ReactQuill
          value={notice}
          onChange={(val) => setNotice(val)}
          modules={modules}
          formats={formats}
          theme="snow"
          placeholder="write notice here."
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button
          type="submit"
          variant="filled"
          disabled={loading || !title || !notice}
        >
          Submit
        </Button>
        <Button
          type="reset"
          onClick={() => {
            setTitle("");
            setNotice("");
          }}
          disabled={loading || !title || !notice}
          variant="text"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default NoticeForm;
