"use client";
import * as React from "react";
import ButtonAction from "./button";
import ShowHideButton from "../showHide";
import ButtonCustom from "../button-custom";
import LayoutComp from "../layout-component";
import { ClockSVG, TodoSVG } from "../icons-svg";
import MyTooltip from "../tooltip";
const Navbar = () => {
  const [isShow, setIsShow] = React.useState<Boolean>(true);
  const handleShow = React.useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);
  const handleShowHide = (id: string) => {
    let getElementID = document.getElementById(id);
    if (getElementID?.classList.contains("hidden-todo")) {
      getElementID.classList.remove("hidden-todo");
    } else getElementID?.classList.add("hidden-todo");
  };

  return (
    <>
      <nav className="bg-transparent ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            <div className="flex flex-1 items-center justify-end ">
              <div className="flex space-x-4 items-center ">
                <div
                  className={`flex space-x-4 items-center ${
                    !isShow ? "opacity-0" : ""
                  }`}
                >
                  <ButtonAction />
                </div>
                {/* Hide button */}
                <LayoutComp
                  className={`px-2 hover:opacity-90 ${
                    isShow ? "opacity-70" : "opacity-40"
                  }  `}
                >
                  <ButtonCustom className={"text-white"} onClick={handleShow}>
                    <ShowHideButton isShow={isShow} />
                  </ButtonCustom>
                </LayoutComp>
                <LayoutComp
                  className={`px-2 hover:opacity-90 ${
                    isShow ? "opacity-70" : "opacity-40"
                  }  `}
                >
                  <MyTooltip text="Show/hide TodoList">
                    <ButtonCustom
                      className={"text-white"}
                      onClick={() => handleShowHide("todo-showhide")}
                    >
                      <TodoSVG />
                    </ButtonCustom>
                  </MyTooltip>
                </LayoutComp>

                <LayoutComp
                  className={`px-2 hover:opacity-90 ${
                    isShow ? "opacity-70" : "opacity-40"
                  }  `}
                >
                  <MyTooltip text="Show/hide Clock">
                    <ButtonCustom
                      className={"text-white"}
                      onClick={() => handleShowHide("clock-showhide")}
                    >
                      <ClockSVG />
                    </ButtonCustom>
                  </MyTooltip>
                </LayoutComp>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
