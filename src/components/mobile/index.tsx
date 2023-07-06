import * as React from 'react';
import style from './mobile.module.css'
export interface IMobileUiProps {
}

export default function MobileUi (props: IMobileUiProps) {
  return (
    <>
      <div className={style.wrapper}>
      <h1 className="logoTodo select-none text-center w-[80%]">
          <b>
            <span>Bạn hãy </span>
            sử dụng 
            <span> PC </span>
             <span>để </span>
             trải 
             <span> nghiệm nhé  </span>
             <span>{`(>'-'<)`}</span>
          </b>
        </h1>
      </div>
    </>
  );
}
