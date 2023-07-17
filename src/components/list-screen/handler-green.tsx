
export const handleChange = (item:any,isOnline:boolean) => {
    if (!isOnline) {
      alert("Lỗi mạng mất kết nối")
      return
    } 
    let videoCurrent = document.getElementById('screen-video')
    let videoUrl = videoCurrent?.getAttribute('src')
    let fileName = videoUrl?.substring(videoUrl.lastIndexOf('/') + 1, videoUrl.lastIndexOf('.'));
    //kiểm tra video hiện tại và video muốn thay đổi
    if (fileName !== item.video) {
      videoCurrent?.classList.add('hide');
      setTimeout(function() {
        videoCurrent?.setAttribute('src',`assets/videos/${item.video}.mp4`)
        videoCurrent?.classList.remove('hide');
      }, 500);
    }
  };