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
    <div className="mt-[48px] lg:mt-[64px] bg-[#f8f8f8] rounded-[16px] p-[32px] lg:p-[40px] flex flex-col items-center justify-center">
      <h2 className="mb-[24px] lg:mb-[32px] text-[20px] lg:text-[32px]">
        <em className="not-italic text-mint">위블 비즈 App</em>
        {` `}지금 만나보세요!
      </h2>
      <div className="flex">
        <Link
          href={data.appInfo?.googlePlay}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-[8px] lg:rounded-[18px] mx-[8px] lg:mx-[16px] w-[264px] lg:w-[392px] h-[56px] lg:h-[64px] flex justify-center items-center font-bold text-[14px] lg:text-[18px] before:bg-[url('/logo_googleplay.svg')] before:bg-no-repeat before:bg-contain before:w-[24px] before:lg:w-[32px] before:h-[24px] before:lg:h-[32px] before:mr-[4px]"
        >
          Google Play
        </Link>
        <Link
          href={data.appInfo?.appStore}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-[8px] lg:rounded-[18px] mx-[8px] lg:mx-[16px] w-[264px] lg:w-[392px] h-[56px] lg:h-[64px] flex justify-center items-center font-bold text-[14px] lg:text-[18px] before:bg-[url('/logo_appstore.svg')] before:bg-no-repeat before:bg-contain before:w-[24px] before:lg:w-[32px] before:h-[24px] before:lg:h-[32px] before:mr-[4px]"
        >
          App Store
        </Link>
      </div>
    </div>
  );
}
