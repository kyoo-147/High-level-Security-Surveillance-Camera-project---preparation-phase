import React from "react";
import PhoneInput from "./PhoneInput.jsx";
import OTPInput from "./OTPInput.jsx";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import APP from "../../utils/firebase.js";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isOTP, setIsOTP] = React.useState(false);
  const auth = getAuth(APP);
  const handleGenerateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response);
          //clear recaptcha
          // ...
        },
        //clear recaptcha
        "expired-callback": () => {
          window.recaptchaVerifier.clear();
        },
      },
    );
  };

  const navigate = useNavigate();
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    const code = Array.from(e.target)
      .map((input) => input.value)
      .join("");

    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    const phone = e.target[0].value;
    // nếu là số điện thoại việt nam thì thêm +84
    const VNPhone = phone.startsWith("0") ? "+84" + phone.slice(1) : phone;
    //tạo recaptcha
    handleGenerateRecaptcha();
    //gửi otp
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, VNPhone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        console.log("OTP sent");
        window.confirmationResult = confirmationResult;
        // chuyên hướng sang trang nhập otp
        setIsOTP(true);
      })
      .catch((error) => {
        // clear recaptcha
        console.log(error);
        window.recaptchaVerifier.clear();
        // Error; SMS not sent
        switch (error.code) {
          case "auth/invalid-phone-number":
            alert("Số điện thoại không hợp lệ");
            break;
          case "auth/too-many-requests":
            alert("Quá nhiều lần gửi mã OTP");
            break;
          default:
            alert("Đã có lỗi xảy ra");
            break;
        }
        // ...
      });
  };

  return (
    // CARD

    <form
      onSubmit={isOTP ? handleVerifyOTP : handleSendOTP}
      className="mx-auto max-w-md"
    >
      {isOTP ? <OTPInput /> : <PhoneInput />}
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        Format: +84 39 402 1234
      </p>
      <div id="recaptcha-container"></div>
      <button
        type="submit"
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isOTP ? "Xác nhận" : "Gửi mã OTP"}
        <svg
          className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </form>
  );
};

export default LoginForm;
