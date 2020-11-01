import "./VideoItem.css";
import * as timeago from "timeago.js";

const VideoItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.medium.url;
  const { title, publishedAt } = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img src={imageUrl} alt={title} className="ui small image" />
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">
          Published at {timeago.format(publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
