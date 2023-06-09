import * as React from "react";

export interface IDropDownMenuProps {}

export default function DropDownMenu({isDropdownOpen } : any) {
    
  return (
    <>
      <div
        className={` ${isDropdownOpen ? 'block' : 'hidden'}  bg-black transition-all duration-600 ease-in-out absolute  right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1 text-white" role="none">
          <a
            href="#"
            className=" block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            Account settings
          </a>
        </div>
      </div>
    </>
  );
}
