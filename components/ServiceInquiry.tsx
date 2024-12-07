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
      <h2 className="mt-[48px] xl:mt-[64px] mb-[16px] md:mb-[24px] text-[20px] md:text-[24px]">
        서비스 문의
      </h2>
      <div className="flex flex-col lg:flex-row md:grid md:grid-cols-2 gap-[12px] md:gap-[24px] lg:gap-[32px] lg:flex">
        <Link
          href={`/${data.serviceInquiry?.download}`}
          target="_blank"
          className="border border-black px-[1.4em] flex items-center justify-start md:justify-center h-[72px] md:h-[80px] w-full space-x-[8px]"
          download="위블비즈 상품제안서"
        >
          <i className="bg-[url('/ic_download.svg')] w-[32px] xl:w-[48px] h-[32px] xl:h-[48px] bg-contain bg-no-repeat bg-center"></i>
          <span className="text-[16px] xl:text-[18px] font-semibold">
            상품제안서 다운로드
          </span>
        </Link>
        <Link
          href={data.serviceInquiry?.register}
          className="border border-black px-[1.4em] flex items-center justify-start md:justify-center h-[72px] md:h-[80px] w-full space-x-[8px]"
        >
          <i className="bg-[url('/ic_write.svg')] w-[32px] xl:w-[48px] h-[32px] xl:h-[48px] bg-contain bg-no-repeat bg-center"></i>
          <span className="text-[16px] xl:text-[18px] font-semibold">
            상담문의 등록하기
          </span>
        </Link>
        <Link
          href={data.serviceInquiry?.kaTalk}
          target="_blank"
          rel="noreferrer"
          className="col-span-2 border border-black px-[1.4em] flex items-center justify-start md:justify-center h-[72px] md:h-[80px] w-full space-x-[8px]"
        >
          <i className="bg-[url('/ic_talk.svg')] w-[32px] xl:w-[48px] h-[32px] xl:h-[48px] bg-contain bg-no-repeat bg-center"></i>
          <span className="text-[16px] xl:text-[18px] font-semibold flex flex-col">
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
