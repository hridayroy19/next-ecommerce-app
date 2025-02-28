"use client";
import { useState, useEffect } from "react";

type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountDownFals() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the time left until midnight
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set time to 12 AM of the next day

    const diff = midnight.getTime() - now.getTime();

    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center py-6">
      <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
        {(["hours", "minutes", "seconds"] as const).map((unit) => (
          <div
            key={unit}
            className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg w-20 sm:w-24 md:w-28 lg:w-32 ${
              unit === "seconds"
                ? "border border-red-500 text-red-500"
                : "bg-gray-100"
            }`}
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">
              {timeLeft[unit].toString().padStart(2, "0")}
            </span>
            <span className="text-xs sm:text-sm md:text-base">
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
