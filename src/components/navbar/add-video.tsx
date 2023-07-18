import React, { useEffect, useState } from "react";
import LayoutComp from "../layout-component";
import ButtonCustom from "../button-custom";
import { AddVideo } from "../icons-svg";
import MyTooltip from "../tooltip";

const AddVideoLocal = () => {
  const handleChange = (e: any) => {
    let videoCurrent = document.getElementById("screen-video");
    const file = e.target.files[0];
    if (file instanceof Blob) {
      var reader = new FileReader();
      reader.onload = function (e: any) {
        videoCurrent?.setAttribute("src", `${e.target.result}`);
      };
      reader.readAsDataURL(e?.target.files[0]);
    }
    //xóa file đã chọn trong input
    let inputFile = document.getElementById('upload-photo'); 
    if (inputFile instanceof HTMLInputElement) {
      inputFile.value = '';
    }
  };
  return (
    <>
      <LayoutComp className="px-2 hover:opacity-90 opacity-70 ">
        <MyTooltip text="Upload file .mp4" className="w-20">
        <ButtonCustom className={"text-white"}>
          <label htmlFor="upload-photo" className="cursor-pointer">
            <AddVideo />
          </label>
          <input
            accept="video/mp4, .mp4"
            type="file"
            id="upload-photo"
            onChange={handleChange}
          />
        </ButtonCustom>
        </MyTooltip>
      </LayoutComp>
    </>
  );
};

export default AddVideoLocal;
