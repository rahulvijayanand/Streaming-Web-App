import React, { useState, useEffect } from "react";
import axios from "axios";
import Video from "../components/video";
import Filter from "../components/filter";
import { css } from "@emotion/react";
import { BounceLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Home({ searchQuery }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ypapi.formz.in/api/public/videos"
        );
        setVideos(response.data);
        setLoading(false);

        const uniqueCategories = [
          ...new Set(response.data.map((video) => video.category)),
        ];
        setCategories(["All", ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  const filteredVideos =
    activeFilter === "All"
      ? videos
      : videos.filter(
          (video) => video.category.toLowerCase() === activeFilter.toLowerCase()
        );

  const searchedVideos = filteredVideos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Filter
        categories={categories.map((category) =>
          category.toLowerCase() === "all"
            ? category
            : capitalizeFirstLetter(category)
        )}
        activeCategory={activeFilter}
        onCategoryClick={handleFilterClick}
      />
      <div className="container mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <BounceLoader
              color="#ffffff"
              loading={loading}
              css={override}
              size={50}
            />
          </div>
        ) : searchedVideos.length === 0 ? (
          <div className="text-white">No videos available</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            {searchedVideos.map((video, index) => (
              <Video
                key={index}
                thumbnail={video.thumbnail}
                duration={video.duration}
                title={video.title}
                channelLogo={video.channelPicture}
                channelName={video.channelName}
                views={video.views}
                uploadedAt={video.uploadedDateTime}
                category={video.category}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
