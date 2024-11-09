"use client";

import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // ตั้ง Timer ให้รันทุกวินาที
    const timer = setInterval(() => {
      const newTime = new Date(); // เรียกใช้เวลาใหม่ทุกวินาที
      setTime(newTime); // อัปเดตเวลาให้ตรงกับระบบ
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
