"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [mousePressed, setMousePressed] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      const { scrollY } = window;
      if (scrollY > 10) {
        setTop(false);
      } else {
        setTop(true);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className="sticky bottom-0 left-0 w-full pointer-events-none block z-30">
      <div
        className={`absolute right-[34px] bottom-[40px] flex items-center flex-col pointer-events-none transition-all duration-[600ms] ease-custom origin-bottom ${
          top ? "scale-0" : ""
        }`}
      >
        <button
          className={`bg-[url('/ic_top.svg')] w-[56px] h-[56px] mt-[8px] bg-[28px_auto] bg-no-repeat text-[0px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] rounded-full pointer-events-auto bg-white ${
            mousePressed ? "animate-pulse bg-[center_60%]" : " bg-center"
          }

          `}
          onMouseDown={() => {
            setMousePressed(true);
          }}
          onMouseUp={() => {
            setMousePressed(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          상단으로
        </button>
      </div>
    </div>
  );
}
