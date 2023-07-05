"use client";
import * as React from "react";
import style from "./video.module.css";
import Navbar from "./navbar";
import Lock from "./lock";
import DraggableTodo from "./draggable";
import LoadPage from "./load-page";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 4000);
  }, []);
  return (
    <>
      {isLoaded ? (
        <LoadPage />
      ) : (
        <div className={style.videoContainer}>
          <video
            id="screen-video"
            className={style.video}
            autoPlay
            muted
            loop
            src={"assets/videos/video1.mp4"}
          />
          <Navbar />
          <div className="absolute">
            <DraggableTodo />
          </div>
          
          <div className="absolute">
            <Lock />
          </div>
        </div>
      )}
    </>
  );
}
