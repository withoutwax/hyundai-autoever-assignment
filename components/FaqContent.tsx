"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import { FaqDataProps, FaqContentProps } from "@/types";
import { v4 as uuidv4 } from "uuid";

export default function FaqContent({ data }: { data: FaqContentProps[] }) {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [limit, setLimit] = useState(10);

  const categoryList = [
    ...new Set(data.map((faq: FaqContentProps) => faq.category)),
  ];

  const categoryData = data.filter((faq: FaqContentProps, _: number) => {
    return activeCategory === "전체" || faq.category === activeCategory;
  });

  return (
    <div className="">
      <div className="mb-[16px] lg:mb-[20px] xl:mb-[24px]">
        <label
          className="h-[36px] md:h-[44px] lg:h-[48px] inline-block cursor-pointer"
          onClick={() => {
            setActiveCategory("전체");
            setLimit(10);
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
            } not-italic flex items-center px-[12px] md:px-[14px] lg:px-[20px] h-[36px] md:h-[44px] lg:h-[48px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold`}
          >
            전체
          </i>
        </label>
        {categoryList.map((category: string) => (
          <label
            className="h-[36px] md:h-[44px] lg:h-[48px] inline-block cursor-pointer"
            key={uuidv4()}
            onClick={() => {
              setActiveCategory(category);
              setLimit(10);
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
              } not-italic flex items-center px-[12px] md:px-[14px] lg:px-[20px] h-[36px] md:h-[44px] lg:h-[48px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold`}
            >
              {category}
            </i>
          </label>
        ))}
      </div>
      <Accordion.Root
        type="single"
        className="border-t-2 border-midnight"
        collapsible
      >
        {categoryData.slice(0, limit).map((faq: FaqContentProps, i: number) => {
          const uuid = uuidv4();
          return (
            <Accordion.Item key={uuid} value={uuid}>
              <Accordion.Header className="relative group">
                <Accordion.Trigger
                  className="border-b border-[#e6e8e9] w-full flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start pl-[0px] lg:pr-[16px] text-midnight font-semibold text-[20px] py-[16px] lg:py-[18px] xl:py-[24px] 
            data-[state=open]:bg-[#f8f8f8]
            after:content-[''] after:absolute after:bg-[url('/ic_arrow.svg')] after:bg-no-repeat after:bg-[auto_100%] after:right-[22px] after:w-[24px] after:lg:w-[32px] after:h-[24px] after:lg:h-[32px]  
            after:transition-transform after:ease-custom after:duration-300 group-data-[state=open]:after:rotate-180
          "
                >
                  <div className="flex items-center lg:items-start">
                    <em className="lg:w-[184px] xl:w-[208px] not-italic text-center lg:px-[24px] text-[#697278] font-normal text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] mb-[4px] lg:mb-0">
                      {faq.category}
                    </em>
                    {faq.subCategory && (
                      <em
                        className="lg:w-[184px] xl:w-[168px] not-italic text-center lg:px-[24px] text-[#697278] font-normal text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] mb-[4px] lg:mb-0 flex items-center justify-center
                                   before:lg:hidden before:content-[''] before:inline-block before:bg-[url('/ic_step_arrow.svg')] before:bg-no-repeat before:bg-contain before:h-[12px] before:w-[12px] before:mx-1 before:md:mx-2"
                      >
                        {faq.subCategory}
                      </em>
                    )}
                  </div>
                  <strong className="flex-1 text-left mr-[57.6px] lg:mr-[88px] text-[16px] lg:text-[18px] xl:text-[20px] lg:pl-[24px]">
                    {faq.question}
                  </strong>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="border-b border-[#e6e8e9] duration-[100ms] transition-[max-height] ease-in-out h-full overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="p-[24px] lg:px-[40px] lg:py-[32px]">
                  <p className="whitespace-pre-line text-[#697278] leading-[1.8em] text-[14px] md:text-[16px] lg:text-[18px]">
                    {faq.answer}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>

      {limit < categoryData.length && (
        <button
          onClick={() => {
            setLimit(limit + 10);
          }}
          className="text-[16px] lg:text-[20px] w-full text-center my-10"
        >
          +더보기
        </button>
      )}
    </div>
  );
}
