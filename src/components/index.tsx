"use client";
import * as React from "react";
import style from "./video.module.css";
import Navbar from "./navbar";
import Lock from "./lock";
import DraggableTodo from "./draggable";
import LoadPage from "./load-page";
import MobileUi from "./mobile";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false)
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  React.useEffect(() => {
    handleResize()
    setTimeout(() => {
      setIsLoaded(false);
    }, 4000);
  
  }, []);
  
  return (
    <>
    {isMobile ? (
        <MobileUi/>
      ) : (
        isLoaded ? (
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
            <div className="absolute w-0">
              <DraggableTodo />
            </div>
            
            <div className="absolute h-0">
              <Lock />
            </div>
          </div>
        )
      )}
    </>
  );
}
