"use client";
import * as React from "react";
import AudioMusic from "./audio";
import InputRange from "../input-range";
import ButtonCustom from "../button-custom";
import {
  AddVideo,
  BackBtn,
  ListMusicBtn,
  NextBtn,
  PauseBtn,
  PlayBtn,
} from "../icons-svg";
import LayoutComp from "../layout-component";
import FullSmallGreen from "../full-screen";
import ListScreen from "../list-screen";
import { audioArray } from "../../constants/constant";
import AddVideoLocal from "./add-video";

export interface IButtonActionProps {}

const ButtonAction = React.memo((props: IButtonActionProps) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);
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
  const loadTrack = () => {
    const audioElement = audioRef.current;
    audioElement?.load();
    audioElement?.play();
    setIsPlaying(true);
  };
  const handlePrev = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(audioArray.length - 1);
    }
    loadTrack();
  };
  const playNextTrack = () => {
    if (currentTrackIndex < audioArray.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
    loadTrack();
  };
  return (
    <>
      <AudioMusic audioRef={audioRef} prev={currentTrackIndex} />

      <LayoutComp className="px-2 opacity-70">
        <ButtonCustom
          onClick={handlePrev}
          className={"text-white px-2 hover:opacity-90 opacity-70 "}
        >
          <BackBtn />
        </ButtonCustom>
        <ButtonCustom
          className={"text-white px-2 hover:opacity-90 opacity-70 "}
          onClick={togglePlay}
        >
          {!isPlaying ? <PauseBtn /> : <PlayBtn />}
        </ButtonCustom>
        <ButtonCustom
          onClick={playNextTrack}
          className={"text-white px-2 hover:opacity-90 opacity-70 "}
        >
          <NextBtn />
        </ButtonCustom>
      </LayoutComp>
      <LayoutComp className="px-2 hover:opacity-90 opacity-70 ">
        <InputRange handleVolumeChange={handleVolumeChange} volume={volume} />
      </LayoutComp>
      <LayoutComp className="px-2 hover:opacity-90 opacity-70 ">
        <ListScreen />
      </LayoutComp>
      <FullSmallGreen />
      <AddVideoLocal/>
    </>
  );
});
ButtonAction.displayName = "ButtonAction";
export default ButtonAction;
