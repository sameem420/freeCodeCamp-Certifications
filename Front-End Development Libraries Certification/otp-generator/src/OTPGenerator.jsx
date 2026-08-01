import { useState, useEffect, useRef } from "react";

const OTPGenerator = () => {
  const [otp, setOtp] = useState("Click 'Generate OTP' to get a code");
  const [timer, setTimer] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const timerRef = useRef(null);

  const generateOTP = () => {
    const newOtp = (
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
    ).toString();
    setOtp(newOtp);
    setTimer(5);
    setIsDisabled(true);
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp}</h2>
      <p id="otp-timer" aria-live="polite" ref={timerRef}>
        {timer > 0
          ? `Expires in: ${timer} seconds`
          : otp.length === 6
            ? "OTP expired. Click the button to generate a new OTP."
            : ""}
      </p>
      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={isDisabled}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;
