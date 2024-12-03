import React, { useRef , useState } from "react";
import sampleVideo from "../assets/tree.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  function handleVideoPlayer(option, seek = 0) {
    if (option === "play") {
      videoRef.current.play();
    } else if (option === "pause") {
      videoRef.current.pause();
    } else if (option === "seek") {
      videoRef.current.currentTime = videoRef.current.currentTime + seek;
    } else {
      return;
    }
    return;
  }

  function handleError() {
    setVideoError(true);
  }

  return (
    <div id="video-player-container">
        <h1 style={{textAlign:"center"}}>Video Player</h1>
      {videoError ? (
        <div>
          <p>Oops! The video failed to load. Please try again later</p>
        </div>
      ) : (
        <div>
          <div>
            <video ref={videoRef} controls muted width="600" onError={handleError}>
              <source src={sampleVideo} type="video/mp4" />
            </video>
          </div>

          <div id="controls">
            <button className="btn seek-btn"  onClick={() => handleVideoPlayer("seek", -10)}>⏪</button>
            <button className="btn" id="play-btn" onClick={() => handleVideoPlayer("play")}>◀️</button>
            <button className="btn" id="pause-btn" onClick={() => handleVideoPlayer("pause")}>⏸️</button>  
            <button className="btn seek-btn"  onClick={() => handleVideoPlayer("seek", 10)}>⏩</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
