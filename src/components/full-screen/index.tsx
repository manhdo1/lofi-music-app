import React, { useEffect, useRef, useState } from "react";
import ButtonCustom from "../button-custom";
import { FullScreen, SmallScreen } from "../icons-svg";
import LayoutComp from "../layout-component";
const FullSmallGreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(true);
  };
  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFullScreen(false);
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(document.fullscreenElement ? true : false);
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);
  return (
    <>
      <LayoutComp className="px-2 hover:opacity-90 opacity-70 ">
        <ButtonCustom
          className={"text-white"}
          onClick={isFullScreen ? exitFullScreen : enterFullScreen}
        >
          {isFullScreen ? <SmallScreen /> : <FullScreen />}
        </ButtonCustom>
      </LayoutComp>
    </>
  );
};

export default FullSmallGreen;
