import * as React from "react";
import ButtonCustom from "../button-custom";
import { ListMusicBtn } from "../icons-svg";
import { listVideo } from "@/constants/constant";
import './styles.css'
import { handleChange } from "./handler-green";
export default function ListScreen() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);
  React.useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      <div className={`relative flex group `}>
        <ButtonCustom className={"text-white"}>
          <ListMusicBtn />
        </ButtonCustom>
        <div
          id="dropdown"
          className={`z-40 hidden absolute top-10 -left-2  bg-[#2d241d] divide-y divide-gray-100 rounded-lg shadow w-32 max-h-60 overflow-auto dark:bg-gray-700  group-hover:block  transition-all duration-300`}
        >
          <ul
            className="py-2 text-sm text-white "
            aria-labelledby="dropdownDefaultButton"
          >
            {listVideo?.map((item: any, index) => {
              return (
                <li key={index}>
                  <ButtonCustom
                    onClick={()=>handleChange(item,isOnline)}
                    className={
                      "text-white font-semibold px-4 py-2 opacity-70 hover:opacity-100"
                    }
                  >
                    <video
                      width={100}
                      height={100}
                      src={`assets/videos/${item.video}.mp4#t=0.1`}
                    />
                  </ButtonCustom>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
