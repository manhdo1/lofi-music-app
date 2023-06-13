import React from "react";

type Props = {
    children?:React.ReactNode,
    text?:string
};

const MyTooltip = ({children,text}:Props) => {
  return (
    <>
      <div className="group flex relative w-fit">
        {children}
        <span
          className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
-translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
        >
          {text}
        </span>
      </div>
    </>
  );
};
export default MyTooltip