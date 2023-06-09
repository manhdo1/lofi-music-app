import React from "react";

type Props = {
  children: any;
  className?: string;
  ref?:any
};

const LayoutComp = ({ children, className,ref }: Props) => {
  return (
    <>
      <div className={`${className} flex h-10 bg-[#2d241d]  rounded-lg `} ref={ref}>
        {children}
      </div>
    </>
  );
};

export default LayoutComp;
