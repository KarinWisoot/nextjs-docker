"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // ตั้ง Timer ให้รันทุกวินาที
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // เคลียร์ Timer เมื่อ component ถูกทำลาย
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <span className="countdown font-mono text-4xl">
        <span style={{ "--value": time.getHours() }}></span>:
        <span style={{ "--value": time.getMinutes() }}></span>:
        <span style={{ "--value": time.getSeconds() }}></span>
      </span>
    </div>
  );
}
