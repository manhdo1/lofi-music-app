let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const currentTime = new Date();
const day = weekDay[currentTime.getDay()];
const months = currentTime.toLocaleString("default", { month: "long" });
const year = currentTime.getFullYear();
const date = currentTime.getDate();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
export { day, months, year, date, hours, minutes };
