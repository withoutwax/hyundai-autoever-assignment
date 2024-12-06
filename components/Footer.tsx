import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-midnight px-[48px]">
      <div className="w-full max-w-[1660px] mx-auto pt-[34px] pb-[44px] lg:py-0 lg:h-[176px] gap-6 lg:gap-0 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex flex-col items-start lg:items-end">
          <span className="text-white font-bold space-x-[24px] lg:mb-[10px] h-[52px] lg:h-auto flex items-center">
            <button className="hover:underline">개인정보 처리방침</button>
            <button className="hover:underline font-normal">이용약관</button>
          </span>
          <address className="text-[#81898f] not-italic text-[14px] leading-[24px]">
            <span className="mr-[12px]">
              서울특별시 서초구 헌릉로 12 {` `}
              <em className="not-italic">기아㈜</em>
            </span>
            <span className="mr-[12px]">
              대표: {` `}
              <i className="not-italic">송호성, 최준영</i>
            </span>
            <br className="lg:hidden" />
            <span className="mr-[12px]">
              사업자등록번호: {` `}
              <i className="not-italic">119-81-02316</i>
            </span>
            <span className="mr-[12px]">
              통신판매번호: {` `}
              <i className="not-italic">2006-07935</i>
            </span>
            <br className="lg:hidden" />
            <span className="mr-[12px]">
              고객센터: {` `}
              <i className="not-italic">1833-4964</i>
            </span>
            <span className="mr-[12px]">
              제휴문의: {` `}
              <Link href="mailto:wible.biz@kia.com" className="underline">
                wible.biz@kia.com
              </Link>
            </span>
          </address>
        </div>
        <div className="lg:order-first">
          <p className="text-[#81898f] text-[14px] before:content-[''] before:bg-[url('/logo_kia.svg')] before:bg-no-repeat before:bg-[auto_100%] before:h-[48px] before:lg:h-[56px] before:mb-[2px] before:block">
            © 2023 KIA CORP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
