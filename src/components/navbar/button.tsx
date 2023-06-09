"use client";
import * as React from "react";
import AudioMusic from "./audio";
import InputRange from "../input-range";
import ButtonCustom from "../button-custom";
import {
  BackBtn,
  FullScreen,
  ListMusicBtn,
  NextBtn,
  PauseBtn,
  PlayBtn,
  SmallScreen,
} from "../icons-svg";
import LayoutComp from "../layout-component";
import FullSmallGreen from "../full-screen";

export interface IButtonActionProps {}

const ButtonAction = React.memo((props: IButtonActionProps) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const togglePlay = React.useCallback(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleVolumeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(event.target.value);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }
      setVolume(newVolume);
    },
    []
  );
  const handleHover = () => {
    console.log("hover");
  };
  return (
    <>
      <AudioMusic audioRef={audioRef} />

      <LayoutComp className="px-2">
        <ButtonCustom className={"text-white px-2 hover:opacity-90 opacity-70 "}>
          <BackBtn />
        </ButtonCustom>
        <ButtonCustom className={"text-white px-2 hover:opacity-90 opacity-70 "} onClick={togglePlay}>
          {!isPlaying ? <PauseBtn /> : <PlayBtn />}
        </ButtonCustom>
        <ButtonCustom className={"text-white px-2 hover:opacity-90 opacity-70 "}>
          <NextBtn />
        </ButtonCustom>
      </LayoutComp>
      <LayoutComp className="px-2 hover:opacity-90 opacity-70 ">
        <InputRange handleVolumeChange={handleVolumeChange} volume={volume} />
      </LayoutComp>

      <LayoutComp className="px-2 hover:opacity-90 opacity-70 " >
        <ButtonCustom className={"text-white"}>
          <ListMusicBtn />
        </ButtonCustom>
      </LayoutComp>
      <FullSmallGreen/>
    </>
  );
});
ButtonAction.displayName = "ButtonAction";
export default ButtonAction;
