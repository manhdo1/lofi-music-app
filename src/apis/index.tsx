import fs from 'fs';
import path from 'path';
export default function Video({ videoPath }:any) {
  const filePath = path.resolve(videoPath);
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;

  const stream:any = fs.createReadStream(filePath);

  return (
    <video controls>
      <source src={stream} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export async function getServerSideProps() {
  const videoPath = '../assets/videos/video1.mp4'; // Đường dẫn tới file video không công khai

  return {
    props: {
      videoPath,
    },
  };
}
