"use client";

import { useState, useRef, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import FaqContent from "./FaqContent";
import { useQuery } from "@tanstack/react-query";
import { fetchFaqData } from "@/app/actions";
import NoResult from "./NoResult";
import IsLoading from "@/components/IsLoading";
import { FaqDataProps, FaqContentProps } from "@/types";
import { v4 as uuidv4 } from "uuid";

export default function Faqs() {
  const [tab, setTab] = useState("서비스 도입");
  const [search, setSearch] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["faq"],
    queryFn: async () => {
      const res = fetch("http://localhost:3001/faq");
      return (await res).json();
    },
    initialData: fetchFaqData,
  });
  console.log("FAQ", data, isPending, isError, error);

  const searchResultHeader = ({
    searchedData,
    setSearch,
  }: {
    searchedData: FaqContentProps[];
    setSearch: Dispatch<SetStateAction<string>>;
  }) => {
    return (
      <div className="flex justify-between my-[16px] lg:my-[24px]">
        <h2 className="text-[16px]">
          검색결과 총 <span className="text-mint">{searchedData.length}</span>{" "}
          건
        </h2>
        <button
          type="button"
          onClick={() => {
            setSearch("");
            if (searchInput.current) {
              searchInput.current.value = "";
            }
          }}
          className="text-[14px] flex items-center before:bg-[url('/ic_init.svg')] before:inline-block before:bg-[auto_100%] before:bg-no-repeat before:w-[20px] before:lg:w-[24px] before:h-[20px] before:lg:h-[24px] before:content-[''] before:mr-[2px]"
        >
          검색초기화
        </button>
      </div>
    );
  };

  return (
    <div>
      <ul className="flex mb-[24px] md:mb-[32px] lg:mb-[48px]">
        <li
          className={`w-full h-[38px] md:h-[46px] lg:h-[56px] ${
            tab === "서비스 도입"
              ? "bg-midnight text-white font-semibold"
              : "bg-white text-midnight border border-[#cdd0d2]"
          }`}
        >
          <Link
            href={``}
            onClick={() => {
              setTab("서비스 도입");
              setSearch("");
              if (searchInput.current) {
                searchInput.current.value = "";
              }
            }}
            className="text-[14px] md:text-[16px] lg:text-[20px] flex justify-center items-center p-[8px] h-full"
          >
            <span>서비스 도입</span>
          </Link>
        </li>
        <li
          className={`w-full h-[38px] md:h-[46px] lg:h-[56px] ${
            tab === "서비스 이용"
              ? "bg-midnight text-white font-semibold"
              : "bg-white text-midnight border border-[#cdd0d2]"
          }`}
        >
          <Link
            href={``}
            onClick={() => {
              setTab("서비스 이용");
              setSearch("");
              if (searchInput.current) {
                searchInput.current.value = "";
              }
            }}
            className="text-[14px] md:text-[16px] lg:text-[20px] flex justify-center items-center p-[8px] h-full"
          >
            <span>서비스 이용</span>
          </Link>
        </li>
      </ul>
      <form className="mb-[16px] lg:mb-[24px]">
        <div className="md:bg-[#f8f8f8] p-0 md:p-[16px] lg:p-[24px] flex justify-center items-center">
          <div className="relative flex md:justify-end items-center border border-midnight bg-white w-full">
            <input
              type="search"
              placeholder="찾으시는 내용을 입력해 주세요"
              ref={searchInput}
              className="w-full h-[40px] md:h-[46px] lg:h-[56px] pl-[16px] pr-[94px] focus:outline-none placeholder:text-[14x] placeholder:md:text-[16px] placeholder:lg:text-[18px] text-[14px] md:text-[18px] appearance-none"
            ></input>
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  if (searchInput.current) {
                    searchInput.current.value = "";
                  }
                }}
                className="absolute inset-y-0 right-[55px] h-full w-[40px] text-[0px] before:m-auto before:block before:content-[''] before:bg-[url('/ic_clear.svg')] before:h-[24px] before:w-[24px] before:aspect-square before:bg-[auto_100%] before:bg-no-repeat"
              >
                다시입력
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setSearch(searchInput.current?.value || "");
              }}
              className="absolute inset-y-0 aspect-square right-0 h-full text-[0px] before:m-auto before:block before:content-[''] before:bg-[url('/ic_search.svg')] before:h-[32px] before:w-[32px] before:aspect-square before:bg-[auto_100%] before:bg-no-repeat"
            >
              검색
            </button>
          </div>
        </div>
      </form>
      {isPending ? <IsLoading /> : !data && <NoResult />}
      {data &&
        data.map((data: FaqDataProps) => {
          const searchedData = data.faq.filter(
            (faq: FaqContentProps) =>
              faq.question.includes(search) || faq.answer.includes(search)
          );

          if (data.tab === "서비스도입" && tab === "서비스 도입") {
            return (
              <div key={uuidv4()}>
                {search &&
                  searchResultHeader({
                    searchedData,
                    setSearch,
                  })}
                <FaqContent data={searchedData} />
              </div>
            );
          } else if (data.tab === "서비스이용" && tab === "서비스 이용") {
            return (
              <div key={uuidv4()}>
                {search &&
                  searchResultHeader({
                    searchedData,
                    setSearch,
                  })}
                <FaqContent data={searchedData} />
              </div>
            );
          }
        })}
    </div>
  );
}
