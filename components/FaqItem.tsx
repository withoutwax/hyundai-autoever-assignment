"use client";

import { useState } from "react";

export default function FaqItem({ faq }: { faq: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b border-[#e6e8e9] relative">
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-full flex items-center p-[16px] text-midnight font-semibold text-[20px] py-[24px] after:content-[''] after:absolute after:bg-[url('/ic_arrow.svg')] after:bg-no-repeat after:bg-[auto_100%] after:right-[22px] after:w-[32px] after:h-[32px]"
      >
        <em className="w-[208px] not-italic text-center px-[24px] text-[#697278] font-normal">
          {faq.category}
        </em>
        {faq.subCategory && (
          <em className="w-[208px] not-italic text-center px-[24px] text-[#697278] font-normal">
            {faq.subCategory}
          </em>
        )}
        <strong className="flex-1 text-left">{faq.question}</strong>
      </button>
      <div
        className={`border-t duration-[100ms] transition-[max-height] ease-in-out h-full overflow-hidden ${
          isOpen
            ? "max-h-screen border-[#e6e8e9]"
            : "max-h-0 border-transparent"
        }`}
      >
        <div className="px-[40px] py-[32px]">
          <p className="whitespace-pre-line text-[18px] text-[#697278] leading-[1.8em]">
            {faq.answer}
          </p>
        </div>
      </div>
    </li>
  );
}
