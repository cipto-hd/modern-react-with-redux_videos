import { Component } from "react";
import { getYoutubePopVideos, getYoutubeVideos } from "../apis/Youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends Component {
  state = {
    isInitialLoad: true,
    isSearched: false,
    isLoading: false,
    videos: [],
    selectedVideo: null,
  };

  onSearchTerm = async (term) => {
    this.setState({ isSearched: true, isLoading: true, isInitialLoad: false });
    const videos = await getYoutubeVideos(term);
    this.setState({ videos, isLoading: false });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
      isSearched: false,
      isInitialLoad: false,
    });
  };

  getYoubeDefaultVideos = async () => {
    this.setState({ isLoading: true });
    const videos = await getYoutubePopVideos();
    this.setState({ videos, isLoading: false });
  };

  componentDidMount() {
    this.getYoubeDefaultVideos();
  }

  render() {
    const {
      isInitialLoad,
      isSearched,
      isLoading,
      videos,
      selectedVideo,
    } = this.state;
    return (
      <div className="ui container" style={{ paddingTop: "10px" }}>
        <SearchBar onFormSubmit={this.onSearchTerm} />

        {(isLoading && <div>Loading...</div>) ||
          (isInitialLoad && <div> Most popular videos on Youtube:</div>) ||
          (isSearched && <div>Found: {videos.length} videos</div>)}
        <div className="ui stackable sixteen column grid">
          <div className="row">
            {!isSearched && (
              <div className="ten wide column">
                {selectedVideo && <VideoDetail video={selectedVideo} />}
              </div>
            )}
            <div
              className={
                (isInitialLoad || isSearched ? "sixteen" : "six") +
                " wide column"
              }
            >
              {videos.length !== 0 && !isLoading && (
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
