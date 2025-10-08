"use client";

import { useRef, useState } from "react";

export default function OTPInputUI({
  length = 6,
  onChange,
}: {
  length?: number;
  onChange?: (otp: string) => void;
}) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return; // only digits

    const newOtp = [...otp];
    newOtp[idx] = val.charAt(val.length - 1); // only last digit if user pastes
    setOtp(newOtp);

    if (onChange) onChange(newOtp.join(""));

    // focus next input if available
    if (val && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace") {
      if (otp[idx]) {
        // clear current input
        const newOtp = [...otp];
        newOtp[idx] = "";
        setOtp(newOtp);
        if (onChange) onChange(newOtp.join(""));
      } else if (idx > 0) {
        // move to previous input
        inputsRef.current[idx - 1]?.focus();
        const newOtp = [...otp];
        newOtp[idx - 1] = "";
        setOtp(newOtp);
        if (onChange) onChange(newOtp.join(""));
      }
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[idx]}
          ref={(el) => (inputsRef.current[idx] = el!)}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className="w-12 h-12 text-center text-lg text-black font-medium border border-gray-300 rounded-lg 
                     focus:border-epiclinx-teal focus:ring-2 focus:ring-epiclinx-teal outline-none"
        />
      ))}
    </div>
  );
}
