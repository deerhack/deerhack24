"use client";
import { memo, useEffect, useState } from "react";
import { cabinetBold, cabinetMedium, cabinetRegular } from "@/app/utils/fonts";

const Counter_wrapper = () => {
  const [isClient, setisClient] = useState(false);
  useEffect(() => {
    setisClient(true);
  }, []);
  const Counter_component = memo(Counter);
  return isClient ? <Counter_component /> : null;
};
const Counter = () => {
  const calculateTimeLeft = (): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    const countDownDate = new Date("May 10, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;
    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (number: number): string => {
    return number < 10 ? `0${number}` : number.toString();
  };

  return (
    <div className="text-magnolia">
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <p
            className={`text-2xl font-bold tracking-[.25rem] ${cabinetBold.className} `}
          >
            {addLeadingZero(timeLeft.days)}:
          </p>
          <span className={`text-[10px] mr-4 ${cabinetMedium.className}`}>
            Days
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p
            className={`text-2xl font-bold tracking-[.25rem] ${cabinetBold.className} `}
          >
            {addLeadingZero(timeLeft.hours)}:
          </p>
          <span className={` text-[10px] mr-4 ${cabinetMedium.className}`}>
            Hours
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p
            className={`text-2xl font-bold tracking-[.25rem] ${cabinetBold.className} `}
          >
            {addLeadingZero(timeLeft.minutes)}:
          </p>
          <span className={` text-[10px] mr-4 ${cabinetMedium.className}`}>
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center">
          <p
            className={`text-2xl font-bold tracking-[.25rem] ml-[-15px] ${cabinetBold.className} `}
          >
            {addLeadingZero(timeLeft.seconds)}
          </p>
          <span
            className={`font-medium text-[10px] mr-4 ${cabinetMedium.className}`}
          >
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter_wrapper;
