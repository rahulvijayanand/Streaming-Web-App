import React from "react";
import moment from "moment";

const formatViews = (views) => {
  views = views.replace(/,/g, "");

  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M Views";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K Views";
  } else {
    return views + " Views";
  }
};

const Video = ({
  thumbnail,
  duration,
  title,
  channelLogo,
  channelName,
  views,
  uploadedAt,
  category,
}) => {
  const uploadedTimeAgo = moment(uploadedAt).fromNow();

  return (
    <div className="relative rounded-lg p-4 shadow-md">
      <div className="relative">
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="mb-4 w-full h-auto rounded-3xl"
        />
        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full text-xs pops">
          {duration}
        </div>
      </div>
      <div
        className="text-3xl md:text-2xl lg:text-xl xl:text-2xl text-white font-semibold mb-2 pops max-w-96"
        style={{
          WebkitLineClamp: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </div>
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          <img
            src={channelLogo}
            alt="Channel Logo"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-[#6b7e8e] mx-2 text-sm md:text-sm lg:text-sm xl:text-md pops">
            {channelName}
          </span>
        </div>
      </div>
      <div className="flex items-center text-[#6b7e8e] pops text-sm md:text-sm lg:text-sm xl:text-md">
        <span>{formatViews(views)}</span>
        <span className="mx-2">•</span>
        <span>{uploadedTimeAgo}</span>
      </div>
    </div>
  );
};

export default Video;
