"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import DragCustom from "../dragableCustom";
import { pos } from "@/constants/constant";
const Lock = () => {
  const [hours, sethours] = useState<number | null>(null);
  const [minute, setMinute] = useState<string | null>(null);
  const [amPm, setamPm] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const getFormattedTime = useCallback(() => {
    const amPm = new Date().getHours() >= 12 ? "PM" : "AM";
    const formattedHours = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
    const formattedMinutes = new Date().getMinutes().toString().padStart(2, "0");
    sethours(formattedHours);
    setMinute(formattedMinutes);
    setamPm(amPm);
  },[]);
  useEffect(() => {
     intervalRef.current = setInterval(() => {
      getFormattedTime();
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [getFormattedTime]);
  const dayOfWeek = date.toLocaleDateString(undefined, { weekday: 'long' });
  const day = date.getDate();
  const month = date.toLocaleDateString(undefined, { month: 'long' });
  const year = date.getFullYear();
  return (
    <>
    <div id="clock-showhide" >
      <DragCustom defaultPosition={pos} className="w-fit">
        <div className="text-white logo select-none " >
          {hours ? (
            <b>
              <span>{hours}</span>:<span>{minute} </span>
              <p className="inline text-4xl">{amPm}</p>
            </b>
          ) : (
            "Load..."
          )}
        </div>
        <div className="text-white date text-4xl select-none">
          {dayOfWeek}, {day} {month} {year}
        </div>
    
      </DragCustom>
      </div>
    </>
  );
};

export default Lock;
