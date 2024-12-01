"use client";
import { useState } from "react";

export default function FaqContent({ data }: { data: any }) {
  const [activeCategory, setActiveCategory] = useState("전체");

  const categoryList = [...new Set(data.faq.map((faq: any) => faq.category))];
  console.log(data);

  return (
    <div className="">
      <div className="mb-[24px]">
        <label
          className="h-[48px] inline-block cursor-pointer"
          onClick={() => {
            setActiveCategory("전체");
          }}
        >
          <input
            type="radio"
            name="category"
            defaultChecked={true}
            className="hidden absolute"
            onChange={() => {
              console.log("전체");
            }}
          />
          <i
            className={`${
              activeCategory === "전체"
                ? "text-white bg-mint rounded-[24px]"
                : "text-midnight"
            } not-italic flex items-center px-[20px] h-[48px]  text-[18px] font-semibold`}
          >
            전체
          </i>
        </label>
        {categoryList.map((category: any, i: number) => (
          <label
            className="h-[48px] inline-block cursor-pointer"
            key={i}
            onClick={() => {
              setActiveCategory(category);
            }}
          >
            <input
              type="radio"
              name="category"
              defaultChecked={true}
              className="hidden absolute"
              onChange={() => {
                console.log(category);
              }}
            />
            <i
              className={`${
                activeCategory === category
                  ? "text-white bg-mint rounded-[24px]"
                  : "text-midnight"
              } not-italic flex items-center px-[20px] h-[48px]  text-[18px] font-semibold`}
            >
              {category}
            </i>
          </label>
        ))}
      </div>
      <ul className="border-t-2 border-midnight">
        {data.faq
          .filter(
            (faq: any) =>
              activeCategory === "전체" || faq.category === activeCategory
          )
          .map((faq: any, i: number) => (
            <li className="border-b border-[#e6e8e9] relative" key={i}>
              <button
                type="button"
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
              <div className="border-t border-[#e6e8e9] px-[40px] py-[32px] text-[18px] text-[#697278] leading-[1.8em]">
                <p className="whitespace-pre-line">{faq.answer}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
