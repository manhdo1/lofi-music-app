import React, { useEffect, useState } from 'react'
import LayoutComp from '../layout-component'
import ButtonCustom from '../button-custom'
import { AddVideo } from '../icons-svg'

const AddVideoLocal = () => {
  const handleChange = (e:any) => {
    let videoCurrent = document.getElementById('screen-video')
 
    var reader = new FileReader();
    reader.onload = function(e:any) {
      videoCurrent?.setAttribute('src',`${e.target.result}`)
    };
    console.log(e?.target.files);
    
    reader.readAsDataURL(e?.target.files[0]);
  };
  return (
    <>
    <LayoutComp className="px-2 hover:opacity-90 opacity-70 ">
        <ButtonCustom className={"text-white"}>
            <label htmlFor="upload-photo" className='cursor-pointer'><AddVideo /></label>
            <input accept='video/mp4, .mp4' type="file" id="upload-photo" onChange={handleChange}/>
        </ButtonCustom>
      </LayoutComp>
    </>
  )
}

export default AddVideoLocal