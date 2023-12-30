import { motion as m } from "framer-motion";
import React, { useState } from 'react';
import axios from 'axios';

const YouTubeUploader = () => {
    const [videoTitle, setVideoTitle] = useState('');
    const [videoDescription, setVideoDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);

    const handleTitleChange = (e) => {
        setVideoTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setVideoDescription(e.target.value);
    };

    const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', videoFile);
        formData.append('title', videoTitle);
        formData.append('description', videoDescription);

        try {
            const response = await axios.post(
                `https://www.googleapis.com/upload/youtube/v3/videos?part=snippet&key=YOUR_API_KEY`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log('Video uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    return (
        <div>
            <label>Title:</label>
            <input type="text" value={videoTitle} onChange={handleTitleChange} />

            <label>Description:</label>
            <textarea
                value={videoDescription}
                onChange={handleDescriptionChange}
            ></textarea>

            <label>Choose a video file:</label>
            <input type="file" accept="video/*" onChange={handleFileChange} />

            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};



const Sumaraze = () => {
    return (
        <m.div initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
        >

            <h1>YouTube Video Uploader</h1>
            <YouTubeUploader />
        </m.div >
    );
}

export default Sumaraze;