"use client"
import API from "@/config/API.config";
import firebase_app from "@/config/firebase";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

function handleVideoIframe(node, delta) {
  var src = node.getAttribute("src");
  if (src && src.match(/^(https?:)?\/\/(www\.)?(youtube\.com|youtu\.be)\//)) {
    var videoId = src.match(
      /(?:\/embed\/|\/watch\?v=|\/v\/|\/embed\?video_id=|youtu\.be\/|\/\d{1,2}\/|\/embed\/videoseries\?list=)([^#\&\?]{11})/
    )[1];
    var videoDelta = {
      video: videoId,
    };
    delta.ops.push(videoDelta);
  }
  return delta;
}

function VideoBlot() {
  return (
    <iframe
      frameBorder="0"
      allowFullScreen
      style='width:100%\";aspectRatio:16/9;'
      src={`https://www.youtube.com/embed/${this.domNode.getAttribute(
        "src"
      )}`}
    />
  );
}

Quill.register(VideoBlot, true);

const Editor = ({ value, onChange }) => {
  const { quill, quillRef } = useQuill({
    placeholder: "Edit here...",
  });

  useEffect(() => {
    if (quill) {
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
    formData.append("image", file);
    try {
      const response = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: getAuth(firebase_app)?.currentUser?.accessToken,
        },
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
        insertToEditor(imageUrl);
      });
    };
  };

  const handleEditorChange = () => {
    const content = quill.root.innerHTML;
    onChange(content);
  };

  return (
    <div style={{ minHeight: 400, border: "1px solid lightgray" }}>
      <div ref={quillRef} placeholder="Editor" />
    </div>
  );
};

export default Editor;
