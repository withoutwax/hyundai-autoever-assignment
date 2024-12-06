"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function ScrollToTopButton() {
  const [mousePressed, setMousePressed] = useState(false);
  const queryClient = useQueryClient();

  return (
    <div className="sticky bottom-0 left-0 w-full pointer-events-none block z-30">
      <div className="absolute right-[34px] bottom-[40px] flex items-center flex-col pointer-events-none ">
        <button
          className={`bg-[url('/ic_top.svg')] w-[56px] h-[56px] mt-[8px] bg-[28px_auto] bg-no-repeat  text-[0px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] rounded-full pointer-events-auto bg-white ${
            mousePressed ? "animate-pulse bg-[center_60%]" : " bg-center"
          }`}
          onMouseDown={() => {
            console.log("Mouse Pressed");
            queryClient.invalidateQueries();
            setMousePressed(true);
          }}
          onMouseUp={() => {
            console.log("Mouse Released");
            setMousePressed(false);
          }}
        >
          상단으로
        </button>
      </div>
    </div>
  );
}
