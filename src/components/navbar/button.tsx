"use client";
import * as React from "react";
import AudioMusic from "./audio";
import InputRange from "../input-range";
import ButtonCustom from "../button-custom";
import { BackBtn, NextBtn, PauseBtn, PlayBtn } from "../icons-svg";

export interface IButtonActionProps {}

export default function ButtonAction(props: IButtonActionProps) {
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
  return (
    <>
      <AudioMusic audioRef={audioRef} />
      <div className="flex space-x-4 px-2 bg-black opacity-60 rounded-lg ">
        <ButtonCustom className={'text-white'}>
          <BackBtn />
        </ButtonCustom>
        <ButtonCustom className={'text-white'} onClick={togglePlay}> 
          {!isPlaying ? <PauseBtn /> : <PlayBtn />}
            </ButtonCustom>
        <ButtonCustom className={'text-white'}>
          <NextBtn />
        </ButtonCustom>
      </div>
      <div className="flex h-10 px-2 bg-black opacity-50 rounded-lg ">
        <InputRange handleVolumeChange={handleVolumeChange} volume={volume} />
      </div>
    </>
  );
}
