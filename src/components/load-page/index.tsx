import * as React from 'react';
import './styles.css'
export interface ILoadPageProps {
}

export default function LoadPage (props: ILoadPageProps) {
  return (
    <div className='wrapper-load slide-out-blurred-right'>
      <div className="loader"></div>
      <h3 className='text-white my-6 tracking-in-expand'>Lofi Chill</h3>
    </div>
  );
}
