import Axios from "axios";

const KEY = "AIzaSyDYfnpSc7FrOn97ueIdIg5gC64-rH8-4-s";

const Youtube = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

export const getYoutubeVideos = async (term) => {
  const response = await Youtube.get("search", {
    params: {
      q: term,
      type: "video",
    },
  });
  return response.data.items;
};
export const getYoutubePopVideos = async () => {
  const response = await Youtube.get("search", {
    params: {
      chart: "mostPopular",
      type: "video",
    },
  });
  return response.data.items;
};

export default Youtube;
