'use client'
import * as React from "react";
import ButtonAction from "./button";
import ShowHideButton from "../showHide";
import ButtonCustom from "../button-custom";
import LayoutComp from "../layout-component";
import Lock from "../lock";
export interface INavbarProps {}

const  Navbar = (props: INavbarProps) => {
  const listMusic = [{}];
  const [isShow, setIsShow] = React.useState<Boolean>(true)
  const handleShow = React.useCallback(() => {
    setIsShow(!isShow)
  },[isShow])
  return (
    <>
      <nav className="bg-transparent ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            <div className="flex flex-1 items-center justify-end ">
              <div className="flex space-x-4 items-center ">
                {/* Đồng hồ */}
                <Lock/>
                {/* -------- */}
                <ButtonAction />
                {/* ------------- */}
                <LayoutComp className="px-2 hover:opacity-90 opacity-70 ">
                  <ButtonCustom className={"text-white"} onClick={handleShow}>
                    <ShowHideButton isShow={isShow}/>
                  </ButtonCustom>
                </LayoutComp>
               
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar