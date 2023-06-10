import * as React from 'react';
import { cloud } from '@/apis';
export interface IAudioProps {
}
  const audioArray = [
    'music1_hcetaj.mp3',
    'music2_xxsewo.mp3'
  ]
 const AudioMusic = React.memo(({audioRef}:any) =>{
  
  return (
    <div className='hidden'>
      <audio controls ref={audioRef}>
        <source src={`${cloud}/${audioArray[1]}`} type="audio/mp3"></source>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
})
AudioMusic.displayName = 'AudioMusic'

export default AudioMusic