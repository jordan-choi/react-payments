import React, { ButtonHTMLAttributes } from 'react';

const BackButtonSVG = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
      stroke="#525252"
      strokeWidth="1.5"
    />
  </svg>
);

export default function BackButton({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      tw="flex items-center justify-center border-none outline-none bg-transparent hover:cursor-pointer"
    >
      <BackButtonSVG />
    </button>
  );
}
