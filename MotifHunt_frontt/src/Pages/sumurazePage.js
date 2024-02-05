import { motion as m } from "framer-motion";
import React, { useState } from "react";
import axios from "axios";

const YouTubeUploader = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
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
    formData.append("file", videoFile);
    formData.append("title", videoTitle);
    formData.append("description", videoDescription);

    try {
      const response = await axios.post(
        `https://www.googleapis.com/upload/youtube/v3/videos?part=snippet&key=YOUR_API_KEY`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Video uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  return (
    <div className="col-md-9 ">
         <h1 className="text-center mb-5">YouTube Video Uploader</h1>
      <div className="mb-3">
        <label className="mb-2">Title:</label>
        <input
          placeholder="Title"
          className="custom-input form ps-2 rounded-3"
          type="text"
          value={videoTitle}
          onChange={handleTitleChange}
        />
      </div>

      <div className="mb-3">
        <label className="mb-2">Description:</label>
        <textarea
          placeholder="Description"
          className="custom-input form ps-2 rounded-3"
          value={videoDescription}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="mb-2">Choose a video file:</label>
          <label className="custom-input mb-2 form py-1 rounded-3 text-center" type="button" for="file">
            <i class="fa-solid fa-upload ps-3"></i>{" "}
          </label>
        <input
          name="file"
          hidden
          id="file"
          placeholder="Video"
          className="custom-input form  ps-2 rounded-3"
          type="file"
          accept="video/*"
          onChange={handleFileChange}
        />
      </div>
      <div className=" d-flex  justify-content-center align-items-center">
        <button
          className="btn-custom px-3  rounded-3"
          style={{ width: "max-content" }}
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

const Sumaraze = () => {
  return (
    <div className="container" style={{ marginTop: "10vh", minHeight: "90vh" }}>
        <m.div className="row d-flex justify-content-center "
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        >
          <YouTubeUploader />
        </m.div>
    </div>
  );
};

export default Sumaraze;
