import * as React from "react";
import ButtonAction from "./button";
import ShowHideButton from "../showHide";
export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <>
      <nav className="bg-transparent ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            <div className="flex flex-1 items-center justify-end ">
                <div className="flex space-x-4 items-center ">
                  <ButtonAction/>
                  <ShowHideButton/>
                </div>
              </div>
            </div>
          </div>
    
      </nav>
    </>
  );
}
