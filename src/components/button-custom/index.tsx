import React from 'react'
import LayoutComp from '../layout-component';

type Props = {
  children: React.ReactNode,
  onClick?:any,
  className?:string,
}

const ButtonCustom = ({children,onClick,className,...passProps}:Props) => {
  const props = {
    onClick,
    ...passProps,
  };
  return (
    <>
      <button className={`${className}`} {...props}>
        {children}
      </button>

    </>
  )
}

export default ButtonCustom