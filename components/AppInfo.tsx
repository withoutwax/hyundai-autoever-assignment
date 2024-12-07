"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchPageData } from "@/app/actions";

export default function AppInfo() {
  const { data } = useQuery({
    queryKey: ["page"],
    queryFn: fetchPageData,
  });

  // console.log("App Info:", data.appInfo);

  return (
    <div className="mt-[48px] xl:mt-[64px] bg-[#f8f8f8] rounded-[16px] p-[24px] md:p-[32px] lg:p-[32px] xl:p-[40px] flex flex-col items-center justify-center">
      <h2 className="mb-[4px] md:mb-[24px] xl:mb-[32px] text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] leading-[22.4px] md:leading-[34px]">
        <em className="not-italic text-mint">위블 비즈 App</em>
        {` `}지금 만나보세요!
      </h2>
      <div className="flex flex-col md:flex-row mt-[12px] md:mt-0 space-y-[12px] md:space-y-0">
        <Link
          href={data.appInfo?.googlePlay}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-[8px] mx-[8px] lg:mx-[16px] w-[264px] lg:w-[296px] xl:w-[392px] h-[48px] md:h-[56px] lg:h-[64px] flex justify-center items-center font-bold text-[14px] lg:text-[16px] xl:text-[18px] before:bg-[url('/logo_googleplay.svg')] before:bg-no-repeat before:bg-contain before:w-[24px] before:lg:w-[32px] before:h-[24px] before:lg:h-[32px] before:mr-[4px]"
        >
          Google Play
        </Link>
        <Link
          href={data.appInfo?.appStore}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-[8px] mx-[8px] lg:mx-[16px] w-[264px] lg:w-[296px] xl:w-[392px] h-[48px] md:h-[56px] lg:h-[64px] flex justify-center items-center font-bold text-[14px] lg:text-[16px] xl:text-[18px] before:bg-[url('/logo_appstore.svg')] before:bg-no-repeat before:bg-contain before:w-[24px] before:lg:w-[32px] before:h-[24px] before:lg:h-[32px] before:mr-[4px]"
        >
          App Store
        </Link>
      </div>
    </div>
  );
}
