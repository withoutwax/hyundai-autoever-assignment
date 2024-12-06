"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchPageData } from "@/app/actions";

export default function ServiceInquiry() {
  const { data } = useQuery({
    queryKey: ["page"],
    queryFn: fetchPageData,
  });

  // console.log("Service Inquiry", data);

  return (
    <>
      <h2 className="mt-[48px] lg:mt-[64px] mb-[24px]">서비스 문의</h2>
      <div className="grid grid-cols-2 gap-[24px] lg:flex">
        <Link
          href={`/${data.serviceInquiry?.download}`}
          target="_blank"
          className="border border-black px-[1.4em] flex items-center justify-center h-[80px] mx-[16px] w-full space-x-[8px]"
          download="위블비즈 상품제안서"
        >
          <i className="bg-[url('/ic_download.svg')] w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] bg-contain bg-no-repeat bg-center"></i>
          <span className="text-[16px] lg:text-[18px] font-semibold">
            상품제안서 다운로드
          </span>
        </Link>
        <Link
          href={data.serviceInquiry?.register}
          className="border border-black px-[1.4em] flex items-center justify-center h-[80px] mx-[16px] w-full space-x-[8px]"
        >
          <i className="bg-[url('/ic_write.svg')] w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] bg-contain bg-no-repeat bg-center"></i>
          <span className="text-[16px] lg:text-[18px] font-semibold">
            상담문의 등록하기
          </span>
        </Link>
        <Link
          href={data.serviceInquiry?.kaTalk}
          target="_blank"
          rel="noreferrer"
          className="col-span-2 border border-black px-[1.4em] flex items-center justify-center h-[80px] mx-[16px] w-full space-x-[8px]"
        >
          <i className="bg-[url('/ic_talk.svg')] w-[32px] lg:w-[48px] h-[32px] lg:h-[48px] bg-contain bg-no-repeat bg-center"></i>
          <span className="text-[16px] lg:text-[18px] font-semibold flex flex-col">
            카톡으로 문의하기
            <em className="text-[14px] not-italic font-normal">
              ID: Wible Biz (위블 비즈)
            </em>
          </span>
        </Link>
      </div>
    </>
  );
}
