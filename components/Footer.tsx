"use client";

import Link from "next/link";
import ModalButton from "@/components/ModalButton";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import { TermsProps } from "@/types";

export default function Footer() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["terms"],
    queryFn: async () => {
      const res = fetch("http://localhost:3001/terms");
      return (await res).json();
    },
  });

  if (isLoading) {
    return <div className="py-20 text-center">로딩중입니다...</div>;
  }

  if (error) {
    return <div className="py-20 text-center">에러가 발생했습니다.</div>;
  }

  // console.log("Footer:", data, isPending, error);

  return (
    <footer className="bg-midnight px-[24px] md:px-[48px]">
      <div className="w-full max-w-[1660px] mx-auto pt-[18px] md:pt-[34px] pb-[29px] md:pb-[44px] lg:py-0 lg:h-[176px] gap-6 lg:gap-0 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex flex-col items-start lg:items-end">
          <span className="text-white font-bold lg:mb-[10px] h-[52px] lg:h-auto flex gap-[24px] items-center">
            {data &&
              data.map((item: TermsProps) => (
                <ModalButton
                  title={item.title}
                  content={item.content}
                  key={uuidv4()}
                />
              ))}
          </span>
          <address className="text-[#81898f] not-italic text-[12px] md:text-[14px] leading-[22px] md:leading-[24px] lg:text-right">
            <span className="mr-[12px]">
              서울특별시 서초구 헌릉로 12
              <em className="not-italic ml-[12px] md:ml-0">기아㈜</em>
            </span>
            <br className="md:hidden" />
            <span className="mr-[12px]">
              대표:
              <i className="not-italic ml-1">송호성,&nbsp;최준영</i>
            </span>
            <br className="lg:hidden" />
            <span className="mr-[12px]">
              사업자등록번호:
              <i className="not-italic ml-1">119-81-02316</i>
            </span>
            <br className="md:hidden" />
            <span className="mr-[12px]">
              통신판매번호:
              <i className="not-italic ml-1">2006-07935</i>
            </span>
            <br className="lg:hidden" />
            <span className="mr-[12px]">
              고객센터:
              <i className="not-italic ml-1">1833-4964</i>
            </span>
            <br className="xl:hidden" />
            <span>
              제휴문의:&nbsp;
              <Link href="mailto:wible.biz@kia.com" className="underline">
                wible.biz@kia.com
              </Link>
            </span>
          </address>
        </div>
        <div className="lg:order-first">
          <p className="text-[#81898f] text-[12px] md:text-[14px] before:content-[''] before:bg-[url('/logo_kia.svg')] before:bg-no-repeat before:bg-[auto_100%] before:h-[32px] before:md:h-[48px] before:lg:h-[56px] before:mb-[2px] before:block">
            © 2023 KIA CORP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
