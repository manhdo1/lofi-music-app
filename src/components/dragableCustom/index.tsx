import * as React from "react";
import Draggable from "react-draggable";
import './style.css'
export interface IDragCustomProps {
    children:React.ReactNode
    defaultPosition?: any
    className?:string
}

export default function DragCustom({children,defaultPosition,className}: IDragCustomProps) {
  return (
    <>
      <Draggable defaultPosition={defaultPosition}>
        <div className={`cursor-move transparent-background rounded-lg  ${className} `}>
          <div className="content">
            {children}
          </div>
        </div>
      </Draggable>
    </>
  );
}
