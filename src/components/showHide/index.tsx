import * as React from "react";
import { EyeHide, EyeShow } from "../icons-svg";

export interface IShowHideProps {}

const ShowHideButton = React.memo(({ isShow }: any) => {
  return <>{isShow ? <EyeShow /> : <EyeHide />}</>;
});
ShowHideButton.displayName = "ShowHideButton";
export default ShowHideButton;
