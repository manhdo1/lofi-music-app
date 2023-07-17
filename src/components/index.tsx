"use client";
import * as React from "react";
import style from "./video.module.css";
import Navbar from "./navbar";
import Lock from "./lock";
import DraggableTodo from "./draggable";
import LoadPage from "./load-page";
import MobileUi from "./mobile";
interface PosComponent {
  children: React.ReactNode,
  className: string
} 
export default function HomePage() {
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  React.useEffect(() => {
    handleResize();
    setTimeout(() => {
      setIsLoaded(false);
    }, 4000);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileUi />
      ) : isLoaded ? (
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
          <PosComp className="w-0">
            <DraggableTodo />
          </PosComp>
          <PosComp className="h-0">
            <Lock />
          </PosComp>
        </div>
      )}
    </>
  );
}
const PosComp = ({ children,className }:PosComponent) => {
  return (
    <>
      <div className={`${className} absolute`}>
        {children}
      </div>
    </>
  );
};
