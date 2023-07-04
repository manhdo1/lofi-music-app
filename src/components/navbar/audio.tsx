import * as React from 'react';
import { cloud } from '@/apis';
import { audioArray } from '@/constants/audio';
export interface IAudioProps {
}
  
 const AudioMusic = React.memo(({audioRef,prev}:any) =>{
  return (
    <div className='hidden'>
      <audio controls ref={audioRef}>
        <source src={`${cloud}/${audioArray[prev]}`} type="audio/mp3"></source>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
})
AudioMusic.displayName = 'AudioMusic'

export default AudioMusic