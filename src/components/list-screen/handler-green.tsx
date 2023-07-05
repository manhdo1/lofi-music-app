export const handleChange = (props:any) => {
    let videoCurrent = document.getElementById('screen-video')
    let videoUrl = videoCurrent?.getAttribute('src')
    let fileName = videoUrl?.substring(videoUrl.lastIndexOf('/') + 1, videoUrl.lastIndexOf('.'));
    if (fileName !== props.video) {
      videoCurrent?.classList.add('hide');
      setTimeout(function() {
        videoCurrent?.setAttribute('src',`assets/videos/${props.video}.mp4`)
        videoCurrent?.classList.remove('hide');
      }, 500);
    }
  };