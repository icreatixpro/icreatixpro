"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(async (data) => {
        const loc = `${data.city}, ${data.region}, ${data.country_name}`;
        setLocation(loc);

        const w = await fetch(`https://wttr.in/${data.city}?format=%t`);
        const temp = await w.text();
        setWeather(temp);
      })
      .catch(() => {
        setLocation("Your Location");
        setWeather("--");
      });
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-2 text-sm text-gray-600 bg-white/70 backdrop-blur-xl border-b">

      <div>📍 {location}</div>

      <div className="flex gap-6">
        <span>🌤️ {weather}</span>
        <span>⏰ {time}</span>
      </div>

    </div>
  );
}