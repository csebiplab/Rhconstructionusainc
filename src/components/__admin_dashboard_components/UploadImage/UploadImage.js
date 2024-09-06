"use client";

import { useState } from 'react';

export default function UploadImageCom() {
    const [file, setFile] = useState(null);
    const [imageData, setImageData] = useState({ name: '', url: '' });

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        const res = await fetch('/api/upload-img', {
            method: 'POST',
            body: formData,
        });

        console.log(res)

        const data = await res.json();
        setImageData(data);
    };

    console.log(imageData)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            {imageData.url && (
                <div>
                    <p>Uploaded Image:</p>
                    <img src={imageData.url} alt={imageData.name} />
                    <p>Name: {imageData.name}</p>
                    <p>URL: {imageData.url}</p>
                </div>
            )}
        </div>
    );
}
