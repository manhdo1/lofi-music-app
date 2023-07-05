"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import DragCustom from "../dragableCustom";
import { date, day, months, year,hours as hours1,minutes as minute1 } from "./date";
const Lock = () => {
  const [hours, sethours] = useState<number | null>(null);
  const [minute, setMinute] = useState<string | null>(null);
  const [amPm, setamPm] = useState<string | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      getFormattedTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
 
  const getFormattedTime = () => {
    const amPm = hours1 >= 12 ? "PM" : "AM";
    const formattedHours = hours1 > 12 ? hours1 - 12 : hours;
    const formattedMinutes = minute1.toString().padStart(2, "0");
    sethours(formattedHours);
    setMinute(formattedMinutes);
    setamPm(amPm);
  };
  const pos = { x: 1200, y: 200 };
  return (
    <>
    <div id="clock-showhide">
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
          {day},{date} {months} {year}
        </div>
      </DragCustom>
      </div>
    </>
  );
};

export default Lock;
