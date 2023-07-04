import * as React from "react";
import ButtonCustom from "../button-custom";
import { ListMusicBtn } from "../icons-svg";
import Image from "next/image";
import { listVideo } from "@/constants/constant";

export interface IListScreenProps {}

export default function ListScreen(props: IListScreenProps) {
  
  return (
    <>
    <div className={`relative flex group `} >
      <ButtonCustom className={"text-white"}>
        <ListMusicBtn />
      </ButtonCustom>
      <div
        id="dropdown"
        className={`z-10 absolute top-10 -left-2  bg-[#2d241d] divide-y divide-gray-100 rounded-lg shadow w-32 max-h-60 overflow-auto dark:bg-gray-700 hidden group-hover:block  transition-all duration-300`}
      >
        <ul
          className="py-2 text-sm text-white "
          aria-labelledby="dropdownDefaultButton"
        >
          {listVideo.map((item:any,index) => {
            return (
          <li key={index}>
            <ButtonCustom className={"text-white font-semibold px-4 py-2 opacity-70 hover:opacity-100"}>
                <Image src={`/assets/images/${item.image}.png`} alt={item.name} width={100} height={100}/>

            </ButtonCustom>
          </li>
            )
          })}
          
        </ul>
      </div>
    </div>

    </>
  );
}
