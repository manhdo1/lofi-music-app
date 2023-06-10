'use client'
import React, { useEffect, useState } from 'react'
import LayoutComp from '../layout-component';

type Props = {}

const Lock = (props: Props) => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const getFormattedTime = () => {
    if (!currentTime) {
      return 'Load...';
    }
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12).toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  };
  return (
    <>
      <LayoutComp className='px-2 items-center' >
        <div className='text-white font-extrabold ' >{getFormattedTime()}</div>
      </LayoutComp>
    </>
  )
}

export default Lock