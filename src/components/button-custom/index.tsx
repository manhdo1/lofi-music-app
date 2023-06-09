import React from 'react'

type Props = {}

const ButtonCustom = ({children,onClick,className,...passProps}:any) => {
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