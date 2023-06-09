import * as React from "react";
import style from "./video.module.css";
import Navbar from "./navbar";
export interface IHomeProps {}

export default function HomePage(props: IHomeProps) {
  
  return (
    <div className={style.videoContainer}>
      <video
        className={style.video}
        autoPlay
        // muted
        loop
        src={"assets/videos/video2.mp4"}
      />
     <Navbar/> 
    </div>
  );
}
