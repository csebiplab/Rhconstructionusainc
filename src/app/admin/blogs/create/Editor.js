"use client";
import API from "@/config/API.config";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

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

const Editor = ({ value, onChange }) => {
  const { quill, quillRef } = useQuill({
    placeholder: "Edit here...",
    modules,
    formats,
  });
  const [editor_value,setEditorValue]= useState(value);

  useEffect(() => {
    if (quill) {
      // Set the initial content of the editor
      quill.root.style.direction = "ltr";
      quill.clipboard.dangerouslyPasteHTML(value);
      quill.getModule("toolbar").addHandler("image", selectLocalImage);
      quill.on("editor-change", () => {
        onChange(quill.root.innerHTML);
      });
    }
  }, [quill]);

  const insertToEditor = (url) => {
    const range = quill.getSelection();
    quill.insertEmbed(range.index, "image", url);
  };

  const saveToServer = async (file) => {
    const formData = new FormData();
    console.log(file)
    formData.append("image", file);
    try {
      const response = await API.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const src = response.data.src;
      insertToEditor(src);
    } catch (error) {
      insertToEditor("no-image");
    }
  };

  const selectLocalImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      saveToServer(file).then((imageUrl) => {
        insertToEditor(imageUrl); // Insert the uploaded image URL
      });
    };
  };

  const handleEditorChange = () => {
    const content = quill.root.innerHTML;
    onChange(content); // Call the onChange callback with the updated content
  };

  return (
    <div style={{ minHeight: 400, border: "1px solid lightgray" }}>
      <div ref={quillRef} placeholder="Editor" onChange={handleEditorChange} />
    </div>
  );
};

export default Editor;
