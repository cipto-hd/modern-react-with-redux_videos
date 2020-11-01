import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;
