import React from "react";

const VideoPlayer = ({ title, videoUrl, muted }) => {
  return (
    <div className="">
      <div className="w-auto">
        <video
          className="inset-0 w-full h-full object-cover rounded-md border"
          src={videoUrl}
          title={title}
          autoPlay
          loop
          muted={muted}
          style={{ objectFit: "cover", maxHeight: "80vh" }}
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;