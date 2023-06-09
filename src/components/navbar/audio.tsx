import * as React from 'react';

export interface IAudioProps {
}

 const AudioMusic = React.memo(({audioRef}:any) =>{
  return (
    <div className='hidden'>
      <audio controls ref={audioRef}>
        <source src="assets/audios/music2.mp3" type="audio/mp3"></source>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
})
AudioMusic.displayName = 'AudioMusic'

export default AudioMusic