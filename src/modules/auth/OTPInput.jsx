import React, { useEffect, useRef } from "react";

const OTPInput = () => {
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();

    const handleInput = (index, value) => {
      if (index < inputRefs.current.length - 1 && value) {
        inputRefs.current[index + 1].focus();
      }
    };

    const handleBackspace = (index, value) => {
      if (index > 0 && !value) {
        inputRefs.current[index - 1].focus();
      }
    };

    const inputEventListeners = inputRefs.current.map((input, index) => {
      const handleInputEvent = (e) => handleInput(index, e.target.value);
      const handleBackspaceEvent = (e) => {
        if (e.key === "Backspace") {
          handleBackspace(index, e.target.value);
        }
      };

      input.addEventListener("input", handleInputEvent);
      input.addEventListener("keydown", handleBackspaceEvent);

      return { input, handleInputEvent, handleBackspaceEvent };
    });

    return () => {
      inputEventListeners.forEach(
        ({ input, handleInputEvent, handleBackspaceEvent }) => {
          input.removeEventListener("input", handleInputEvent);
          input.removeEventListener("keydown", handleBackspaceEvent);
        },
      );
    };
  }, []);

  return (
    <div className="flex gap-5">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="h-14 w-14 flex-1">
          <input
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
            className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-5 text-center text-lg outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1"
            type="text"
            name={"otp" + index}
            id=""
          />
        </div>
      ))}
    </div>
  );
};

export default OTPInput;
