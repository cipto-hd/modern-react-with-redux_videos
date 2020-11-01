const VideoDetail = ({ video }) => {
  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  const { title, description } = video.snippet;

  return (
    <div style={{ backgroundColor: "#efefef" }}>
      <div className="ui embed">
        <iframe src={videoUrl} frameborder="0" title={title}></iframe>
      </div>
      <div className="ui segment" style={{ backgroundColor: "#e4e4e6" }}>
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
