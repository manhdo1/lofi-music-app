"use client";
import * as React from "react";
import style from "./video.module.css";
import Navbar from "./navbar";
import Lock from "./lock";
import DraggableTodo from "./draggable";
export interface IHomeProps {}

export default function HomePage(props: IHomeProps) {
  return (
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
      <Lock />
      <DraggableTodo />
    </div>
  );
}
